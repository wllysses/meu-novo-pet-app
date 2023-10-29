//import { IPet } from "@/models/Pet";
//import { IUser } from "@/models/User";

// const BASE_URL = "https://api-meunovopet.onrender.com";

// async function postUser(userData: IUser) {
//   const response = await fetch(`${BASE_URL}/api/v1/usuarios`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
//   return await response.json();
// }

// async function authUser(userData: { email: string, senha: string }) {
//   const response = await fetch(`${BASE_URL}/api/v1/auth`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
//   return await response.json();
// }

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

// async function postPet({ usuario_id, nome, raca, tipo, idade, porte, sexo, imagem }: IPet) {
//   const response = await fetch(`${BASE_URL}/api/v1/pets`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       usuario_id,
//       nome,
//       raca,
//       tipo,
//       idade,
//       porte,
//       sexo,
//       imagem
//     }),
//   });
//   return await response.json();
// }

// async function getAllPets() {
//   const response = await fetch(`${BASE_URL}/api/v1/pets`, { cache: 'no-store' });
//   const data = await response.json();
//   return await data;
// }

// async function getPetById(id: number) {
//   const response = await fetch(`${BASE_URL}/api/v1/pets/${id}`, { cache: 'no-store' });
//   const data = await response.json();
//   return await data;
// }

// async function getPetsByUserId(userId: number) {
//   const response = await fetch(`${BASE_URL}/api/v1/usuario/pets/${userId}`, { cache: 'no-store' });
//   const data = await response.json();
//   return await data;
// }

// async function putPetStatus(id: number, status: boolean) {
//   const response = await fetch(`${BASE_URL}/api/v1/disponivel/pets/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       disponivel: status
//     }),
//   });
//   return await response.json();
// }

// async function deletePet(id: number) {
//   const response = await fetch(`${BASE_URL}/api/v1/pets/${id}`, {
//     method: "DELETE",
//   });
//   return await response.json();
// }

export const api = {
  // postUser,
  // authUser,
  uploadImage,
  // postPet,
  // getAllPets,
  // getPetById,
  // getPetsByUserId,
  // putPetStatus,
  // deletePet
};
