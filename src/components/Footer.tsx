export default function Footer() {
    return (
        <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <p>&copy; {new Date().getFullYear()} Lavina. All rights reserved.</p>
        </footer>
    );
}
