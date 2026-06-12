import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b rule bg-[#FAF9F5]/90 backdrop-blur-md">
            <nav className="container-grid flex h-12 items-center justify-between gap-4 overflow-hidden">
                <Link href="#hero" className="shrink-0 font-caption text-[11px] uppercase tracking-[0.12em] text-[#1b1c1a] hover:text-[#284739] sm:text-[13px] sm:tracking-[0.16em]">
                    Lavina Arsya Aryanto
                </Link>
                <div className="hide-scrollbar flex min-w-0 items-center gap-4 overflow-x-auto whitespace-nowrap font-caption text-[11px] uppercase tracking-[0.12em] text-[#1b1c1a] sm:gap-5 sm:text-[13px] sm:tracking-[0.16em]">
                    <Link href="#projects" className="hidden hover:text-[#284739] sm:block">Work</Link>
                    <Link href="#about" className="hidden hover:text-[#284739] sm:block">About</Link>
                    <Link href="#contact" className="hidden hover:text-[#284739] sm:block">Contact</Link>
                    <span className="hidden h-1 w-1 rounded-full bg-[#284739] md:block" />
                    <Link href="#contact" className="hidden text-[#727974] hover:text-[#284739] min-[560px]:block">Available for internship</Link>
                </div>
            </nav>
        </header>
    );
}


