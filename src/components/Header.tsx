"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoLight from "../../public/logo-light.png";
import LogoDark from "../../public/logo-dark.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              {/* Logo Image for Light Mode */}
              <div className="block dark:hidden">
                <Image
                  src={LogoLight}
                  alt="Kademia Logo"
                  width={120}
                  height={120}
                  className="w-30 h-30 object-contain"
                />
              </div>

              {/* Logo Image for Dark Mode */}
              <div className="hidden dark:block">
                <Image
                  src={LogoDark}
                  alt="Kademia Logo"
                  width={120}
                  height={120}
                  className="w-30 h-30 object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-600 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors px-4 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="px-5 py-2 text-base font-medium text-gray-600 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 transition-colors rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 rounded-md text-base font-medium bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-sm hover:shadow-violet-200 dark:hover:shadow-violet-900/30"
              >
                Sign Up
              </Link>
            </div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2.5 rounded-lg text-gray-600 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800`}
      >
        <div className="px-2 pt-2 pb-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg mx-2 text-lg font-medium text-gray-600 hover:text-violet-600 hover:bg-violet-50 dark:text-gray-300 dark:hover:text-violet-400 dark:hover:bg-violet-900/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 pb-1 border-t border-gray-100 dark:border-gray-800 mt-3">
            <Link
              href="/login"
              className="block mx-2 px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-violet-600 hover:bg-violet-50 dark:text-gray-300 dark:hover:text-violet-400 dark:hover:bg-violet-900/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block mx-2 mt-2 px-4 py-3 rounded-lg text-lg font-medium text-center bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
