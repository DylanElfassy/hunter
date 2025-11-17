"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

type NavItem = {
  label: string;
  href: string;
};

interface HeaderProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logoText = "HUNTERZ",
  navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PREMIUM", href: "#premium" },
    { label: "LEADERSHIP", href: "#referral" },
    { label: "SPONSOR", href: "#referral" },
  ],
  ctaLabel = "SIGNUP",
  ctaHref = "#signup",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(navItems[0].label);

  return (
    <header className="absolute top-4 left-1/2 -translate-x-1/2 w-[93%] md:w-[97%] z-50 px-8 py-6 text-white bg-[#161616] rounded-[10px]">
      <div className="nav mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-Unbounded text-2xl font-extrabold tracking-wide">
          {logoText}
        </Link>

        {/* Desktop Menu */}
      {/* Desktop Menu */}
<nav className="hidden md:flex items-center gap-3"> {/* reduced gap from 6 → 3 */}
  {navItems.map((item, index) => (
    <React.Fragment key={item.label}>
      <Link
        href={item.href}
        className={`transition font-['Plus_Jakarta_Sans'] font-bold tracking-[0.25em] text-xs ${
          selected === item.label
            ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400"
      : "text-[#888888]" // changed here
        }`}
        onClick={() => setSelected(item.label)}
      >
        {item.label}
      </Link>
      {index < navItems.length - 1 && <span className="text-[#888888] mx-1">|</span>} {/* smaller spacing */}
    </React.Fragment>
  ))}

  {/* App store logos */}
  <div className="flex items-center ml-4">
    <Link href="#">
      <Image src="/apple-logo.png" alt="Apple Store" width={16} height={16} />
    </Link>
    <span className="text-gray-500 mx-4">|</span> {/* reduced mx from 2 → 1 */}
    <Link href="#">
      <Image src="/playstore-logo.png" alt="Play Store" width={16} height={16} />
    </Link>
  </div>

  {/* CTA as plain text */}
  <Link
    href={ctaHref}
    className="ml-4 font-Unbounded text-white text-sm uppercase tracking-[0.2em] hover:opacity-80 transition"
  >
    {ctaLabel}
  </Link>
</nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4 bg-[#161616] rounded-md text-sm font-['Plus_Jakarta_Sans'] font-extrabold tracking-wide">
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link
                href={item.href}
                className="block text-[#888888] hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && <span className="text-[#888888]">|</span>}
            </React.Fragment>
          ))}

         <div className="flex items-center gap-2">
  <Link href="#">
    <Image src="/apple-logo.png" alt="Apple Store" width={16} height={16} />
  </Link>
  <span className="text-[#888888] mx-2">|</span>
  <Link href="#">
    <Image src="/playstore-logo.png" alt="Play Store" width={16} height={16} />
  </Link>
</div>


          <Link
            href={ctaHref}
            className="block font-Unbounded text-white text-sm uppercase tracking-widest hover:opacity-80 transition"
            onClick={() => setMenuOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
};
