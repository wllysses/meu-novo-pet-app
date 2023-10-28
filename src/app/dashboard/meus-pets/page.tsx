import { prismaClient } from "@/lib/prisma";
import { Sidebar } from "@/components/Sidebar";
import { Modal } from "@/app/dashboard/meus-pets/components/Modal";
import { DeleteButton } from "@/app/dashboard/meus-pets/components/DeleteButton";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function MeusPets() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const user = await prismaClient.user.findFirst({
    where: {
      name: session?.user.name,
    },
  });

  console.log(user);

  const pets = await prismaClient.pet.findMany({
    where: {
      userId: user?.id
    },
  });

  console.log(pets);

  return (
    <div className="min-h-screen flex max-md:flex-col">
      <Sidebar />
      <main className="flex-1 px-4 py-8">
        <h2 className="font-bold text-2xl border-b border-primary-color pb-2 text-primary-color animate-fade-down">
          MEUS PETS
        </h2>
        {!pets.length ? (
          <span>Nenhum pet cadastrado.</span>
        ) : (
          <div className="w-full mt-6 grid grid-cols-5 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 animate-fade-up">
            {pets &&
              pets.map((pet) => (
                <div
                  key={pet.id}
                  className="max-w-[255px] w-full bg-white shadow relative"
                >
                  <span
                    className={`absolute top-2 right-2 px-4 rounded text-white ${
                      pet?.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {pet?.available ? "Disponível" : "Adotado"}
                  </span>
                  <img
                    src={pet?.imageUrl}
                    alt={`Foto do pet: ${pet?.name}`}
                    loading="lazy"
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="p-4 text-primary-color">
                    <h4 className="font-bold text-2xl">{pet?.name}</h4>
                    <div className="mt-4 flex items-center gap-4 text-white font-semibold max-[420px]:flex-col">
                      <Modal petId={pet?.id!} status={pet?.available!} />
                      <DeleteButton petId={pet?.id!} />
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
