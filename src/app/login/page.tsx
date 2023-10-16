"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { toast } from "react-toastify";
import { api } from "@/services/api";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginValidationSchema = z.object({
    email: z
      .string()
      .trim()
      .min(1, "E-mail é obrigatório")
      .email("Forma de e-mail inválido."),
    senha: z.string().trim().min(1, "Senha é obrigatória"),
  });

  type LoginValidationSchema = z.infer<typeof loginValidationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginValidationSchema),
  });

  async function handleUserLogin(data: LoginValidationSchema) {
    try {
      setIsLoading(true);
      const fetchData = await api.authUser(data);
      toast.success(`Bem-vindo(a), ${fetchData.data.nome}!`);
      localStorage.setItem('token', fetchData.token);
      localStorage.setItem('user', JSON.stringify(fetchData.data));
      router.push("/dashboard/meus-pets");
    } catch (err) {
      toast.error('E-mail ou senha incorretos.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-[500px] mx-auto mt-20 px-6 min-h-[72vh]">
        <div className="text-primary-color mb-6">
          <h3 className="font-bold text-2xl">Acessar conta</h3>
          <p className="text-lg">Faça login com a sua conta</p>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(handleUserLogin)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">E-mail</label>
            <input
              type="text"
              className="p-4 outline-none"
              placeholder="Nome"
              {...register("email")}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary-color">Senha</label>
            <div className="p-4 flex items-center w-full bg-white">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full outline-none"
                placeholder="Nome"
                {...register("senha")}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PiEyeLight /> : <PiEyeSlashLight />}
              </button>
            </div>
            {errors.senha && <ErrorMessage message={errors.senha.message} />}
          </div>
          <button
            type="submit"
            className="bg-secondary-color p-4 text-white font-semibold hover:bg-[#f5c98c]"
            disabled={isLoading!}
          >
            Entrar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
