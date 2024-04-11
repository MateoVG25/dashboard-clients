import React from "react";
import LightDarkMode from "@/components/ui/light-dark-mode";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex h-7 w-36">
        <Image
          src="/static/images/LOGO_TECNOCEDI.png"
          alt="Logo"
          width={200} 
          height={50}
          layout="responsive"
        />
      </div>
      <h1 className="flex-grow text-center text-4xl font-semibold text-black dark:text-white">
        Dashboard
      </h1>
      <div className="w-32">
        <LightDarkMode />
      </div>
    </div>
  );
};

export default HeaderComponent;
