"use client";

import { useEffect, useRef } from "react";
import Kawung from "./Kawung";

type PinggiranProps = {
    className?: string;
    stampClassName?: string;
    holeClassName?: string;
};

const STAMPS = 64;

// Deterministic per-stamp variance so the band reads as pressed by hand:
// a cap never lands at exactly the same angle or ink load twice.
const press = (i: number) => {
    const n = Math.sin(i * 12.9898) * 43758.5453;
    const r = n - Math.floor(n);
    const m = Math.sin(i * 78.233) * 12345.678;
    const q = m - Math.floor(m);
    return {
        "--rot": `${(r * 4 - 2).toFixed(2)}deg`,
        "--ink-load": (0.86 + q * 0.14).toFixed(3),
        "--dy": `${Math.round(q * 2 - 1)}px`,
    };
};

// The border band between two dye baths. Stamps press in one by one the first
// time the band scrolls into view; without script they are simply there.
export default function Pinggiran({ className = "", stampClassName = "", holeClassName = "" }: PinggiranProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const band = ref.current;
        if (!band || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const rect = band.getBoundingClientRect();
        if (rect.top < window.innerHeight) return;

        band.dataset.state = "armed";
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                band.dataset.state = "pressed";
                observer.disconnect();
            },
            { rootMargin: "0px 0px -12% 0px" }
        );
        observer.observe(band);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`pinggiran ${className}`} aria-hidden="true">
            {Array.from({ length: STAMPS }, (_, i) => (
                <span key={i} className="stamp" style={{ "--i": Math.abs(i - STAMPS / 2), ...press(i) } as React.CSSProperties}>
                    <Kawung className={`h-full w-full ${stampClassName}`} holeClassName={holeClassName} />
                </span>
            ))}
        </div>
    );
}
