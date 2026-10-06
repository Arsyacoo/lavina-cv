type KawungProps = {
    className?: string;
    holeClassName?: string;
};

// One kawung cap stamp: four palm-fruit ovals pointing at a centre point.
export default function Kawung({ className = "", holeClassName = "" }: KawungProps) {
    return (
        <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
            <g fill="currentColor">
                <ellipse cx="11" cy="11" rx="5.6" ry="9.6" transform="rotate(-45 11 11)" />
                <ellipse cx="29" cy="11" rx="5.6" ry="9.6" transform="rotate(45 29 11)" />
                <ellipse cx="11" cy="29" rx="5.6" ry="9.6" transform="rotate(45 11 29)" />
                <ellipse cx="29" cy="29" rx="5.6" ry="9.6" transform="rotate(-45 29 29)" />
                <circle cx="20" cy="20" r="2.2" />
            </g>
            <g className={holeClassName} fill="currentColor">
                <circle cx="11" cy="11" r="1.6" />
                <circle cx="29" cy="11" r="1.6" />
                <circle cx="11" cy="29" r="1.6" />
                <circle cx="29" cy="29" r="1.6" />
            </g>
        </svg>
    );
}
