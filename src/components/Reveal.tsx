"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    delay?: number;
};

const revealCallbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getRevealObserver() {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;

    sharedObserver ??= new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                revealCallbacks.get(entry.target)?.();
                sharedObserver?.unobserve(entry.target);
                revealCallbacks.delete(entry.target);
            });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    return sharedObserver;
}

export default function Reveal({ as: Component = "div", children, className = "", delay = 0 }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            const frame = window.requestAnimationFrame(() => setVisible(true));
            return () => window.cancelAnimationFrame(frame);
        }

        const observer = getRevealObserver();
        if (!observer) {
            const frame = window.requestAnimationFrame(() => setVisible(true));
            return () => window.cancelAnimationFrame(frame);
        }

        revealCallbacks.set(element, () => setVisible(true));
        observer.observe(element);

        return () => {
            observer.unobserve(element);
            revealCallbacks.delete(element);
        };
    }, []);

    return (
        <Component
            ref={ref}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Component>
    );
}
