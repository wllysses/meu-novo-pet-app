"use client";

import { useState } from "react";

interface AccordionItemProps {
    title: string
    text: string
}

export function AccordionItem({ title, text }: AccordionItemProps) {
  const [isOpen, setisOpen] = useState(false);

  function handleOpenAccordionItem() {
    setisOpen(!isOpen);
  }

  return (
    <li>
      <h4
        className="border-2 border-primary-color p-2 font-bold flex items-center justify-between text-primary-color text-xl cursor-pointer max-md:text-lg"
        onClick={handleOpenAccordionItem}
      >
        {title} <span>{isOpen ? "-" : "+"}</span>
      </h4>
      <p
        className={`border-2 border-primary-color p-2 border-t-0 text-justify 
        ${ isOpen ? "block" : "hidden"}`}
      >
        {text}
      </p>
    </li>
  );
}
