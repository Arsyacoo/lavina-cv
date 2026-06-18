import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/92 backdrop-blur-md">
            <nav className="mx-auto flex h-16 w-[min(100%-40px,1120px)] items-center justify-between" aria-label="Primary navigation">
                <Link href="#hero" aria-label="Go to top" className="font-display text-xl font-semibold tracking-[-0.04em] text-black">
                    LA
                </Link>

                <div className="hidden items-center gap-8 text-[12px] text-black/60 md:flex">
                    <Link href="#projects" className="nav-link active">Work</Link>
                    <Link href="#about" className="nav-link">About</Link>
                    <Link href="#contact" className="nav-link">Contact</Link>
                </div>

                <Link href="/Lavina-Arsya-Resume.pdf" download className="border border-black bg-black px-4 py-2 font-caption text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-[#284739]" style={{ color: "#f7f6f2" }}>
                    Download CV
                </Link>
            </nav>
        </header>
    );
}
