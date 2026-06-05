"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Link with Image */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg" // Path to your logo in the public folder
            alt="Brand Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-xl text-slate-900 tracking-tight">
            {pathname === "/forestry" ? "ForestInsight" : "WeatherInsight"}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <NavLink href="/" active={pathname === "/"}>
            Weather
          </NavLink>
          <NavLink href="/forestry" active={pathname === "/forestry"}>
            Forestry
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg p-6 flex flex-col gap-4 z-40">
          <NavLink
            href="/"
            active={pathname === "/"}
            onClick={() => setIsOpen(false)}
          >
            Weather
          </NavLink>
          <NavLink
            href="/forestry"
            active={pathname === "/forestry"}
            onClick={() => setIsOpen(false)}
          >
            Forestry
          </NavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, children, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block transition-colors ${active ? "text-blue-600 font-bold" : "hover:text-blue-600 text-slate-600"}`}
    >
      {children}
    </Link>
  );
}
