export interface IPet {
  id?: string
  userId?: string;
  name: string;
  race?: string;
  type?: string;
  age?: string;
  size?: string;
  available?: boolean | null
  sex?: string;
  imageUrl: string;
  contact?: string
}
