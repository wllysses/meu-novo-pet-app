export interface IPet {
  usuario_id: number;
  nome: string;
  raca: string;
  tipo: string;
  idade: string;
  porte: string;
  sexo: string;
  imagem: string;
}

export interface PetCardProps {
  id: number
  nome: string
  disponivel: boolean
  imagem: string
}