"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Barista Training", href: "/barista-training" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 60 || currentScrollY < lastScrollY) {
        setShowNavbar(true); // show on scroll up or top
      } else {
        setShowNavbar(false); // hide on scroll down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 font-reporter bg-[color:var(--color-white)] shadow-sm"
        >
          <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo/espresso-brown.svg"
                alt="Espresso Logo"
                width={70}
                height={70}
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-6 text-xl font-medium text-black">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "hover:text-primary transition-colors",
                      isActive(link.href) && "text-green-600"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-muted-foreground"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
          </nav>

          {/* Mobile Menu Slide-in */}
          <AnimatePresence>
            {menuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-30 z-40"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* Slide-in Panel */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", duration: 0.35 }}
                  className="fixed top-0 left-0 h-full w-full bg-white z-50 shadow-lg"
                >
                  <div className="flex items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center space-x-2">
                      <Image
                        src="/logo/espresso-brown.svg"
                        alt="Espresso Logo"
                        width={50}
                        height={50}
                      />
                    </Link>
                    <button onClick={() => setMenuOpen(false)}>
                      <X className="w-6 h-6 text-black" />
                    </button>
                  </div>

                  <div className="flex flex-col px-4 text-black py-4 space-y-10 text-2xl text-center ">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={clsx(
                          "hover:text-primary transition-colors",
                          isActive(link.href) && "text-green-600"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
