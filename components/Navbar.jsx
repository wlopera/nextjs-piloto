import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black text-lg">
      <Link href="/">Usuarios</Link>
      <ul>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
