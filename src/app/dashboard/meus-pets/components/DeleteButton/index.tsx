"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { destroy } from "./action";

interface DeleteButtonProps {
    petId: string
}

export function DeleteButton({ petId }: DeleteButtonProps) {

  const router = useRouter();

  async function removePet() {

    const fetchData = await destroy(petId);

    if(!fetchData) {
      toast.error('Algo deu errado 😢');
      return;
    }

    toast.success('Pet deletado com sucesso.')
    router.refresh();
  }

  return (
    <button
      className="w-full rounded bg-red-600 p-2 hover:bg-red-500"
      onClick={removePet}
    >
      Excluir
    </button>
  );
}
