"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 border-b bg-[#f7f6f2]/94 backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 ${scrolled ? "border-black/14 shadow-[0_8px_24px_rgba(20,20,18,0.045)]" : "border-black/10"}`}>
            <nav className="mx-auto flex h-16 w-[min(100%-40px,1120px)] items-center justify-between" aria-label="Primary navigation">
                <Link href="#hero" aria-label="Go to top" className="font-display text-xl font-semibold tracking-[-0.04em] text-black transition-opacity duration-200 hover:opacity-65 focus-visible:opacity-65">
                    LA
                </Link>

                <div className="hidden items-center gap-8 text-[12px] text-black/60 md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="nav-link">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="border border-black/18 px-3 py-2 font-caption text-[10px] uppercase tracking-[0.16em] text-black transition-colors hover:border-black md:hidden"
                    >
                        Menu
                    </button>
                    <Link href="/Lavina-Arsya-Resume.pdf" download className="border border-black bg-black px-4 py-2 font-caption text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 hover:-translate-y-px hover:bg-[#284739] focus-visible:-translate-y-px motion-reduce:hover:translate-y-0" style={{ color: "#f7f6f2" }}>
                        Download CV
                    </Link>
                </div>
            </nav>

            <div id="mobile-nav" className={`absolute left-0 right-0 top-full origin-top border-t border-black/10 bg-[#f7f6f2]/96 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out md:hidden ${menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}>
                <div className="mx-auto flex w-[min(100%-40px,1120px)] flex-col gap-4 py-4 font-caption text-[11px] uppercase tracking-[0.18em] text-black/65">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="link-underline w-fit transition-colors hover:text-black focus-visible:text-black">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
