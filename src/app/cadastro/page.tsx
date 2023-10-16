"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ErrorMessage } from "@/components/ErrorMessage";
import { api } from "@/services/api";

export default function Cadastro() {

  const registerValidationSchema = z
    .object({
      nome: z.string().min(1, "Preenchimento obrigatório."),
      email: z
        .string()
        .min(1, "Preenchimento obrigatório.")
        .email("Formato de e-mail inválido"),
      telefone: z.string().min(1, "Preenchimento obrigatório."),
      cidade: z.string().min(1, "Preenchimento obrigatório."),
      senha: z
        .string()
        .min(1, "Preenchimento obrigatório.")
        .min(5, "Mínimo 5 caracteres."),
      confirmar_senha: z
        .string()
        .min(1, "Preenchimento obrigatório.")
        .min(5, "Mínimo 5 caracteres."),
    })
    .refine((data) => data.senha === data.confirmar_senha, {
      path: ["confirmar_senha"],
      message: "As senhas precisam ser iguais.",
    });

  type RegisterValidationSchema = z.infer<typeof registerValidationSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValidationSchema>({
    resolver: zodResolver(registerValidationSchema),
  });

  async function handleRegisterUser(data: RegisterValidationSchema) {
    const fetchData = await api.postUser(data);

    if(fetchData.statusCode === 500) {
      console.log(fetchData.message);
      return;
    }

    console.log(fetchData.message);
    reset();

  }

  return (
    <>
      <Header />
      <main className="max-w-[500px] mx-auto my-12 px-6 min-h-[72vh]">
        <div className="text-primary-color mb-6">
          <h3 className="font-bold text-2xl">Criar sua conta</h3>
          <p className="text-lg">Preencha todas as informações</p>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(handleRegisterUser)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">Nome</label>
            <input
              type="text"
              className="p-4 outline-primary-color"
              placeholder="ex: José da Silva"
              {...register("nome")}
            />
            {errors.nome && <ErrorMessage message={errors.nome.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">E-mail</label>
            <input
              type="email"
              className="p-4 outline-primary-color"
              placeholder="ex: seuemail@email.com"
              {...register("email")}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">Telefone</label>
            <input
              type="tel"
              className="p-4 outline-primary-color"
              placeholder="ex: 83988776655"
              {...register("telefone")}
            />
            {errors.telefone && (
              <ErrorMessage message={errors.telefone.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">Cidade/Estado</label>
            <select id="cityAndState" className="p-4" {...register("cidade")}>
              <option value="" selected disabled>
                Selecionar
              </option>
              <option value="Ibiranga-PE">Ibiranga/PE</option>
              <option value="Juripiranga-PB">Juripiranga/PB</option>
            </select>
            {errors.cidade && <ErrorMessage message={errors.cidade.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">Senha</label>
            <input
              type="password"
              className="p-4 outline-primary-color"
              placeholder="ex: Minhasenha@123"
              {...register("senha")}
            />
            {errors.senha && <ErrorMessage message={errors.senha.message} />}
            <span className="text-xs text-primary-color font-semibold">
              Pelo menos 5 caracteres, uma letra maiúscula e um caractere
              especial.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">Confirmar senha</label>
            <input
              type="password"
              className="p-4 outline-primary-color"
              placeholder="ex: Minhasenha@123"
              {...register("confirmar_senha")}
            />
            {errors.confirmar_senha && (
              <ErrorMessage message={errors.confirmar_senha.message} />
            )}
            <span className="text-xs text-primary-color font-semibold">
              Pelo menos 5 caracteres, uma letra maiúscula e um caractere
              especial.
            </span>
          </div>
          <button
            type="submit"
            className="bg-secondary-color p-4 text-white font-semibold hover:bg-[#f5c98c]"
          >
            Cadastrar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
