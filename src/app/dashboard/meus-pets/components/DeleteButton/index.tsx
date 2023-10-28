"use client";

import { toast } from "react-toastify";
import { api } from "@/services/api";

import { destroy } from "./action";

interface ButtonProps {
    petId: string
}

export function DeleteButton({ petId }: ButtonProps) {

  async function removePet() {
    // try {
    //   const fetchData = await api.deletePet(petId);
    //   toast.success(fetchData.message);
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Algo deu errado...");
    // } finally {
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 800);
    // }

    const fetchData = await destroy(petId);

    if(!fetchData) {
      toast.error('Algo deu errado 😢');
      return;
    }

    toast.success('Pet deletado com sucesso.')
    setTimeout(() => {
      window.location.reload();
    }, 800);
  }

  return (
    <button
      className="w-full rounded bg-red-600 p-2"
      onClick={removePet}
    >
      Excluir
    </button>
  );
}
