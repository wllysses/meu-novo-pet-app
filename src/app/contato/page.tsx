"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Contato() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <main className="max-w-[500px] mx-auto mt-20 px-6 min-h-[75vh]">
        <div className="text-primary-color mb-6">
          <h3 className="font-bold text-2xl">Entrar em contato</h3>
          <p className="text-sm">
            Entre em contato conosco e ajude-nos a melhorar cada vez mais.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            className="p-4 outline-primary-color"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            className="resize-none p-4 outline-primary-color"
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensagem"
            required
          />
          <a 
            href={`https://api.whatsapp.com/send?phone=5583988745654&text=Ol%C3%A1.%20Me%20chamo%20${name}%20e%20minha%20tenho%20a%20seguinte%20mensagem:%20${message}`} 
            target="_blank" 
            className="w-full"
            >
              <button 
                type="button" 
                className="w-full bg-secondary-color p-4 text-white font-semibold hover:bg-[#f5c98c]"
                disabled={!name || !message}
              >
                Enviar
              </button>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
