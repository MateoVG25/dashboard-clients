"use client";
import React from "react";
import Image from "next/image";

function HeaderComponent() {
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
    </div>
  );
}

export default HeaderComponent;
