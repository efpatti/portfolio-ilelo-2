import Link from "next/link";
import { FaUser as User } from "react-icons/fa6";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
});

const Navbar = () => {
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 shadow-sm bg-gradient-to-t from-slate-950 to-gray-950 text-gray-300 p-2 ${font.className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <h1 className="text-xl font-bold">Logo</h1>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-4 font-[400] subpixel-antialiased">
            <Link
              href="/"
              className="flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Início
            </Link>
            <Link
              href="sobre"
              className="flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Sobre nós
            </Link>
            <Link
              href="catalogo"
              className="flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Catálogo
            </Link>
            <Link
              href="contato"
              className="flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Fale conosco
            </Link>
          </nav>
          <div className="flex items-center gap-4 cursor-pointer">
            <User
              className="hover:opacity-100 opacity-85 rounded-full"
              size={13}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
