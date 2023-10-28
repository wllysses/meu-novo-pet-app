"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession();

  function handleOpenMenu() {
    setIsOpen((prevState) => !prevState);
  }

  async function handleSignIn() {
    await signIn("google");
  }

  async function handleSignOut() {
    await signOut();
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
        <div 
          className={`w-full absolute top-0 left-0 bg-primary-color shadow px-12 py-6 text-white z-50 animate-fade-down`}
        >
          <header className="w-full flex items-center justify-between font-bold">
            <h3>Menu</h3>
            <button
              className="border border-zinc-300 rounded px-2 hover:bg-zinc-200/20"
              onClick={handleOpenMenu}
            >
              X
            </button>
          </header>
          <div className="mt-8 flex items-center justify-center flex-col gap-4">
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
              {status === "unauthenticated" && (
                <button
                  className="bg-zinc-200 rounded px-4 py-2 font-bold text-black flex items-center justify-center gap-2 hover:bg-zinc-100"
                  onClick={handleSignIn}
                >
                  <FcGoogle />
                  Login com Google
                </button>
              )}
              {status === "authenticated" && (
                <div className="my-4 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {session?.user?.image ? (
                      <img
                        src={session?.user?.image}
                        alt="Google Profile Avatar"
                        className="rounded-full max-w-[50px]"
                      />
                    ) : (
                      <div className="rounded-full h-[50px] w-[50px] bg-white">{session?.user?.name![0].toUpperCase()}</div>
                    )}
                    <div>
                      <span className="text-xs">Bem-vindo(a).</span>
                      <h4 className="font-semibold">{session?.user?.name}.</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-full bg-secondary-color rounded p-2 text-primary-color font-bold hover:bg-[#f5c98c]"
                      onClick={() => router.push("/dashboard/meus-pets")}
                    >
                      Dashboard
                    </button>
                    <button
                      className="w-full bg-secondary-color rounded p-2 text-primary-color font-bold hover:bg-[#f5c98c]"
                      onClick={handleSignOut}
                    >
                      Sair
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
