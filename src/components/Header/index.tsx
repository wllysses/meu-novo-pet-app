import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { Navbar } from "@/components/Navbar";

export function Header() {

  return (
    <header className="bg-primary-color p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-1 relative">
            <Image src={logo} alt="Meu Novo Pet Logo" width={80} />
            <div className="flex flex-col mt-4">
              <h3 className="text-white font-bold text-xs absolute top-5">
                MEU NOVO
              </h3>
              <h1 className="text-secondary-color font-bold text-[38px]">PET</h1>
            </div>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
