export interface IPet {
  id?: number
  usuario_id: number;
  nome: string;
  raca: string;
  tipo: string;
  idade: string;
  porte: string;
  disponivel?: boolean
  sexo: string;
  imagem: string;
}

export interface PetCardProps {
  id: number
  nome: string
  disponivel: boolean
  imagem: string
}