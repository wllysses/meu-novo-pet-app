import Image from "next/image";
import Link from "next/link";
import {
  MdOutlinePets,
  MdOutlineCreateNewFolder,
  MdHome,
} from "react-icons/md";
import logo from "@/assets/images/logo.png";

export function Sidebar() {
  
  return (
    <aside className="max-w-xs w-full bg-primary-color px-4 py-8 max-md:max-w-full">
      <header className="flex items-center justify-center gap-1 relative animate-fade-left">
        <Image src={logo} alt="Meu Novo Pet Logo" width={80} />
        <div className="flex flex-col mt-4">
          <h3 className="text-white font-bold text-xs absolute top-5">
            MEU NOVO
          </h3>
          <h1 className="text-secondary-color font-bold text-[38px]">PET</h1>
        </div>
      </header>
      <nav className="mt-8 animate-fade-right">
        <ul className="flex flex-col gap-2 text-white text-lg font-semibold">
          <li className="rounded hover:bg-white hover:text-primary-color">
            <Link href="/" className="w-full flex items-center gap-2 p-1">
              <MdHome />
              Home
            </Link>
          </li>
          <li className="rounded hover:bg-white hover:text-primary-color">
            <Link
              href="/dashboard/meus-pets"
              className="w-full flex items-center gap-2 p-1"
            >
              <MdOutlinePets />
              Meus pets
            </Link>
          </li>
          <li className="rounded hover:bg-white hover:text-primary-color">
            <Link
              href="/dashboard/cadastrar-pet"
              className="w-full flex items-center gap-2 p-1"
            >
              <MdOutlineCreateNewFolder />
              Cadastrar pet
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
