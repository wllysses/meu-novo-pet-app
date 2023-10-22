"use client";

import { api } from "@/services/api";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface ModalProps {
    petId: number
    status: boolean
}

export function Modal({ petId, status }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newStatus, setNewStateus] = useState(status);

  function handleOpenModal() {
    setIsOpen((prevState) => !prevState);
  }

  async function updatePet(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    try {
        const fetchData = await api.putPetStatus(petId, newStatus);
        toast.success(fetchData.message);
        handleOpenModal();
    } catch (err) {
        console.log(err);
    } finally {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
  }

  return (
    <>
      <button
        className="w-full rounded bg-blue-500 p-2"
        onClick={handleOpenModal}
      >
        Editar
      </button>

      {isOpen ? (
        <div className="h-screen w-full bg-zinc-800 bg-opacity-50 fixed top-0 left-0 flex items-center justify-center z-50">
          <div className="max-w-lg w-full bg-white rounded p-4">
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
                onChange={(e) => setNewStateus(e.target.value === "true" ? true : false)}
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
