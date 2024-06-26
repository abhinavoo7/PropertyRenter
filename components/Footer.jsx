import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import { SCREEN_MESSAGES } from "@/lib/Constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 sticky bottom-0 left-0 right-0 mt-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} {SCREEN_MESSAGES.FOOTER_CONTENT}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
