"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden px-4">
            {/* Background Elements */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >

                </motion.div>

                <motion.h1
                    className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hi, I'm <span className="text-gradient">Lavina Arsya</span> <br />
                    <span className="text-3xl md:text-5xl mt-4 block text-zinc-300">
                        Fullstack Developer & <br />
                        Machine Learning Engineer
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Building intelligent digital experiences with modern web technologies and AI integration.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link href="#projects" className="group relative px-8 py-3.5 rounded-full font-semibold bg-white text-black hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="#contact" className="px-8 py-3.5 rounded-full font-semibold glass text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
            </motion.div>
        </section>
    );
}
