import { ArrowRight } from "lucide-react";

const emailSubject = encodeURIComponent("Project Collaboration");
const emailBody = encodeURIComponent("Hi Lavina,\n\nI would like to discuss a project, internship, or collaboration.\n");
const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=arsyalavina@gmail.com&su=${emailSubject}&body=${emailBody}`;

const contactLinks = [
    { label: "GitHub", href: "https://github.com/Arsyacoo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arsyacoo/" },
];

const whatsappHref = "https://wa.me/62895340525328";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#1f1f1f] py-16 text-[#f7f6f2] md:py-20">
            <div className="mx-auto grid w-[min(100%-40px,1120px)] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
                <div>
                    <p className="font-caption text-[10px] uppercase tracking-[0.22em] text-white/45">Available for new projects</p>
                    <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                        Let&apos;s build something practical together.
                    </h2>
                    <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/55">
                        I am open to opportunities where I can learn, contribute, and build useful digital products.
                    </p>
                </div>

                <div className="flex flex-col items-start gap-5 md:items-end">
                    <a href={emailHref} target="_blank" rel="noopener noreferrer" aria-label="Open Gmail compose to email arsyalavina@gmail.com" className="inline-flex h-16 items-center justify-center gap-3 border border-white/35 px-9 font-caption text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black">
                        arsyalavina@gmail.com <ArrowRight size={15} />
                    </a>
                    <div className="flex flex-col items-start gap-3 font-caption text-[13px] font-medium uppercase tracking-[0.14em] text-white/70 md:items-end">
                        <div className="flex flex-wrap items-center gap-6">
                            {contactLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white focus-visible:text-white">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white focus-visible:text-white">
                            WhatsApp: +62 895 3405 25328
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
