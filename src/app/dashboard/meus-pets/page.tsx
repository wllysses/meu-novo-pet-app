import { cookies } from "next/headers";
import { prismaClient } from "@/lib/prisma";
import { Aside } from "@/components/Aside";
import { Modal } from "@/app/dashboard/meus-pets/components/Modal";
import { DeleteButton } from "@/app/dashboard/meus-pets/components/DeleteButton";


export default async function MeusPets() {
  
  const id = cookies().get('id');

  const pets = await prismaClient.pets.findMany({
    where: {
      usuario_id: parseInt(id!.value)
    }
  }).finally(() => {
    prismaClient.$disconnect();
  });

  return (
    <div className="min-h-screen flex max-md:flex-col">
      <Aside />
      <main className="flex-1 px-4 py-8">
        <h2 className="font-bold text-2xl border-b border-primary-color pb-2 text-primary-color">
          MEUS PETS
        </h2>
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
                      <DeleteButton petId={pet.id!} />
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
