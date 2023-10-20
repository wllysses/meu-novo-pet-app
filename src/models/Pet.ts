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
  id: number;
  usuario_id: number;
  nome: string;
  raca: string;
  tipo: string;
  idade: string;
  porte: string;
  sexo: string;
  disponivel: boolean | null;
  imagem: string;
  criado_em: Date | null;
}