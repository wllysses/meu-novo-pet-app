import { IUser } from "@/models/User";

const BASE_URL = "https://api-meunovopet.onrender.com";

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

export const api = {
  postUser,
  authUser
};
