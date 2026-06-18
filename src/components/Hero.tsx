import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="site-texture bg-[#f7f6f2]">
            <div className="mx-auto w-[min(100%-40px,1120px)] pb-24 pt-24 md:pb-32 md:pt-28">
                <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-[1fr_240px] sm:gap-8 md:grid-cols-[1.02fr_0.78fr] md:gap-16">
                    <div className="max-w-[620px] pt-1">
                        <div className="mb-8 flex flex-wrap items-center gap-3 font-caption text-[10px] uppercase tracking-[0.22em] text-black/55">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#284739]" />
                            <span>Informatics Undergraduate</span>
                            <span aria-hidden="true">/</span>
                            <span>AI & Web Development</span>
                        </div>

                        <h1 className="font-display text-[clamp(2.55rem,5.7vw,4.85rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-black">
                            I build practical digital products with code, data, and AI.
                        </h1>

                        <p className="mt-7 max-w-[560px] text-[15px] leading-7 text-black/58 md:text-[16px]">
                            Focused on developing functional web applications, AI-assisted tools, and machine learning projects that solve real problems. Currently bridging software engineering, data workflows, and human-centered design.
                        </p>

                        <div className="mt-8 grid max-w-[610px] grid-cols-1 border-y border-black/12 py-4 font-caption text-[10px] uppercase tracking-[0.18em] text-black/65 sm:grid-cols-3">
                            <div className="flex items-center gap-2 py-2 sm:py-0"><MapPin size={13} /> Indonesia</div>
                            <div className="flex items-center gap-2 py-2 sm:py-0"><Briefcase size={13} /> Open to Internship</div>
                            <div className="flex items-center gap-2 py-2 sm:py-0"><Sparkles size={13} /> Collaboration</div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="#projects" className="inline-flex h-11 items-center justify-center bg-black px-6 font-caption text-[10px] font-semibold uppercase tracking-[0.16em] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0" style={{ color: "#f7f6f2" }}>
                                View selected work
                            </Link>
                            <Link href="#contact" className="inline-flex h-11 items-center justify-center border border-black/25 px-6 font-caption text-[10px] uppercase tracking-[0.18em] text-black transition-colors hover:border-black hover:bg-black hover:text-white">
                                Get in touch
                            </Link>
                        </div>
                    </div>

                    <div className="justify-self-center sm:mt-10 sm:justify-self-end md:mt-8 md:justify-self-end">
                        <div className="relative w-full max-w-[340px] bg-[#d8d7d2] sm:max-w-[240px] md:w-[410px] md:max-w-[410px]">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image src="/profile.webp" alt="Portrait of Lavina Arsya Aryanto" fill priority sizes="(max-width: 640px) 340px, (max-width: 768px) 240px, 410px" className="object-cover object-center grayscale" />
                            </div>
                        </div>
                        <div className="mt-3 flex justify-between font-caption text-[9px] uppercase tracking-[0.2em] text-black/45">
                            <span>Portrait // 2026</span>
                            <span>Based in Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
