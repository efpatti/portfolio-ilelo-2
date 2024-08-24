import Link from "next/link";
import { Lato } from "next/font/google";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
});

const icons = [
  {
    iconName: FaBehance,
    href: "",
  },
  {
    iconName: FaLinkedin,
    href: "",
  },
  {
    iconName: FaGithub,
    href: "",
  },
];

const Sidebar = () => {
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 shadow-sm bg-gradient-to-t from-slate-950 to-gray-950 text-gray-300 w-1/12 h-full items-center  ${font.className}`}
    >
      <div className="flex flex-col justify-end h-full items-center w-full">
        <nav className="grid justify-items-center content-stretch items-center font-[400] subpixel-antialiased h-1/3 w-full">
          {icons.map((icon, index) => (
            <Link
              href={icon.href}
              key={index}
              className="flex items-center text-sm transition-colors hover:underline hover:scale-125"
              prefetch={false}
            >
              {React.createElement(icon.iconName, { size: 20 })}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
