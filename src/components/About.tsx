"use client";
import { motion } from "framer-motion";
import { User, Mail, MapPin, Code2 } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 relative px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About <span className="text-gradient">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        className="relative flex justify-center md:justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px]">
                            {/* Decorative background element */}
                            <div className="absolute top-5 -left-5 w-full h-full border-2 border-primary/20 rounded-2xl hidden md:block" />

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 group z-10 bg-zinc-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <Image
                                    src="/profile.png"
                                    alt="Lavina Arsya"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold">
                                Driven by <span className="text-primary">Innovation</span> & <span className="text-secondary">Data</span>
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                I am a passionate Fullstack Developer and Machine Learning Engineer with a strong foundation in building scalable web applications and intelligent systems.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                My journey combines the art of software engineering with the science of data. From crafting pixel-perfect user interfaces to training complex machine learning models, I love bridging the gap between engaging user experiences and powerful backend logic.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="text-center md:text-left">
                                <h4 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">3+</h4>
                                <p className="text-zinc-400 text-sm mt-1 uppercase tracking-wider font-semibold">Years Experience</p>
                            </div>
                            <div className="text-center md:text-left border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0">
                                {/* Adjusted border for mobile/desktop, actually simpler to just have them side by side */}
                                <h4 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/50">15+</h4>
                                <p className="text-zinc-400 text-sm mt-1 uppercase tracking-wider font-semibold">Projects Completed</p>
                            </div>
                        </div>

                        {/* Personal Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: User, label: "Name", value: "Lavina Arsya" },
                                { icon: Mail, label: "Email", value: "arsyalavina@gmail.com" },
                                { icon: Code2, label: "Role", value: "Fullstack & ML Engineer" },
                                { icon: MapPin, label: "Location", value: "Indonesia" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-xs">{item.label}</div>
                                        <div className="text-white text-sm font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
