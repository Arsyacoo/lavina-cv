import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        number: "01",
        type: "Healthcare",
        year: "2024",
        role: "Full-stack Developer",
        title: "AI-Powered Healthcare Assistant",
        description: "A healthcare education prototype that provides symptom guidance, AI chat, medication information, and emergency red-flag detection.",
        meta: "React, TypeScript, Gemini API",
        image: "/ai-healthcare.webp",
        imageClassName: "object-contain p-1",
        frameClassName: "aspect-[16/10]",
        github: "https://github.com/Arsyacoo/AI-Healthcare",
    },
    {
        number: "02",
        type: "Document AI",
        year: "2024",
        role: "Full-stack Developer",
        title: "PDF Insight AI",
        description: "A document analysis application that allows users to upload PDF files, ask questions, review source references, and export generated reports.",
        meta: "React, FastAPI, Groq API, Python",
        image: "/pdf-insight.webp",
        imageClassName: "object-cover object-top",
        frameClassName: "aspect-[16/10]",
        github: "https://github.com/Arsyacoo/PDF-Insight-AI",
    },
    {
        number: "03",
        type: "Machine Learning",
        year: "2023",
        role: "Data Analyst",
        title: "Digital Transaction Fraud Detection",
        description: "A machine-learning project using Random Forest to identify potentially fraudulent financial transactions and display model evaluation results.",
        meta: "Python, Scikit-learn, Pandas, Streamlit",
        image: "/fraud-detection.webp",
        imageClassName: "object-contain p-1",
        frameClassName: "aspect-[16/9]",
        github: "https://github.com/Arsyacoo/Fraud-Transaction-Detection-Random-Forest",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-[#FAF9F5] py-16 md:py-28">
            <div className="container-grid">
                <div className="mb-12 flex flex-wrap items-center gap-4 border-b rule pb-5 md:mb-16 md:gap-5">
                    <span className="font-caption text-[13px] text-[#727974]">01</span>
                    <div className="h-px w-8 bg-[#c1c8c2]" />
                    <h2 className="font-display text-3xl tracking-[-0.04em] text-[#1b1c1a] sm:text-4xl md:text-5xl">Selected Work</h2>
                    <span className="ml-auto hidden font-caption text-[13px] uppercase tracking-[0.18em] text-[#c1c8c2] md:block">Selected work / AI projects</span>
                </div>

                <div className="space-y-16 md:space-y-28">
                    {projects.map((project, index) => {
                        const reverse = index === 1;
                        return (
                            <article key={project.title} className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-16">
                                <div className={`${reverse ? "md:order-2 md:col-span-5" : "md:col-span-5"}`}>
                                    <div className="mb-5 flex items-center gap-3 font-caption text-[12px] uppercase tracking-[0.14em] text-[#727974] sm:mb-7 sm:gap-4 sm:text-[13px] sm:tracking-[0.18em]">
                                        <span>{project.number}</span>
                                        <div className="h-px w-7 bg-[#c1c8c2]" />
                                        <span>{project.type}</span>
                                    </div>
                                    <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-[#1b1c1a] sm:text-4xl">{project.title}</h3>
                                    <p className="mt-4 text-[15px] leading-7 text-[#5f5e5e] sm:text-[17px]">{project.description}</p>

                                    <div className="mt-6 grid grid-cols-1 gap-y-4 border-y rule py-4 font-caption text-[12px] uppercase tracking-[0.1em] text-[#727974] min-[420px]:grid-cols-2 min-[420px]:gap-x-5 sm:mt-7 sm:text-[13px] sm:tracking-[0.12em]">
                                        <div>
                                            <p className="mb-2 text-[#c1c8c2]">Role</p>
                                            <p>{project.role}</p>
                                        </div>
                                        <div>
                                            <p className="mb-2 text-[#c1c8c2]">Year</p>
                                            <p>{project.year}</p>
                                        </div>
                                        <div className="mt-1 normal-case tracking-normal text-[#5f5e5e] min-[420px]:col-span-2 min-[420px]:mt-4">
                                            <p className="mb-2 uppercase tracking-[0.12em] text-[#c1c8c2]">Tech</p>
                                            <p>{project.meta}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-wrap items-center gap-5">
                                        <Link href={project.github} target="_blank" className="text-link">View project <ArrowUpRight size={13} /></Link>
                                        <Link href={project.github} target="_blank" className="font-caption text-[13px] text-[#5f5e5e] hover:text-[#284739]">GitHub</Link>
                                    </div>
                                </div>

                                <div className={`${reverse ? "md:order-1 md:col-span-7" : "md:col-span-7"}`}>
                                    <div className="project-window">
                                        <div className={`${project.frameClassName} overflow-hidden bg-[#f8f7f3]`}>
                                            <Image src={project.image} alt={`${project.title} preview`} width={900} height={675} className={`h-full w-full ${project.imageClassName} transition-transform duration-700 hover:scale-[1.02]`} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <Link href="https://github.com/Arsyacoo" target="_blank" className="mt-16 inline-flex items-center gap-3 font-caption text-[12px] uppercase tracking-[0.14em] text-[#727974] hover:text-[#284739] sm:mt-20 sm:text-[13px] sm:tracking-[0.18em]">
                    View more projects on GitHub <ArrowUpRight size={13} />
                </Link>
            </div>
        </section>
    );
}

