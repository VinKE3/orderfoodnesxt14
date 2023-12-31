import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="/">
        ST PIZZA
      </Link>
      <nav className="flex gap-8 items-center text-gray-400 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary rounded-full text-white px-6 py-2"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
