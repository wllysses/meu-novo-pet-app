"use client";

import { Card } from "@/components/Card";
import { Aside } from "@/components/Aside";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MeusPets() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex max-md:flex-col">
      <Aside />
      <main className="flex-1 px-4 py-8">
        <h2 className="font-bold text-2xl border-b border-primary-color pb-2 text-primary-color">
          MEUS PETS
        </h2>
        <div className="w-full mt-6 grid grid-cols-5 gap-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
          <Card disponivel={true} />
          <Card disponivel={true} />
          <Card disponivel={false} />
          <Card disponivel={true} />
          <Card disponivel={false} />
          <Card disponivel={true} />
          <Card disponivel={false} />
          <Card disponivel={true} />
        </div>
      </main>
    </div>
  );
}
