import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Cadastro() {
  return (
    <>
      <Header />
      <main className="max-w-[500px] mx-auto my-12 px-6 min-h-[72vh]">
        <div className="text-primary-color mb-6">
          <h3 className="font-bold text-2xl">Criar sua conta</h3>
          <p className="text-lg">
            Preencha todas as informações
          </p>
        </div>
        <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">Nome</label>
                <input
                    type="text"
                    className="p-4 outline-primary-color"
                    placeholder="ex: José da Silva"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">E-mail</label>
                <input
                    type="email"
                    className="p-4 outline-primary-color"
                    placeholder="ex: seuemail@email.com"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">Telefone</label>
                <input
                    type="tel"
                    className="p-4 outline-primary-color"
                    placeholder="ex: 83988776655"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">Cidade/Estado</label>
                <select id="cityAndState" className="p-4">
                    <option value="" selected disabled>Selecionar</option>
                    <option value="Ibiranga/PE">Ibiranga/PE</option>
                    <option value="Juripiranga/PE">Juripiranga/PB</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">Senha</label>
                <input
                    type="password"
                    className="p-4 outline-primary-color"
                    placeholder="ex: Minhasenha@123"
                />
                <span className="text-xs text-primary-color font-semibold">Pelo menos 5 caracteres, uma letra maiúscula e um caractere especial.</span>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-primary-color">Confirmar senha</label>
                <input
                    type="password"
                    className="p-4 outline-primary-color"
                    placeholder="ex: Minhasenha@123"
                />
                <span className="text-xs text-primary-color font-semibold">Pelo menos 5 caracteres, uma letra maiúscula e um caractere especial.</span>
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
