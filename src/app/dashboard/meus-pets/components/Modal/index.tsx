"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { update } from "./action";
import { useRouter } from "next/navigation";

interface ModalProps {
    petId: string
    status: boolean
}

export function Modal({ petId, status }: ModalProps) {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(status);

  function handleOpenModal() {
    setIsOpen((prevState) => !prevState);
  }

  async function updatePet(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    const fetchData = await update({ petId, available: isAvailable });

    if(!fetchData) {
      toast.error('Algo deu errado 😢');
      return;
    }

    toast.success('Disponibilidade atualizada.')
    router.refresh();
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className="w-full rounded bg-blue-500 p-2 hover:bg-blue-400"
        onClick={handleOpenModal}
      >
        Editar
      </button>

      {isOpen ? (
        <div className="h-screen w-full bg-zinc-600 bg-opacity-50 fixed top-0 left-0 flex items-center justify-center z-50 px-4">
          <div className="max-w-lg w-full bg-white rounded p-4 animate-fade-down">
            <header className="flex items-center justify-between text-primary-color font-bold border-b border-primary-color pb-2">
              <h2>ATUALIZAR STATUS DO PET</h2>
              <button onClick={handleOpenModal}>X</button>
            </header>
            <form className="mt-4 flex flex-col" onSubmit={updatePet}>
              <label className="text-primary-color font-bold">Status</label>
              <select
                id="disponivel"
                className="p-2 text-primary-color border border-primary-color rounded"
                defaultValue={status ? "true" : "false"}
                onChange={(e) => setIsAvailable(e.target.value === "true" ? true : false)}
              >
                <option value="true">Disponível</option>
                <option value="false">Adotado</option>
              </select>
              <button
                type="submit"
                className="mt-4 bg-primary-color rounded self-end p-2"
              >
                Atualizar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
