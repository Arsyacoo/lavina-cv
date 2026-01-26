"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Bachelor of Informatics",
        company: "Universitas Amikom Yogyakarta",
        period: "2023 - Present",
        description: "Pursuing S1 in Informatics. Focusing on advanced software engineering, algorithms, and fullstack development."
    },
    {
        role: "Web Developer Intern",
        company: "UNJAYA (Universitas Jenderal Achmad Yani)",
        period: "2021 - 2022",
        description: "Completed internship (PKL) focusing on web development and IT support tasks within the university environment."
    },
    {
        role: "Software Engineering Student (RPL)",
        company: "SMK Muhammadiyah 1 Yogyakarta",
        period: "2020 - 2023",
        description: "Majored in Software Engineering (Rekayasa Perangkat Lunak). Learned fundamentals of programming, web design, and database management."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 md:pl-12"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-black" />

                            <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
