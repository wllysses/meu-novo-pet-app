"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "@/services/api";
import { IPet } from "@/models/Pet";
import { Aside } from "@/components/Aside";
import { Spinner } from "@/components/Spinner";
import { Modal } from "@/components/Modal";
import { toast } from "react-toastify";

export default function MeusPets() {
  const router = useRouter();
  const { token, id } = parseCookies();

  const [pets, setPets] = useState<IPet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  async function removePet(id: number) {
    
    try {
      const fetchData = await api.deletePet(id);
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

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    setIsLoading(true);
    api
      .getPetsByUserId(parseInt(id))
      .then((resp) => setPets(resp))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [token, id]);

  return (
    <div className="min-h-screen flex max-md:flex-col">
      <Aside />
      <main className="flex-1 px-4 py-8">
        <h2 className="font-bold text-2xl border-b border-primary-color pb-2 text-primary-color">
          MEUS PETS
        </h2>
        { isLoading && <Spinner /> }
        {!pets.length ? (
          <span>Nenhum pet cadastrado.</span>
        ) : (
          <div className="w-full mt-6 grid grid-cols-5 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
            {pets &&
              pets.map((pet, index) => (
                <div
                  key={index}
                  className="max-w-[255px] w-full bg-white shadow relative"
                >
                  <span
                    className={`absolute top-2 right-2 px-4 rounded text-white ${
                      pet.disponivel ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {pet.disponivel ? "Disponível" : "Adotado"}
                  </span>
                  <img
                    src={pet.imagem}
                    alt={`Foto do pet: ${pet.nome}`}
                    loading="lazy"
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="p-4 text-primary-color">
                    <h4 className="font-bold text-2xl">{pet.nome}</h4>
                    <div className="mt-4 flex items-center gap-4 text-white font-semibold max-[420px]:flex-col">
                      <Modal petId={pet.id!} status={pet.disponivel!} />
                      <button 
                        className="w-full rounded bg-red-600 p-2"
                        onClick={() => removePet(pet.id!)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
}
