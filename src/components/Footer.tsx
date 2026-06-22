import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f7f6f2] py-10 text-black">
            <div className="mx-auto flex w-[min(100%-40px,1120px)] flex-col gap-5 font-caption text-[10px] uppercase tracking-[0.18em] text-black/45 md:flex-row md:items-center md:justify-between">
                <Link href="#hero" className="font-display text-xl font-semibold tracking-[-0.04em] text-black/55 transition-all duration-200 hover:-translate-y-px hover:text-black motion-reduce:hover:translate-y-0">LA</Link>
                <p>Copyright 2026 Lavina Arsya Aryanto - All rights reserved.</p>
            </div>
        </footer>
    );
}
