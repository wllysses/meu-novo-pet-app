"use client";

import { toast } from "react-toastify";
import { api } from "@/services/api";

interface ButtonProps {
    petId: number
}

export function DeleteButton({ petId }: ButtonProps) {

  async function removePet() {
    try {
      const fetchData = await api.deletePet(petId);
      toast.success(fetchData.message);
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado...");
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
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
