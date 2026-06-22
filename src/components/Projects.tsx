import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
    {
        number: "01",
        type: "Healthcare / AI",
        year: "2026",
        role: "Full-stack Developer",
        title: "AI-Powered Healthcare Assistant",
        description: "A healthcare education prototype that provides symptom guidance, AI chat, medication information, and emergency red-flag detection.",
        tags: ["React", "TypeScript", "Gemini API"],
        image: "/ai-healthcare.webp",
        github: "https://github.com/Arsyacoo/AI-Healthcare",
    },
    {
        number: "02",
        type: "Document AI",
        year: "2026",
        role: "Full-stack Developer",
        title: "PDF Insight AI",
        description: "A document analysis application that allows users to upload PDF files, ask questions, review source references, and export generated reports.",
        tags: ["React", "FastAPI", "Groq API", "Python"],
        image: "/pdf-insight.webp",
        github: "https://github.com/Arsyacoo/PDF-Insight-AI",
    },
    {
        number: "03",
        type: "Machine Learning",
        year: "2026",
        role: "Data Analyst / ML Developer",
        title: "Digital Transaction Fraud Detection",
        description: "A machine-learning project using Random Forest to identify potentially fraudulent financial transactions and display model evaluation results.",
        tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        image: "/fraud-detection.webp",
        github: "https://github.com/Arsyacoo/Fraud-Transaction-Detection-Random-Forest",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="site-texture border-t border-black/12 bg-[#f7f6f2] py-16 md:py-24">
            <div className="mx-auto w-[min(100%-40px,1120px)]">
                <Reveal className="mb-16 grid grid-cols-1 gap-6 border-t border-black/14 pt-14 md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                        <h2 className="font-display text-4xl font-medium tracking-[-0.055em] text-black md:text-5xl">Selected Work</h2>
                        <p className="mt-3 font-caption text-[10px] uppercase tracking-[0.22em] text-black/45">Projects that define my technical direction</p>
                    </div>
                    <p className="font-caption text-[10px] uppercase tracking-[0.22em] text-black/45">01 / 03</p>
                </Reveal>

                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => {
                        const reverse = index % 2 === 1;
                        return (
                            <Reveal as="article" key={project.title} delay={index * 120} className={`grid grid-cols-1 items-center gap-10 md:gap-16 ${reverse ? "md:grid-cols-[0.92fr_1.08fr]" : "md:grid-cols-[1.08fr_0.92fr]"}`}>
                                <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project`} className={`${reverse ? "md:order-2" : ""} group block`}>
                                    <div className="border border-black/10 bg-[#f7f6f2] p-0 shadow-[0_18px_42px_rgba(20,20,18,0.08)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-black/22 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                                        <div className="relative aspect-[16/9] overflow-hidden bg-white">
                                            <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center p-2 contrast-[1.03] saturate-[1.08] transition duration-500 group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-3" />
                                        </div>
                                    </div>
                                </Link>

                                <div className={`${reverse ? "md:order-1" : ""} md:px-4`}>
                                    <p className="font-caption text-[10px] uppercase tracking-[0.22em] text-black/45">{project.number} / {project.type}</p>
                                    <h3 className="mt-5 inline-block font-display text-4xl font-medium tracking-[-0.05em] text-black md:text-[2.65rem] md:leading-[1.02] link-underline">{project.title}</h3>
                                    <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-black/62 md:text-[16px] md:leading-8">{project.description}</p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="border border-black/18 px-3.5 py-1.5 font-caption text-[9px] uppercase tracking-[0.16em] text-black/58">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="mt-7 grid max-w-[560px] grid-cols-2 gap-3 border-y border-black/12 py-4 font-caption text-[10px] uppercase tracking-[0.16em] text-black/54">
                                        <span>Role: {project.role}</span>
                                        <span>Year: {project.year}</span>
                                    </div>

                                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="group/link mt-6 inline-flex items-center gap-2 font-caption text-[11px] uppercase tracking-[0.18em] text-black transition-colors hover:text-[#284739] focus-visible:text-[#284739]">
                                        View project <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0" />
                                    </Link>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
