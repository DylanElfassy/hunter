"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    { label: "About", href: "#about" },
    { label: "Premium", href: "#premium" },
    { label: "Referral", href: "#referral" },
  ],
  ctaLabel = "SIGNUP",
  ctaHref = "#signup",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="absolute top-4 left-1/2 -translate-x-1/2 w-[93%] md:w-[97%] z-50 px-6 py-4 text-white bg-black rounded-[10px]">
<div className="nav mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-Unbounded text-xl font-extrabold tracking-wide">
          {logoText}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-semibold font-Jakarta">
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link href={item.href} className="hover:opacity-80 transition">
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="h-4 w-px bg-gray-500" />
              )}
            </React.Fragment>
          ))}
          <Link
            href={ctaHref}
            className="ml-4 border-2 border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4 text-sm font-Jakarta">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block hover:opacity-80 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="block border-2 border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
};
