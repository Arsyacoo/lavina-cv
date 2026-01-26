"use client";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#tech-stack", label: "Tech Stack" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300">
            <div className="absolute inset-0 bg-black border-b border-white/5" />

            <div className="relative z-10 flex w-full items-center justify-between max-w-7xl mx-auto">
                <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                    <span className="text-primary">Lavina</span> Arsya
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://github.com/Arsyacoo" target="_blank" className="text-zinc-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/arsyacoo" target="_blank" className="text-zinc-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white p-2" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-black border-b border-white/5 overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-zinc-400 hover:text-white transition-colors py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex gap-4 pt-4 border-t border-white/5">
                                <Link href="https://github.com/Arsyacoo" target="_blank" className="text-zinc-400 hover:text-primary transition-colors">
                                    <Github size={20} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/arsyacoo" target="_blank" className="text-zinc-400 hover:text-primary transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

