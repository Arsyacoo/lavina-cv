"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const paletteLinks = [
    { label: "View Selected Work", href: "#projects", helper: "Project previews" },
    { label: "Read Technical Philosophy", href: "#about", helper: "About & skills" },
    { label: "Start a Conversation", href: "#contact", helper: "Email & socials" },
    { label: "Open GitHub", href: "https://github.com/Arsyacoo", helper: "External profile", external: true },
    { label: "Open LinkedIn", href: "https://www.linkedin.com/in/arsyacoo/", helper: "External profile", external: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(window.scrollY > 8);
            setScrollProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                setPaletteOpen((open) => !open);
            }
            if (event.key === "Escape") {
                setPaletteOpen(false);
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <>
            <header className={`sticky top-0 z-50 border-b bg-[#f7f6f2]/94 backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 ${scrolled ? "border-black/14 shadow-[0_8px_24px_rgba(20,20,18,0.045)]" : "border-black/10"}`}>
                <div className="absolute left-0 top-0 h-[2px] bg-black/80 transition-[width] duration-150 motion-reduce:transition-none" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
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
                            onClick={() => setPaletteOpen(true)}
                            className="hidden border border-black/14 px-3 py-2 font-caption text-[10px] uppercase tracking-[0.14em] text-black/58 transition-colors hover:border-black/35 hover:text-black lg:inline-flex"
                            aria-label="Open quick navigation"
                        >
                            Explore <span className="ml-2 text-black/35"></span>
                        </button>
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
                        <button type="button" onClick={() => { setPaletteOpen(true); setMenuOpen(false); }} className="w-fit font-caption text-[11px] uppercase tracking-[0.18em] text-black/65 transition-colors hover:text-black">
                            Explore
                        </button>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 z-[60] bg-black/18 px-5 py-20 backdrop-blur-[2px] transition-opacity duration-200 ${paletteOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setPaletteOpen(false)}>
                <div className={`mx-auto max-w-lg border border-black/12 bg-[#f7f6f2] p-3 shadow-[0_24px_70px_rgba(20,20,18,0.18)] transition-transform duration-200 ${paletteOpen ? "translate-y-0" : "-translate-y-2"}`} role="dialog" aria-modal="true" aria-label="Quick navigation" onClick={(event) => event.stopPropagation()}>
                    <div className="flex items-center justify-between border-b border-black/10 px-2 pb-3">
                        <p className="font-caption text-[10px] uppercase tracking-[0.18em] text-black/45">Quick explore</p>
                        <button type="button" onClick={() => setPaletteOpen(false)} className="font-caption text-[10px] uppercase tracking-[0.16em] text-black/45 transition-colors hover:text-black">Close</button>
                    </div>
                    <div className="pt-2">
                        {paletteLinks.map((link) => (
                            <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} onClick={() => setPaletteOpen(false)} className="flex items-center justify-between gap-5 px-3 py-3 transition-colors hover:bg-black/[0.035] focus-visible:bg-black/[0.035]">
                                <span className="text-[14px] font-medium text-black">{link.label}</span>
                                <span className="font-caption text-[10px] uppercase tracking-[0.14em] text-black/38">{link.helper}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
