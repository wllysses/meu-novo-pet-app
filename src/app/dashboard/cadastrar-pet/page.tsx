import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { RegisterPetForm } from "./components/Form";
import { prismaClient } from "@/lib/prisma";

export default async function MeusPets() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const user = await prismaClient.user.findFirst({
    where: {
      name: session?.user?.name,
    },
  });

  return (
    <div className="min-h-screen flex max-md:flex-col">
      <Sidebar />
      <main className="flex-1 px-4 py-8">
        <h2 className="font-bold text-2xl border-b border-primary-color pb-2 text-primary-color animate-fade-down">
          Cadastrar Pet
        </h2>
        <RegisterPetForm userId={user?.id!} />
      </main>
    </div>
  );
}
