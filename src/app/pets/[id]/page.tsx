import { IoLogoWhatsapp, IoCall } from "react-icons/io5";
import { prismaClient } from "@/lib/prisma";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default async function Pet({ params: { id } }: ParamsProps) {
  const pet = await prismaClient.pet.findUnique({
    where: {
      id: id,
    }
  });

  return (
    <>
      <Header />
      <main className="container mx-auto my-20 px-20 max-md:px-4 min-h-[70vh]">
        <h2 className="text-primary-color font-bold text-2xl animate-fade-down">
          {pet?.name}
        </h2>
        <div className="mt-6 flex gap-8 max-sm:flex-col">
          <section className="flex flex-col gap-4 relative animate-fade-down">
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
              className="object-cover shadow-md max-w-[500px] w-full rounded max-lg:max-w-full"
              loading="lazy"
            />
          </section>
          <section className="flex-1 animate-fade-up">
            <h2 className="font-bold text-primary-color text-2xl">
              Informações
            </h2>
            <ul className="mt-6 list-inside list-disc text-primary-color text-xl flex flex-col gap-2">
              <li className="list-item">{pet?.type}</li>
              <li className="list-item">Sexo: {pet?.sex}</li>
              <li className="list-item">Porte: {pet?.size}</li>
              <li className="list-item">Raça: {pet?.race}</li>
              <li className="list-item">Idade: {pet?.age}</li>
            </ul>
            <div className="mt-8 flex gap-4 max-lg:flex-col animate-fade-up">
              <button
                className="w-full bg-primary-color p-2 rounded text-white font-semibold hover:bg-[#6e29bcd2]"
                disabled={!pet?.available}
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=55${pet?.contact}&text=Ol%C3%A1.%20Tudo%20bem?%20Tenho%20interesse%20na%20ado%C3%A7%C3%A3o%20respons%C3%A1vel%20do%20pet%20${pet?.name}.`}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <IoLogoWhatsapp size={20} />
                  Whatsapp
                </a>
              </button>
              <button className="w-full bg-secondary-color p-2 rounded text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#f5c98c]">
                <a
                  href={`tel:+55${pet?.contact}`}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <IoCall size={20} />
                  Ligar
                </a>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
