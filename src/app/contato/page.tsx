import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="max-w-[500px] mx-auto mt-20 px-6 min-h-[72vh]">
        <div className="text-primary-color mb-6">
          <h3 className="font-bold text-2xl">Entrar em contato</h3>
          <p className="text-sm">
            Entre em contato conosco e ajude-nos a melhorar cada vez mais.
          </p>
        </div>
        <form className="w-full flex flex-col gap-2">
          <input
            type="text"
            className="p-4 outline-primary-color"
            placeholder="Nome"
          />
          <input
            type="text"
            className="p-4 outline-primary-color"
            placeholder="Telefone/Whatsapp"
          />
          <textarea
            className="resize-none p-4 outline-primary-color"
            rows={10}
            placeholder="Mensagem"
          />
          <button className="bg-secondary-color p-4 text-white font-semibold hover:bg-[#f5c98c]">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
