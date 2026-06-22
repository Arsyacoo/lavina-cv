import Reveal from "./Reveal";

const skillGroups = [
    ["Core Stack", ["TypeScript / React", "Python / FastAPI", "Laravel / PHP", "SQL databases"]],
    ["AI & Data", ["Gemini API", "Groq API", "Scikit-learn", "Pandas / NumPy"]],
    ["Design", ["Responsive UI", "Technical writing", "Documentation", "Product thinking"]],
    ["Tools", ["Git / GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]],
];

const activities = ["Informatics Undergraduate", "Google Cloud Skills Boost", "AI Capstone Projects", "Open-Source Contributions"];

export default function About() {
    return (
        <>
            <section id="about" className="border-t border-black/12 bg-[#ecebe7] py-16 md:py-24">
                <div className="mx-auto grid w-[min(100%-40px,1120px)] grid-cols-1 gap-12 md:grid-cols-[1fr_1.05fr] md:gap-20">
                    <Reveal>
                        <h2 className="font-display text-4xl font-medium tracking-[-0.055em] text-black md:text-5xl">Technical Philosophy</h2>
                        <div className="mt-8 space-y-6 text-[15px] leading-7 text-black/62">
                            <p>
                                As an Informatics undergraduate, I believe useful software is built by connecting implementation details with real user needs. I do not just write code; I design systems that solve specific problems and can be explained clearly.
                            </p>
                            <p>
                                My approach is iterative, data-aware, and documentation-driven. I am especially interested in AI-assisted applications, machine learning workflows, frontend development, backend development, and open-source documentation.
                            </p>
                        </div>
                        <blockquote className="mt-8 max-w-md border-l border-[#284739] pl-5 font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-black/70">
                            Turning academic ideas into functional, documented reality.
                        </blockquote>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                        {skillGroups.map(([title, items], index) => (
                            <Reveal key={title as string} delay={index * 90} className="border border-black/0 p-0 transition-colors duration-200 hover:border-black/12 hover:bg-black/[0.015] sm:p-3">
                                <h3 className="font-caption text-[10px] uppercase tracking-[0.22em] text-black/45">{title}</h3>
                                <ul className="mt-4 space-y-2 text-[14px] leading-6 text-black/62">
                                    {(items as string[]).map((item) => (
                                        <li key={item} className="flex gap-2 before:mt-[0.65em] before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-black/40">{item}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <div className="site-texture border-y border-black/12 bg-[#f7f6f2] py-4">
                <div className="hide-scrollbar mx-auto flex w-[min(100%-40px,1120px)] items-center gap-4 overflow-x-auto md:justify-between">
                    {activities.map((item, index) => (
                        <Reveal key={item} delay={index * 80} className="flex shrink-0 items-center gap-3 font-caption text-[10px] uppercase tracking-[0.18em] text-black/50">
                            <span className="text-black/35">{String(index + 1).padStart(2, "0")}</span>
                            <span>{item}</span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </>
    );
}
