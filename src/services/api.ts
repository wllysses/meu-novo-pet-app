import { IPet } from "@/models/Pet";
import { IUser } from "@/models/User";

const BASE_URL = "https://api-meunovopet.onrender.com";
const CLIENT_ID = "b9e7c38f77e6d0e";

async function postUser(userData: IUser) {
  const response = await fetch(`${BASE_URL}/api/v1/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
}

async function authUser(userData: { email: string, senha: string }) {
  const response = await fetch(`${BASE_URL}/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
}

async function uploadImage(file: File) {
  const data = new FormData();
  data.append('upload_preset', 'aoh4fpwm');
  data.append('source', 'uw');
  data.append('file', file);

  const response = await fetch(`https://api.cloudinary.com/v1_1/hzxyensd5/upload`, {
    method: 'POST',
    headers: {
      'Accept': `application/json, text/javascript, */*; q=0.01`
    },
    body: data
  });
  return await response.json();
}

async function postPet({ usuario_id, nome, raca, tipo, idade, porte, sexo, imagem }: IPet) {
  const response = await fetch(`${BASE_URL}/api/v1/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario_id,
      nome,
      raca,
      tipo,
      idade,
      porte,
      sexo,
      imagem
    }),
  });
  return await response.json();
}

export const api = {
  postUser,
  authUser,
  uploadImage,
  postPet
};
