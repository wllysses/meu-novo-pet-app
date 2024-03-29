import Link from "next/link";
import { IPet } from "@/models/Pet";

interface CardProps {
  data: IPet
}

export function Card(props: CardProps) {
  return (
    <div className="max-w-[255px] h-[350px] w-full bg-white shadow relative">
      <span
        className={`absolute top-2 right-2 px-4 rounded text-white ${
          props.data?.available! ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {props.data?.available! ? "Disponível" : "Adotado"}
      </span>
      <img
        src={props.data?.imageUrl}
        alt={`Foto do pet: ${props.data?.name}`}
        loading="lazy"
        className="w-full h-[220px] object-cover"
      />
      <div className="p-4 text-primary-color">
        <h4 className="font-bold text-2xl">{props.data?.name}</h4>
        <Link href={`/pets/${props.data?.id}`}>
          <button
            className="mt-6 w-full bg-primary-color rounded p-2 text-white font-bold hover:bg-[#6e29bcd2] max-sm:text-sm disabled:cursor-not-allowed disabled:bg-opacity-40"
            disabled={!props.data?.available}
          >
            Quero conhecer
          </button>
        </Link>
      </div>
    </div>
  );
}
