"use client";

import { AnchorHTMLAttributes, CSSProperties, ReactNode, useCallback, useRef } from "react";

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
};

export default function MagneticLink({ children, className = "", onMouseMove, onMouseLeave, ...props }: MagneticLinkProps) {
    const linkRef = useRef<HTMLAnchorElement | null>(null);

    const reset = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
        const link = linkRef.current;
        if (link) {
            link.style.setProperty("--magnetic-x", "0px");
            link.style.setProperty("--magnetic-y", "0px");
        }
        onMouseLeave?.(event);
    }, [onMouseLeave]);

    const move = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
        const link = linkRef.current;
        if (!link || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            onMouseMove?.(event);
            return;
        }

        const rect = link.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        link.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
        link.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
        onMouseMove?.(event);
    }, [onMouseMove]);

    return (
        <a
            ref={linkRef}
            className={`magnetic-link ${className}`}
            onMouseMove={move}
            onMouseLeave={reset}
            style={{ "--magnetic-x": "0px", "--magnetic-y": "0px", ...props.style } as CSSProperties}
            {...props}
        >
            {children}
        </a>
    );
}
