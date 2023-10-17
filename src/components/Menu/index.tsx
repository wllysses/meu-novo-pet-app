"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { destroyCookie, parseCookies } from "nookies";

export function Menu() {
  const router = useRouter();
  const { token, nome } = parseCookies();

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function userLogOut() {
    destroyCookie(null, 'token');
    destroyCookie(null, 'nome');
    destroyCookie(null, 'id');
    window.location.reload();
  }

  return (
    <>
    <button className="border border-zinc-300 rounded p-1 hover:bg-zinc-200/20">
      <MdMenu
        color="white"
        size={25}
        cursor="pointer"
        onClick={handleOpenMenu}
      />
    </button>
      {isOpen ? (
        <div className="w-full absolute top-0 left-0 bg-primary-color shadow h-96 px-8 py-4 text-white">
          <header className="w-full flex items-center justify-between font-bold">
            <h3>Menu</h3>
            <button
              className="border border-zinc-300 rounded px-2 hover:bg-zinc-200/20"
              onClick={handleOpenMenu}
            >
              X
            </button>
          </header>
          <div className="mt-8 flex items-center justify-center flex-col gap-6">
            <nav className="text-white font-semibold">
              <ul className="flex items-center flex-col gap-4 cursor-pointer">
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
            <div className="flex items-center flex-col gap-4">
                {!token 
                ? 
                <>
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
                </> 
                : 
                <div className="flex flex-col gap-2">
                    <span>Olá, {nome}.</span>
                    <div className="flex items-center gap-2">
                        <button 
                            className="w-full bg-secondary-color rounded p-2 text-primary-color font-bold hover:bg-[#f5c98c]"
                            onClick={() => router.push("/dashboard/meus-pets")}
                        >
                            Dashboard
                        </button>
                        <button 
                            className="w-full bg-secondary-color rounded p-2 text-primary-color font-bold hover:bg-[#f5c98c]"
                            onClick={userLogOut}
                        >
                            Sair
                        </button>
                    </div>
                </div>
                }
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
