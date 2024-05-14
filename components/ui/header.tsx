"use client";
import React from "react";
import Image from "next/image";
import { API_PATH } from "@/global-variables";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

function HeaderComponent() {
  const words = [
    {
      text: "Bienvenido",
    },
    {
      text: `${API_PATH}.`,
      className: "text-[#0077b6]",
    },
  ];
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex h-14 w-72">
        <Image
          src="/static/images/LOGO_TECNOCEDI.png"
          alt="Logo"
          width={400}
          height={100}
          priority
          about="Tecnocedi logo"
        />
      </div>
      <div className="grid justify-items-end">
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
}

export default HeaderComponent;
