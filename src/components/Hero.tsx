import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="bg-[#FAF9F5]">
            <div className="container-grid py-6 sm:py-10 md:py-14">
                <div className="relative px-0 py-7 sm:py-10 md:py-14">
                    <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 md:grid-cols-12 md:items-center md:gap-10">
                        <div className="md:col-span-8">
                            <div className="mb-4 flex items-center sm:mb-5">                                <p className="caption">Lavina Arsya Aryanto — Informatics undergraduate</p>
                            </div>
                            <h1 className="font-display max-w-4xl text-[clamp(2.55rem,11.5vw,4.35rem)] leading-[0.95] tracking-[-0.04em] text-[#1b1c1a] md:text-[4.35rem]">
                                I build practical digital products using <em className="text-[#284739]">web technology, data, and artificial intelligence.</em>
                            </h1>
                            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#5f5e5e] sm:mt-6 sm:text-[17px]">
                                I am an Informatics student interested in AI-assisted applications, machine learning, and modern web development. I enjoy turning academic ideas into functional and documented projects.
                            </p>
                            <div className="mt-7 flex flex-row flex-wrap items-center gap-x-5 gap-y-4 sm:mt-8">
                                <Link href="#projects" className="primary-button">View selected work</Link>
                                <Link href="/Lavina-Arsya-Resume.pdf" download className="text-link">Download resume <ArrowDown size={13} /></Link>
                            </div>
                        </div>

                        <div className="md:col-span-4">
                            <div className="mx-auto mt-1 w-full max-w-[300px] min-[420px]:max-w-[330px] sm:mt-2 md:ml-auto md:mr-0 md:mt-0 md:max-w-[300px]">
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#e3e2df]">
                                    <Image src="/profile-hero.webp" alt="Lavina Arsya Aryanto portrait" fill priority className="object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-9 flex max-w-2xl flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#c1c8c2]/35 pt-5 font-caption text-[11px] uppercase tracking-[0.14em] text-[#727974] sm:mt-12 sm:text-[13px] sm:tracking-[0.18em]">
                        <span>Indonesia</span>
                        <span>Informatics</span>
                        <span>Open to work</span>
                    </div>
                </div>
            </div>
        </section>
    );
}











