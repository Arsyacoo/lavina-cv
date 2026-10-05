"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import Kawung from "./Kawung";
import Pinggiran from "./Pinggiran";
import { contact, copy, emailHref, path, projects, skills, type Lang } from "@/content";

const STORAGE_KEY = "lavina-lang";

export default function Site() {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = window.localStorage.getItem(STORAGE_KEY);
        } catch {}
        const initial: Lang = saved === "id" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
        // eslint-disable-next-line react-hooks/set-state-in-effect -- language is only knowable on the client
        setLang(initial);
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = () => {
        const next: Lang = lang === "en" ? "id" : "en";
        setLang(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {}
    };

    const t = copy[lang];
    const mail = emailHref(lang);

    return (
        <>
            <header className="sticky top-0 z-40 bg-nila-deep text-wax">
                <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label={lang === "id" ? "Navigasi utama" : "Primary navigation"}>
                    <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
                        <Kawung className="h-6 w-6 text-isen" holeClassName="text-nila-deep" />
                        Lavina Arsya
                    </a>
                    <div className="hidden items-center gap-7 text-[15px] text-wax/80 md:flex">
                        <a href="#work" className="transition-colors hover:text-wax">{t.nav.work}</a>
                        <a href="#path" className="transition-colors hover:text-wax">{t.nav.path}</a>
                        <a href="#skills" className="transition-colors hover:text-wax">{t.nav.skills}</a>
                        <a href="#contact" className="transition-colors hover:text-wax">{t.nav.contact}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleLang}
                            aria-label={t.nav.switchTo}
                            className="flex h-9 items-center rounded-[3px] border border-wax/25 p-0.5 text-[13px] font-semibold"
                        >
                            <span className={`rounded-[3px] px-2.5 py-1 transition-colors ${lang === "en" ? "bg-wax text-nila-deep" : "text-wax/70"}`}>EN</span>
                            <span className={`rounded-[3px] px-2.5 py-1 transition-colors ${lang === "id" ? "bg-wax text-nila-deep" : "text-wax/70"}`}>ID</span>
                        </button>
                        <a href={contact.resume} download aria-label={t.resumeCta} className="inline-flex h-9 items-center gap-1.5 rounded-[3px] bg-isen px-2.5 text-[14px] font-semibold text-nila-deep transition-colors hover:bg-wax sm:px-4">
                            <Download size={15} strokeWidth={2.25} /> <span className="hidden sm:inline">{t.nav.resume}</span>
                        </a>
                    </div>
                </nav>
            </header>

            <main id="top">
                {/* Bath 1: nila */}
                <section className="bg-nila text-wax">
                    <div className="wrap grid gap-10 pb-10 pt-14 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] md:items-start md:gap-16 lg:gap-24 md:pb-14 md:pt-20">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-display text-[clamp(3rem,8.5vw,6rem)] font-bold leading-[0.92] tracking-[-0.035em]">
                                Lavina Arsya<br />Aryanto
                            </h1>
                            <p className="mt-6 font-display text-xl font-medium text-isen md:text-2xl">{t.title}</p>
                            <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-wax/80">{t.summary}</p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a href={mail} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-isen px-6 sm:w-auto font-semibold text-nila-deep transition-colors hover:bg-wax">
                                    <Mail size={18} strokeWidth={2.25} /> {t.emailCta}
                                </a>
                                <a href={contact.resume} download className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[3px] border border-wax/35 px-6 sm:w-auto font-semibold transition-colors hover:border-wax hover:bg-wax/10">
                                    <Download size={18} strokeWidth={2.25} /> {t.resumeCta}
                                </a>
                            </div>
                            <p className="mt-6 text-[15px] text-wax/60">{t.place}</p>
                        </div>
                        <figure className="mx-auto w-full max-w-[260px] md:mt-3 md:max-w-none">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] ring-1 ring-wax/30 ring-offset-8 ring-offset-nila">
                                <Image src="/portrait.webp" alt={t.portraitAlt} fill priority quality={92} sizes="(max-width: 768px) 260px, 300px" className="object-cover object-[50%_30%]" />
                            </div>
                        </figure>
                    </div>

                    <div className="border-t border-wax/15">
                        <ol className="wrap flex flex-col gap-x-9 py-5 text-[15px] sm:flex-row sm:flex-wrap" aria-label={t.indexLabel}>
                            {projects.map((p) => (
                                <li key={p.id}>
                                    <a href={`#${p.id}`} className="group flex items-center gap-2.5 py-1.5 text-wax/80 transition-colors hover:text-wax">
                                        <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-isen transition-transform duration-200 group-hover:scale-150" />
                                        <span>{p.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <Pinggiran className="bg-mori" stampClassName="text-nila" holeClassName="text-mori" />

                {/* Bath 0: unwaxed mori, where the work is read */}
                <section id="work" className="bg-mori pb-20 pt-12 md:pb-28 md:pt-16">
                    <div className="wrap">
                        <div className="max-w-2xl">
                            <h2 className="font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">{t.workTitle}</h2>
                            <p className="mt-3 text-lg text-ink-soft">{t.workIntro}</p>
                        </div>

                        <div className="mt-12 border-t border-ink/15">
                            {projects.map((p, i) => (
                                <article key={p.id} id={p.id} className="border-b border-ink/15 py-12 md:py-16">
                                    <div className={`grid items-center gap-8 lg:gap-14 ${i % 2 ? "lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.22fr)]"}`}>
                                        <div className={`max-w-[38rem] ${i % 2 ? "lg:order-2" : ""}`}>
                                            <h3 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-4xl">{p.name}</h3>
                                            <p className="mt-1.5 text-lg text-ink-soft">{p.tagline[lang]}</p>
                                            <p className="tnum mt-2 text-[15px] text-ink-soft"><span className="font-semibold text-ink">{p.role[lang]}</span> · {p.year}</p>
                                            <ul className="mt-5 space-y-3 text-[16.5px] leading-relaxed text-ink/90">
                                                {p.points[lang].map((point) => (
                                                    <li key={point} className="flex gap-3">
                                                        <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 flex-none rounded-full bg-soga" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="mt-5 text-[15px] text-ink-soft">
                                                <span className="font-semibold text-ink">{t.stack}:</span> {p.stack.join(" · ")}
                                            </p>
                                            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                                                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1 font-semibold text-nila">
                                                    {t.repo} <ArrowUpRight size={16} strokeWidth={2.25} />
                                                </a>
                                                {p.live && (
                                                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1 font-semibold text-nila">
                                                        {t.live} <ArrowUpRight size={16} strokeWidth={2.25} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {p.image && (
                                            <a href={p.live ?? p.repo} target="_blank" rel="noopener noreferrer" className={`group block bg-nila-pale p-3 transition-colors hover:bg-nila-pale-hover md:p-4 ${i % 2 ? "lg:order-1" : ""}`} tabIndex={-1} aria-hidden="true">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-white shadow-[0_6px_18px_-6px_rgba(23,45,85,0.35)]">
                                                    <Image src={p.image} alt={t.previewAlt(p.name)} fill quality={92} sizes="(max-width: 1024px) 100vw, 620px" className="object-contain" />
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <Pinggiran className="bg-nila-pale" stampClassName="text-nila-mid" holeClassName="text-nila-pale" />

                {/* Bath 2: first dip, pale nila */}
                <section id="path" className="bg-nila-pale pb-20 pt-12 md:pb-24 md:pt-16">
                    <div className="wrap">
                        <h2 className="font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">{t.pathTitle}</h2>

                        <ol className="relative mt-12 grid gap-10 border-l-2 border-nila pl-8 md:grid-cols-4 md:gap-8 md:border-l-0 md:border-t-2 md:pl-0 md:pt-10">
                            {path.map((step) => (
                                <li key={step.years} className="relative">
                                    <span aria-hidden="true" className="absolute -left-[39px] top-2 h-3 w-3 rounded-full border-2 border-nila bg-nila-pale md:-top-[47px] md:left-0" />
                                    <p className="tnum font-display text-xl font-bold text-nila">{lang === "id" && step.yearsId ? step.yearsId : step.years}</p>
                                    <h3 className="mt-2 text-lg font-semibold leading-snug">{step.title[lang]}</h3>
                                    <p className="mt-1 text-[15px] font-medium text-ink-soft">{step.place}</p>
                                    {step.note && <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{step.note[lang]}</p>}
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <Pinggiran className="bg-nila-mid" stampClassName="text-nila-pale" holeClassName="text-nila-mid" />

                {/* Bath 3: second dip, nila */}
                <section id="skills" className="bg-nila-mid pb-20 pt-12 text-wax md:pb-24 md:pt-16">
                    <div className="wrap grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-16">
                        <div>
                            <h2 className="font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">{t.skillsTitle}</h2>
                            <p className="mt-3 text-lg text-wax/75">{t.skillsIntro}</p>
                        </div>
                        <dl className="divide-y divide-wax/15 border-y border-wax/15">
                            {skills.map((group) => (
                                <div key={group.label.en} className="grid gap-1 py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
                                    <dt className="font-semibold text-isen-light">{group.label[lang]}</dt>
                                    <dd className="text-wax/90">{group.items}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <Pinggiran className="bg-soga" stampClassName="text-isen" holeClassName="text-soga" />

                {/* Bath 4: soga, the final dye */}
                <section id="contact" className="bg-soga pb-16 pt-14 text-wax md:pb-20 md:pt-20">
                    <div className="wrap">
                        <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1] tracking-[-0.035em]">{t.contactTitle}</h2>
                        <p className="mt-5 max-w-xl text-lg text-wax/80">{t.contactIntro}</p>

                        <a href={mail} target="_blank" rel="noopener noreferrer" className="group mt-10 inline-flex items-center gap-3 font-display text-[clamp(1.5rem,4.2vw,3rem)] font-semibold text-isen">
                            <span className="link-line break-all">{contact.email}</span>
                            <ArrowUpRight className="h-[0.8em] w-[0.8em] flex-none transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={2.25} />
                        </a>

                        <ul className="mt-10 flex flex-wrap gap-3 text-[15px] font-semibold">
                            <li><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-[3px] border border-wax/30 px-5 transition-colors hover:border-wax hover:bg-wax/10">WhatsApp {contact.whatsappLabel}</a></li>
                            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-[3px] border border-wax/30 px-5 transition-colors hover:border-wax hover:bg-wax/10">LinkedIn</a></li>
                            <li><a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-[3px] border border-wax/30 px-5 transition-colors hover:border-wax hover:bg-wax/10">GitHub</a></li>
                            <li><a href={contact.resume} download className="inline-flex h-11 items-center gap-1.5 rounded-[3px] bg-wax px-5 text-soga-deep transition-colors hover:bg-isen"><Download size={16} strokeWidth={2.25} /> {t.resumeCta}</a></li>
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="bg-soga-deep py-6 text-[14px] text-wax/65">
                <div className="wrap flex flex-wrap items-center justify-between gap-3">
                    <p>© 2026 {t.footer}</p>
                    <a href="#top" className="link-line">arsyalavina.web.id</a>
                </div>
            </footer>
        </>
    );
}
