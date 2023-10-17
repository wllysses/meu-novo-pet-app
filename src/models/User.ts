export interface IUser {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  senha: string;
  confirmar_senha: string;
}

export interface UserData {
  id: number
  nome: string
}