const tools = [
    ["01", "Frontend", "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap"],
    ["02", "Backend", "Python, FastAPI, Laravel, PHP, REST API"],
    ["03", "Database", "MySQL, PostgreSQL, MongoDB, SQL database design"],
    ["04", "AI and Data", "Gemini API, Groq API, Scikit-learn, Pandas, NumPy, Random Forest, Streamlit"],
    ["05", "Tools", "Git, GitHub, VS Code, Google Cloud, Google Colab, Jupyter Notebook"],
];

export default function About() {
    return (
        <>
            <section id="about" className="bg-[#F5F4F0] py-16 md:py-28">
                <div className="container-grid">
                    <div className="mb-10 flex items-center gap-4 border-b rule pb-5 md:mb-14 md:gap-5">
                        <span className="font-caption text-[13px] text-[#727974]">02</span>
                        <div className="h-px w-8 bg-[#c1c8c2]" />
                        <h2 className="font-display text-3xl tracking-[-0.04em] text-[#1b1c1a] sm:text-4xl md:text-5xl">About me</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
                        <div className="md:col-span-5">
                            <p className="text-[15px] leading-8 text-[#1b1c1a] sm:text-[17px]">
                                I am an Informatics undergraduate who enjoys learning through practical projects. My current interests include generative AI, machine learning, frontend development, backend development, and open-source documentation.
                            </p>
                            <blockquote className="mt-8 border-l border-[#284739] pl-5 font-display text-2xl italic leading-tight text-[#5f5e5e] sm:mt-9 sm:text-3xl">
                                Turning academic ideas into functional, documented reality.
                            </blockquote>

                            <div className="mt-10 space-y-6 font-caption text-[13px] uppercase tracking-[0.13em] text-[#727974]">
                                <div>
                                    <p className="mb-2 text-[#c1c8c2]">Education</p>
                                    <p className="text-[#1b1c1a]">Informatics Undergraduate</p>
                                    <p>Indonesia</p>
                                </div>
                                <div>
                                    <p className="mb-2 text-[#c1c8c2]">Activity</p>
                                    <p className="normal-case tracking-normal text-[#5f5e5e]">Currently developing academic and personal projects involving AI, data, and web applications.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            <h3 className="font-display mb-6 text-2xl tracking-[-0.04em] text-[#1b1c1a] sm:mb-8 sm:text-3xl">Tools I work with</h3>
                            <div className="border-y rule">
                                {tools.map(([number, title, items]) => (
                                    <div key={title} className="grid grid-cols-1 gap-2 border-b rule py-5 last:border-b-0 sm:grid-cols-12 sm:gap-4">
                                        <span className="font-caption text-[12px] text-[#727974] sm:col-span-1 sm:text-[13px]">{number}</span>
                                        <p className="font-caption text-[12px] uppercase tracking-[0.12em] text-[#1b1c1a] sm:col-span-4 sm:text-[13px] sm:tracking-[0.14em]">{title}</p>
                                        <p className="font-caption text-[12px] leading-6 text-[#5f5e5e] sm:col-span-7 sm:text-[13px]">{items}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-y rule bg-[#F5F4F0] py-4">
                <div className="container-grid hide-scrollbar flex items-center gap-6 overflow-x-auto">
                    {["Informatics Undergraduate", "Google Cloud Skills Boost", "AI Capstone Projects", "Open-Source Contributions"].map((item, index) => (
                        <div key={item} className="flex shrink-0 items-center gap-3">
                            <span className="font-caption text-[13px] text-[#727974]">{String(index + 1).padStart(2, "0")}</span>
                            <span className="tagline-item">{item}</span>
                            {index < 3 && <span className="ml-3 h-4 w-px bg-[#c1c8c2]" />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
