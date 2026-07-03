"use client";

import { ReactNode, useCallback, useRef } from "react";

type TiltCardProps = {
    children: ReactNode;
    className?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const resetTilt = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
    }, []);

    const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "touch") return;

        const card = cardRef.current;
        if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const rotateX = y * -3.5;
        const rotateY = x * 3.5;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    }, []);

    return (
        <div className={`tilt-scene ${className}`} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
            <div ref={cardRef} className="tilt-card">
                {children}
            </div>
        </div>
    );
}
