import Image from "next/image";
import Link from "next/link";
import {
  MdOutlinePets,
  MdOutlineCreateNewFolder,
  MdLogout,
} from "react-icons/md";
import logo from "@/assets/images/logo.png";

export function Aside() {
  return (
    <aside className="max-w-xs w-full bg-primary-color px-4 py-8 max-md:max-w-full">
      <header className="flex items-center justify-center gap-1 relative">
        <Image src={logo} alt="Meu Novo Pet Logo" width={80} />
        <div className="flex flex-col mt-4">
          <h3 className="text-white font-bold text-xs absolute top-5">
            MEU NOVO
          </h3>
          <h1 className="text-secondary-color font-bold text-[38px]">PET</h1>
        </div>
      </header>
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-white text-lg font-semibold">
          <Link href="/dashboard/meus-pets">
            <li className="flex items-center gap-2 p-1 rounded hover:bg-white hover:text-primary-color">
              <MdOutlinePets />
              Meus pets
            </li>
          </Link>
          <Link href="/dashboard/cadastrar-pet">
            <li className="flex items-center gap-2 p-1 rounded hover:bg-white hover:text-primary-color">
              <MdOutlineCreateNewFolder />
              Cadastrar pet
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-2 p-1 rounded hover:bg-white hover:text-primary-color">
              <MdLogout />
              Sair
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
