import React from "react";
import Lang from "../components/Lang";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  const [openNav, setOpenNav] = useState(false);

  const menuItems = t("header.menu", { returnObjects: true }) as { name: string; label: string }[];

  return (
    <React.Fragment>
      {/* header */}
      <header className="h-16 bg-white/80 sticky top-0 z-50 backdrop-blur">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between">
            <Logo />
            <div className="flex gap-4 items-center">
              {/* nav desktop */}
              <div className="hidden lg:flex">
                <nav className="flex items-center gap-4">
                  <div className="flex items-center">
                    {menuItems.map((item, i) => (
                      <a
                        href={`/#${item.name}`}
                        key={i}
                        className={`capitalize text-sm text-gray-600 hover:text-blue-500 px-4`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <a href="https://wa.me/6287766606133">
                    <Button className="flex gap-2 items-center text-sm">
                      <SiWhatsapp size={18} />
                      {t("header.contact-btn")}
                    </Button>
                  </a>
                </nav>
              </div>
              {/* switch lang btn */}
              <Lang />
              {/* nav mobile */}
              <div className="z-50 flex lg:hidden">
                <button title="menu btn" type="button" onClick={() => setOpenNav(!openNav)} className="">
                  <FaBars size={24} />
                </button>
                <div
                  className={`${
                    openNav ? "visible scale-100 opacity-100" : "invisible scale-75 opacity-0"
                  } z-50 fixed left-0 right-0 top-0 bottom-0 h-screen bg-blue-500/90 flex items-center justify-center transition-all duration-300`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenNav(!openNav)}
                    title="close btn"
                    className="absolute top-6 right-6 hover:text-red-500 transition"
                  >
                    <FaXmark size={28} />
                  </button>
                  <div className="flex flex-col items-center">
                    {menuItems.map((item, i) => (
                      <a
                        href={`/#${item.name}`}
                        key={i}
                        className={`capitalize text-lg text-white hover:text-gray-200 py-4`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      {/* main */}
      <main>{children}</main>
      {/* footer */}
      <footer className="h-16 border-t">
        <div className="container h-full">
          <div className="h-full flex items-center justify-center">
            <small>&copy; {new Date().getFullYear()}</small>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
