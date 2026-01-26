"use client";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get in <span className="text-gradient">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <Link href="mailto:arsyalavina@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                                <Mail className="text-primary" size={20} />
                                arsyalavina@gmail.com
                            </Link>
                            <Link href="https://www.linkedin.com/in/arsyacoo" target="_blank" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                                <Linkedin className="text-primary" size={20} />
                                LinkedIn
                            </Link>
                            <Link href="https://github.com/Arsyacoo" target="_blank" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                                <Github className="text-primary" size={20} />
                                GitHub
                            </Link>
                        </div>
                    </motion.div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // GANTI 'YOUR_FORMSPREE_ID' DENGAN ID FORMSPREE ANDA DARI https://formspree.io/
        const FORMSPREE_ID = "mojdjdgo";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</h3>
                <p className="text-zinc-400">Thank you for reaching out. I'll get back to you soon!</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-primary hover:text-white transition-colors text-sm font-medium"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
        >
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
            </div>
            <div>
                <textarea
                    rows={4}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
            </div>
            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && <Send size={18} />}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">
                    Oops! Something went wrong. Please try again or email me directly.
                </p>
            )}
        </motion.form>
    );
}
