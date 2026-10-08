import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contact, copy, emailHref, projects, skills, type Lang } from "@/content";

function SignalMark({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
            <path d="M5 11.5h8.5v8M35 28.5h-8.5v-8M20 5v8.5M20 35v-8.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="5.5" fill="currentColor" />
            <circle cx="20" cy="20" r="2" fill="var(--signal-surface)" />
        </svg>
    );
}

function SignalPanel({ lang }: { lang: Lang }) {
    const t = copy[lang];

    return (
        <div className="signal-panel" aria-label={t.heroPanelTitle}>
            <div className="signal-panel-top">
                <div className="signal-panel-id">
                    <SignalMark className="signal-panel-mark" />
                    <span>AR / AI-01</span>
                </div>
                <span className="signal-panel-status"><i /> {lang === "id" ? "alur demo" : "demo flow"}</span>
            </div>
            <div className="signal-panel-body">
                <p className="panel-label">{t.heroPanelLabel}</p>
                <div className="panel-heading-row">
                    <h2>{t.heroPanelTitle}</h2>
                    <span className="panel-meta">{t.heroPanelMeta}</span>
                </div>
                <div className="panel-question">
                    <span className="panel-prompt">{lang === "id" ? "PERTANYAAN" : "QUESTION"}</span>
                    <p>{t.heroPanelQuestion}</p>
                </div>
                <div className="panel-answer">
                    <span className="panel-prompt">{lang === "id" ? "JAWABAN TERARAH SUMBER" : "SOURCE-GROUNDED ANSWER"}</span>
                    <p>{t.heroPanelAnswer}</p>
                    <span className="panel-cursor" aria-hidden="true" />
                </div>
                <div className="panel-signal" aria-hidden="true">
                    <span className="panel-signal-line panel-signal-line-one" />
                    <span className="panel-signal-line panel-signal-line-two" />
                    <span className="panel-signal-node panel-signal-node-one" />
                    <span className="panel-signal-node panel-signal-node-two" />
                    <span className="panel-signal-node panel-signal-node-three" />
                </div>
            </div>
            <div className="signal-panel-bottom">
                {t.heroPanelFooter.map((item) => <span key={item}>{item}</span>)}
            </div>
        </div>
    );
}

export default function Site({ lang }: { lang: Lang }) {
    const t = copy[lang];
    const mail = emailHref(lang);
    const featuredProject = projects[1];
    const supportingProjects = projects.filter((project) => project.id !== featuredProject.id);
    const navLinks = [
        ["#work", t.nav.work],
        ["#approach", t.nav.approach],
        ["#stack", t.nav.stack],
        ["#contact", t.nav.contact],
    ];

    return (
        <>
            <header className="site-header">
                <nav className="wrap site-nav" aria-label={lang === "id" ? "Navigasi utama" : "Primary navigation"}>
                    <a href="#top" className="brand" aria-label="Arsyacoo home">
                        <SignalMark className="brand-mark" />
                        <span>Arsyacoo</span>
                    </a>
                    <div className="nav-links">
                        {navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
                    </div>
                    <div className="nav-actions">
                        <a
                            href={lang === "en" ? "/id" : "/"}
                            hrefLang={lang === "en" ? "id" : "en"}
                            aria-label={t.nav.switchTo}
                            className="lang-toggle"
                        >
                            <span className={lang === "en" ? "is-active" : ""}>EN</span>
                            <span className={lang === "id" ? "is-active" : ""}>ID</span>
                        </a>
                        <a href={contact.resume} download aria-label={t.resumeCta} className="nav-profile">
                            <Download size={15} strokeWidth={2.2} />
                            <span>{t.nav.resume}</span>
                        </a>
                    </div>
                </nav>
            </header>

            <main id="top">
                <section className="hero-section">
                    <div className="wrap hero-grid">
                        <div className="hero-copy">
                            <h1>{t.heroTitle}</h1>
                            <p className="hero-brandline"><span className="signal-dot" /> Arsyacoo / Applied AI studio</p>
                            <p className="hero-summary">{t.heroSummary}</p>
                            <div className="hero-actions">
                                <a href="#work" className="button button-primary">{t.heroPrimary}<ArrowUpRight size={17} strokeWidth={2.4} /></a>
                                <a href={mail} target="_blank" rel="noopener noreferrer" className="button button-quiet">{t.heroSecondary}</a>
                            </div>
                            <p className="hero-location">{t.heroLocation}</p>
                        </div>
                        <SignalPanel lang={lang} />
                    </div>
                    <div className="hero-strip">
                        <div className="wrap hero-strip-inner" aria-label={lang === "id" ? "Fokus Arsyacoo" : "Arsyacoo focus"}>
                            {t.strip.map((item) => <span key={item}><i />{item}</span>)}
                        </div>
                    </div>
                </section>

                <section id="approach" className="approach-section">
                    <div className="wrap">
                        <div className="section-heading section-heading-wide">
                            <h2>{t.approachTitle}</h2>
                            <p>{t.approachIntro}</p>
                        </div>
                        <div className="approach-grid">
                            {t.approach.map((item) => (
                                <article key={item.title} className="approach-item">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="work" className="proof-section">
                    <div className="wrap">
                        <div className="section-heading">
                            <h2>{t.proofTitle}</h2>
                            <p>{t.proofIntro}</p>
                        </div>

                        <article className="featured-project">
                            <a href={featuredProject.repo} target="_blank" rel="noopener noreferrer" className="featured-media" aria-label={`${t.repo}: ${featuredProject.name}`}>
                                <Image src={featuredProject.image ?? ""} alt={t.previewAlt(featuredProject.name)} fill sizes="(max-width: 900px) 100vw, 58vw" quality={92} />
                                <span className="media-caption">{featuredProject.name} <ArrowUpRight size={16} /></span>
                            </a>
                            <div className="featured-copy">
                                <h3>{t.featuredTitle}</h3>
                                <p className="project-type">{featuredProject.name} · {featuredProject.role[lang]} · {featuredProject.year}</p>
                                <p className="featured-intro">{t.featuredIntro}</p>
                                <ul className="proof-points">
                                    {t.featuredPoints.map((point) => <li key={point}><span aria-hidden="true">+</span>{point}</li>)}
                                </ul>
                                <p className="project-stack"><strong>{t.stack}:</strong> {featuredProject.stack.join(" · ")}</p>
                                <div className="project-links">
                                    <a href={featuredProject.repo} target="_blank" rel="noopener noreferrer">{t.repo}<ArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </article>

                        <div className="project-list-heading">
                            <h3>{t.projectListTitle}</h3>
                            <p>{t.projectListIntro}</p>
                        </div>
                        <div className="project-list">
                            {supportingProjects.map((project, index) => (
                                <article key={project.id} id={project.id} className="project-row">
                                    <span className="project-row-index">{String(index + 2).padStart(2, "0")}</span>
                                    <div className="project-row-main">
                                        <div className="project-row-title">
                                            <h3>{project.name}</h3>
                                            <span>{project.year}</span>
                                        </div>
                                        <p>{project.tagline[lang]}</p>
                                    </div>
                                    <p className="project-row-role">{project.role[lang]}</p>
                                    <div className="project-row-stack">
                                        {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
                                    </div>
                                    <div className="project-row-image">
                                        <Image src={project.image ?? ""} alt={t.previewAlt(project.name)} fill sizes="180px" quality={86} />
                                    </div>
                                    <div className="project-row-links">
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`${t.repo}: ${project.name}`}><Github size={15} />{t.repo}</a>
                                        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${t.live}: ${project.name}`}><ArrowUpRight size={15} />{t.live}</a>}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="stack" className="stack-section">
                    <div className="wrap stack-grid">
                        <div className="section-heading stack-heading">
                            <h2>{t.stackTitle}</h2>
                            <p>{t.stackIntro}</p>
                        </div>
                        <dl className="skills-list">
                            {skills.map((skill) => (
                                <div key={skill.items} className="skill-row">
                                    <dt>{skill.label[lang]}</dt>
                                    <dd>{skill.items}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section className="founder-section">
                    <div className="wrap founder-grid">
                        <div className="founder-copy">
                            <h2>{t.founderTitle}</h2>
                            <p>{t.founderIntro}</p>
                            <a href={contact.resume} download className="text-link">{t.founderProfile}<ArrowUpRight size={16} /></a>
                        </div>
                        <figure className="founder-portrait">
                            <Image src="/portrait.webp" alt={t.portraitAlt} fill sizes="(max-width: 760px) 100vw, 320px" quality={90} />
                        </figure>
                    </div>
                </section>

                <section id="contact" className="contact-section">
                    <div className="wrap contact-grid">
                        <div className="contact-copy">
                            <h2>{t.contactTitle}</h2>
                            <p className="contact-lead">{t.contactLead}</p>
                            <p>{t.contactIntro}</p>
                        </div>
                        <div className="contact-actions">
                            <a href={mail} target="_blank" rel="noopener noreferrer" className="contact-email"><Mail size={20} />{contact.email}<ArrowUpRight size={18} /></a>
                            <div className="contact-links">
                                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />{t.whatsappCta}</a>
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />{t.linkedinCta}</a>
                                <a href={contact.github} target="_blank" rel="noopener noreferrer"><Github size={17} />{t.githubCta}</a>
                                <a href={contact.resume} download><Download size={17} />{t.resumeCta}</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="wrap footer-inner">
                    <span>{t.footer}</span>
                    <a href="#top">Arsyacoo <ArrowUpRight size={15} /></a>
                </div>
            </footer>
        </>
    );
}
