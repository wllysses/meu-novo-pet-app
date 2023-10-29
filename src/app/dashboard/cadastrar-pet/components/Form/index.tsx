"use client";

import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/api";
import { ErrorMessage } from "@/components/ErrorMessage";

import create from "./action";
import { useRouter } from "next/navigation";

interface RegisterPetFormProps {
  userId: string;
}

export function RegisterPetForm({ userId }: RegisterPetFormProps) {

  const router = useRouter();

  const [imageUrl, setImageUrl] = useState("");

  const registerPetValidationSchema = z.object({
    name: z.string().trim().min(1, "Nome é obrigatório"),
    race: z.string().trim().min(1, "Raça é obrigatória"),
    type: z.string().trim().min(1, "Raça é obrigatória"),
    age: z.string().trim().min(1, "Idade é obrigatória"),
    size: z.string().trim().min(1, "Porte é obrigatório"),
    sex: z.string().trim().min(1, "Sexo é obrigatório"),
    contact: z.string().trim().min(1, "Contato é obrigatório"),
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

  async function handleUploadImage(e: ChangeEvent<HTMLInputElement>) {
    const fetchData = await api.uploadImage(e.target.files![0]);
    setImageUrl(fetchData.url);
  }

  async function registerPet(data: RegisterPetValidationSchema) {
   const fetchData = await create({
      userId,
      name: data.name,
      race: data.race,
      type: data.type,
      age: data.age,
      size: data.size,
      sex: data.sex,
      imageUrl,
      contact: data.contact,
    });

    if(!fetchData) {
      toast.error('Algo deu errado 😢');
      return;
    }

    toast.success('Pet cadastrado com sucesso.')
    reset();
    router.refresh();
  }

  return (
    <form className="mt-6 animate-fade-up" onSubmit={handleSubmit(registerPet)}>
      <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        <div id="name" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">
            Nome do pet
          </label>
          <input
            type="text"
            className="p-2 rounded border border-primary-color"
            placeholder="ex: Bob"
            {...register("name")}
          />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </div>
        <div id="type" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Tipo</label>
          <select
            className="p-2 rounded border border-primary-color"
            {...register("type")}
          >
            <option value="" selected disabled>
              Selecionar
            </option>
            <option value="gato">Gato</option>
            <option value="cachorro">Cachorro</option>
          </select>
          {errors.type && <ErrorMessage message={errors.type.message} />}
        </div>
        <div id="race" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Raça</label>
          <input
            type="text"
            className="p-2 rounded border border-primary-color"
            placeholder="ex: Dalmata"
            {...register("race")}
          />
          {errors.race && <ErrorMessage message={errors.race.message} />}
        </div>
        <div id="age" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Idade</label>
          <input
            type="text"
            className="p-2 rounded border border-primary-color"
            placeholder="ex: 3 meses"
            {...register("age")}
          />
          {errors.age && <ErrorMessage message={errors.age.message} />}
        </div>
        <div id="size" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Porte</label>
          <select
            className="p-2 rounded border border-primary-color"
            {...register("size")}
          >
            <option value="" selected disabled>
              Selecionar
            </option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
          {errors.size && <ErrorMessage message={errors.size.message} />}
        </div>
        <div id="sex" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Sexo</label>
          <select
            className="p-2 rounded border border-primary-color"
            {...register("sex")}
          >
            <option value="" selected disabled>
              Selecionar
            </option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
          {errors.sex && <ErrorMessage message={errors.sex.message} />}
        </div>
        <div id="contact" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Contato</label>
          <input
            type="text"
            className="p-2 rounded border border-primary-color"
            maxLength={11}
            placeholder="ex: 83988776655"
            {...register("contact")}
          />
          {errors.contact && <ErrorMessage message={errors.contact.message} />}
        </div>
        <div id="image" className="flex flex-col gap-2">
          <label className="font-semibold text-primary-color">Imagem</label>
          <input
            type="file"
            className="p-2"
            onChange={(e) => handleUploadImage(e)}
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
  );
}
