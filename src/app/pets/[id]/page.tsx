import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IoLogoWhatsapp, IoCall } from "react-icons/io5";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default function Pet({ params: { id } }: ParamsProps) {
  const disponivel = true;

  return (
    <>
      <Header />
      <main className="container mx-auto my-20 px-20 max-md:px-4 min-h-[70vh]">
        <h2 className="text-primary-color font-bold text-2xl">
          Malvo / <span className="text-secondary-color font-medium">Juripiraga-PB</span>
        </h2>
        <div className="mt-6 flex gap-8 max-sm:flex-col">
          <section className="flex flex-col gap-4 relative">
            <span
              className={`absolute top-2 right-2 px-4 rounded text-white ${
                disponivel ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {disponivel ? "Disponível" : "Adotado"}
            </span>
            <img
              src="https://i.imgur.com/538fzQk.jpg"
              alt=""
              className="object-cover max-w-[500px] rounded max-lg:max-w-[400px]"
              loading="lazy"
            />
          </section>
          <section className="flex-1">
            <h2 className="font-bold text-primary-color text-2xl">
              Informações
            </h2>
            <ul className="mt-6 list-inside list-disc text-primary-color text-xl flex flex-col gap-2">
              <li className="list-item">Gato</li>
              <li className="list-item">Sexo: Macho</li>
              <li className="list-item">Porte: Pequeno</li>
              <li className="list-item">Raça: Siamês</li>
              <li className="list-item">Idade: 2 anos</li>
            </ul>
            <div className="mt-8 flex gap-4 max-lg:flex-col">
              <button className="w-full bg-primary-color p-2 rounded text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#6e29bcd2]">
                <IoLogoWhatsapp size={20} />
                Whatsapp
              </button>
              <button className="w-full bg-secondary-color p-2 rounded text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#f5c98c]">
                <IoCall size={20} />
                Ligar
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
