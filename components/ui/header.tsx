import React from "react";
import LightDarkMode from "@/components/ui/light-dark-mode";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex h-14 w-72">
        <Image
          src="/static/images/LOGO_TECNOCEDI.png"
          alt="Logo"
          width={400} // Set the width and height to the desired values
          height={100}
          priority
        />
      </div>
      <div className="w-72 grid justify-items-end">
        <LightDarkMode />
      </div>
    </div>
  );
};

export default HeaderComponent;
