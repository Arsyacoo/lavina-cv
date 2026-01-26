"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Rental-Iqra",
        description: "Comprehensive rental management system designed to streamline booking processes and inventory tracking.",
        tech: ["Web Application", "Fullstack", "Database"],
        github: "https://github.com/Arsyacoo/Rental-Iqra",
        demo: "#",
        image: "/rental-iqra.png"
    },
    {
        title: "IDX-Monitor",
        description: "Real-time stock monitoring dashboard for Indonesia Stock Exchange featuring live data visualization and whale alerts.",
        tech: ["FastAPI", "Python", "React", "Tailwind CSS"],
        github: "https://github.com/Arsyacoo/IDX-Monitor",
        demo: "#",
        image: "/idx-monitor.png"
    },
    {
        title: "Ethereum Price Prediction",
        description: "Advanced machine learning model utilizing LSTM neural networks to forecast Ethereum cryptocurrency prices with high accuracy based on historical data patterns.",
        tech: ["Python", "TensorFlow", "LSTM", "Time Series Analysis"],
        github: "https://github.com/Arsyacoo/Artificial-Intellegence.git",
        demo: "#",
        image: "/eth-prediction-minimal.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-48 bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors flex items-center justify-center relative overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <span className="text-zinc-500">Project Image</span>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <Link href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm font-medium">
                                        <Github size={16} /> Code
                                    </Link>
                                    <Link href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-sm font-medium">
                                        <ExternalLink size={16} /> Demo
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
