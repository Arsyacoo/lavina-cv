import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const emailHref = "https://mail.google.com/mail/?view=cm&fs=1&to=arsyalavina@gmail.com&su=Project%20Collaboration&body=Hi%20Lavina,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project,%20internship,%20or%20collaboration.%0D%0A";
const whatsappHref = "https://wa.me/62895340525328?text=Hi%20Lavina,%20I%20would%20like%20to%20discuss%20a%20project,%20internship,%20or%20collaboration.";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#202020] py-16 text-[#FAF9F5] md:py-28">
            <div className="container-grid">
                <div className="mb-10 flex items-center gap-4 border-b border-[#FAF9F5]/15 pb-6 md:mb-12 md:gap-5">
                    <span className="font-caption text-[13px] text-[#FAF9F5]/55">03</span>
                    <div className="h-px w-8 bg-[#FAF9F5]/20" />
                    <h2 className="font-display text-3xl tracking-[-0.04em] sm:text-4xl md:text-5xl">Contact</h2>
                </div>
                <div className="max-w-3xl">
                    <h3 className="font-display text-[2.55rem] leading-[0.98] tracking-[-0.04em] min-[420px]:text-[3.1rem] sm:text-[3.8rem] md:text-[5rem]">
                        Have a project, internship, or collaboration in mind?
                    </h3>
                    <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#FAF9F5]/70 sm:mt-8 sm:text-[17px]">
                        I am open to opportunities where I can learn, contribute, and build useful digital products.
                    </p>
                    <div className="mt-8 flex flex-col items-start gap-5 sm:mt-10">
                        <a
                            href={emailHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center gap-2 bg-white px-5 text-sm font-bold opacity-100 transition-transform hover:-translate-y-px hover:bg-[#FAF9F5]"
                            style={{ color: "#111111" }}
                        >
                            <Mail size={16} color="#111111" strokeWidth={2.4} />
                            <span style={{ color: "#111111" }}>Send an email</span>
                        </a>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link href="https://github.com/Arsyacoo" target="_blank" className="font-caption text-[13px] uppercase tracking-[0.16em] text-[#FAF9F5]/65 hover:text-[#FAF9F5]">GitHub</Link>
                            <Link href="https://www.linkedin.com/in/arsyacoo" target="_blank" className="font-caption text-[13px] uppercase tracking-[0.16em] text-[#FAF9F5]/65 hover:text-[#FAF9F5]">LinkedIn</Link>
                        </div>

                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-caption text-[12px] uppercase tracking-[0.12em] text-[#FAF9F5]/65 hover:text-[#FAF9F5] sm:text-[13px] sm:tracking-[0.16em]">
                            <Phone size={14} /> WhatsApp: +62 895 3405 25328
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
