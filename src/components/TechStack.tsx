"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fullstackSkills = [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
];

const mlSkills = [
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
    { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
    { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
];

const SkillCard = ({ skill }: { skill: { name: string; icon: string } }) => (
    <div className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-3 font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-default group hover:-translate-y-1 w-32 h-32 md:w-40 md:h-40 mx-2 flex-shrink-0">
        <div className="relative w-10 h-10 md:w-12 md:h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
            <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
                unoptimized
            />
        </div>
        <span className="text-xs md:text-sm text-center">{skill.name}</span>
    </div>
);

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-20 relative px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Tech <span className="text-gradient">Stack</span>
                </motion.h2>

                {/* Fullstack - Moves Right */}
                <div className="relative flex overflow-hidden mask-gradient-x py-2">
                    <motion.div
                        className="flex"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            ease: "linear",
                            duration: 80,
                            repeat: Infinity,
                        }}
                    >
                        {[...fullstackSkills, ...fullstackSkills, ...fullstackSkills].map((skill, index) => (
                            <SkillCard key={`fs-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>

                {/* ML - Moves Left */}
                <div className="relative flex overflow-hidden mask-gradient-x py-2">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 80,
                            repeat: Infinity,
                        }}
                    >
                        {[...mlSkills, ...mlSkills, ...mlSkills].map((skill, index) => (
                            <SkillCard key={`ml-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
