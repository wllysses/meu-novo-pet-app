import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <main className="max-w-[500px] mx-auto mt-20 px-6 min-h-[72vh]">
        <div className="text-primary-color mb-6">
          <h3 className="font-bold text-2xl">Acessar conta</h3>
          <p className="text-lg">
            Faça login com a sua conta
          </p>
        </div>
        <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">E-mail</label>
                <input
                    type="text"
                    className="p-4 outline-primary-color"
                    placeholder="Nome"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">Senha</label>
                <input
                    type="password"
                    className="p-4 outline-primary-color"
                    placeholder="Nome"
                />
            </div>
          <button type="submit" className="bg-secondary-color p-4 text-white font-semibold hover:bg-[#f5c98c]">
            Entrar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
