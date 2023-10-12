"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { useRouter } from "next/navigation";

export function Header() {

  const router = useRouter();

  return (
    <header className="bg-primary-color p-4 w-full">
      <div className="container mx-auto flex items-center justify-between max-[770px]:flex-col max-[770px]:gap-4">
        <div className="flex items-center gap-1 relative">
          <Image src={logo} alt="Meu Novo Pet Logo" width={80} />
          <div className="flex flex-col mt-4">
            <h3 className="text-white font-bold text-xs absolute top-5">
              MEU NOVO
            </h3>
            <h1 className="text-secondary-color font-bold text-[38px]">PET</h1>
          </div>
        </div>
        <nav className="text-white font-semibold">
          <ul className="flex items-center gap-8 cursor-pointer">
            <li className="hover:text-secondary-color">
              <Link href="/">Início</Link>
            </li>
            <li className="hover:text-secondary-color">
              <Link href="/pets">Pets</Link>
            </li>
            <li className="hover:text-secondary-color">
              <Link href="/contato">Contato</Link>
            </li>
            <li className="hover:text-secondary-color">
              <Link href="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            className="bg-secondary-color rounded px-4 py-2 font-bold text-primary-color hover:bg-[#f5c98c]"
            onClick={() => router.push("/cadastro")}
          >
            Cadastre-se
          </button>
          <button 
            className="bg-secondary-color rounded px-4 py-2 font-bold text-primary-color hover:bg-[#f5c98c]"
            onClick={() => router.push("/login")}
          >
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
}
