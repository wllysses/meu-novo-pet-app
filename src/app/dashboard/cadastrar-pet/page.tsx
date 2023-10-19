"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/api";
import { Aside } from "@/components/Aside";
import { ErrorMessage } from "@/components/ErrorMessage";
import { parseCookies } from "nookies";

export default function MeusPets() {
  const router = useRouter();
  const { token, id } = parseCookies();

  const [imageUrl, setImageUrl] = useState("");

  const registerPetValidationSchema = z.object({
    nome: z.string().trim().min(1, "Nome é obrigatório"),
    raca: z.string().trim().min(1, "Raça é obrigatória"),
    tipo: z.string().trim().min(1, "Raça é obrigatória"),
    idade: z.string().trim().min(1, "Idade é obrigatória"),
    porte: z.string().trim().min(1, "Porte é obrigatório"),
    sexo: z.string().trim().min(1, "Sexo é obrigatório"),
  });

  type RegisterPetValidationSchema = z.infer<
    typeof registerPetValidationSchema
  >;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPetValidationSchema>({
    resolver: zodResolver(registerPetValidationSchema),
  });

  async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const fetchData = await api.uploadImage(e.target.files![0]);
    setImageUrl(fetchData.url);
  }

  async function registerPet(data: RegisterPetValidationSchema) {
    const fetchData = await api.postPet({
      usuario_id: parseInt(id),
      nome: data.nome,
      raca: data.raca,
      tipo: data.tipo,
      idade: data.idade,
      porte: data.porte,
      sexo: data.sexo,
      imagem: imageUrl,
    });

    if (fetchData.success) {
      toast.success(fetchData.message);
      reset();
      return;
    }

    toast.error(fetchData.message);
  }

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
  }, [token, id]);

  return (
    <div className="min-h-screen flex max-md:flex-col">
      <Aside />
      <main className="flex-1 px-4 py-8">
        <h2 className="font-bold text-2xl border-b border-primary-color pb-2 text-primary-color">
          Cadastrar Pet
        </h2>
        <form className="mt-6" onSubmit={handleSubmit(registerPet)}>
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <div id="nome" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Nome</label>
              <input
                type="text"
                className="p-2 rounded border border-primary-color"
                {...register("nome")}
              />
              {errors.nome && <ErrorMessage message={errors.nome.message} />}
            </div>
            <div id="tipo" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Tipo</label>
              <select
                className="p-2 rounded border border-primary-color"
                {...register("tipo")}
              >
                <option value="" selected disabled>
                  Selecionar
                </option>
                <option value="gato">Gato</option>
                <option value="cachorro">Cachorro</option>
              </select>
              {errors.tipo && <ErrorMessage message={errors.tipo.message} />}
            </div>
            <div id="raca" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Raça</label>
              <input
                type="text"
                className="p-2 rounded border border-primary-color"
                {...register("raca")}
              />
              {errors.raca && <ErrorMessage message={errors.raca.message} />}
            </div>
            <div id="idade" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Idade</label>
              <input
                type="text"
                className="p-2 rounded border border-primary-color"
                {...register("idade")}
              />
              {errors.idade && <ErrorMessage message={errors.idade.message} />}
            </div>
            <div id="porte" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Porte</label>
              <select
                className="p-2 rounded border border-primary-color"
                {...register("porte")}
              >
                <option value="" selected disabled>
                  Selecionar
                </option>
                <option value="pequeno">Pequeno</option>
                <option value="medio">Médio</option>
                <option value="grande">Grande</option>
              </select>
              {errors.porte && <ErrorMessage message={errors.porte.message} />}
            </div>
            <div id="sexo" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Sexo</label>
              <select
                className="p-2 rounded border border-primary-color"
                {...register("sexo")}
              >
                <option value="" selected disabled>
                  Selecionar
                </option>
                <option value="macho">Macho</option>
                <option value="femea">Fêmea</option>
              </select>
              {errors.sexo && <ErrorMessage message={errors.sexo.message} />}
            </div>
            <div id="nome" className="flex flex-col gap-2">
              <label className="font-semibold text-primary-color">Imagem</label>
              <input
                type="file"
                className="p-2"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 rounded w-full bg-secondary-color p-2 text-primary-color font-bold"
            disabled={!imageUrl}
          >
            Cadastrar Pet
          </button>
        </form>
      </main>
    </div>
  );
}
