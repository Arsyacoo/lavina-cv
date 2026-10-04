export type Lang = "en" | "id";

export const contact = {
    email: "arsyalavina@gmail.com",
    whatsappHref: "https://wa.me/62895340525328",
    whatsappLabel: "+62 895 3405 25328",
    github: "https://github.com/Arsyacoo",
    linkedin: "https://www.linkedin.com/in/arsyacoo/",
    resume: "/Lavina-Arsya-Resume.pdf",
};

export const emailHref = (lang: Lang) => {
    const subject = lang === "id" ? "Kolaborasi Proyek" : "Project Collaboration";
    const body = lang === "id"
        ? "Halo Lavina,\n\nSaya ingin berdiskusi tentang proyek, magang, atau kolaborasi.\n"
        : "Hi Lavina,\n\nI would like to discuss a project, internship, or collaboration.\n";
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export type Project = {
    id: string;
    name: string;
    tagline: Record<Lang, string>;
    role: Record<Lang, string>;
    year: string;
    points: Record<Lang, [string, string]>;
    stack: string[];
    repo: string;
    live?: string;
    image?: string;
};

export const projects: Project[] = [
    {
        id: "sholatku",
        name: "Sholatku",
        tagline: { en: "Prayer times and Quran companion", id: "Pendamping waktu sholat dan Al-Qur'an" },
        role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
        year: "2026",
        points: {
            en: [
                "Built a Next.js PWA with daily prayer times, a live adhan countdown, a monthly schedule, and a qibla compass for cities across Indonesia and worldwide.",
                "Added a digital Quran with all 114 surahs, Kemenag translation, verse-by-verse murottal audio, bookmarks, and offline reading cached in IndexedDB.",
            ],
            id: [
                "Membangun PWA Next.js dengan jadwal sholat harian, hitung mundur adzan real-time, jadwal bulanan, dan kompas kiblat untuk kota di Indonesia dan dunia.",
                "Menambahkan Al-Qur'an digital 114 surat dengan terjemahan Kemenag, audio murottal per ayat, bookmark, dan mode baca offline lewat cache IndexedDB.",
            ],
        },
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA (Serwist)", "IndexedDB", "Vitest", "Playwright"],
        repo: "https://github.com/Arsyacoo/Sholatku",
        live: "https://sholatku-staging.vercel.app",
        image: "/sholatku-light.webp",
    },
    {
        id: "pdf-insight",
        name: "PDF Insight AI",
        tagline: { en: "AI-powered document analysis platform", id: "Platform analisis dokumen berbasis AI" },
        role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
        year: "2026",
        points: {
            en: [
                "Built a full-stack React and FastAPI application for PDF upload, summarization, quiz generation, flashcards, document comparison, and chat with PDF content.",
                "Implemented Retrieval-Augmented Generation workflows with Groq API so users can ask document questions and review generated answers.",
            ],
            id: [
                "Membangun aplikasi full-stack React dan FastAPI untuk unggah PDF, ringkasan, pembuatan kuis, flashcard, perbandingan dokumen, dan chat dengan isi PDF.",
                "Mengimplementasikan workflow Retrieval-Augmented Generation dengan Groq API agar pengguna bisa bertanya tentang dokumen dan meninjau jawabannya.",
            ],
        },
        stack: ["React", "FastAPI", "Python", "RAG", "Groq API"],
        repo: "https://github.com/Arsyacoo/PDF-Insight-AI",
        image: "/pdf-insight.webp",
    },
    {
        id: "healthcare",
        name: "AI-Powered Healthcare Assistant",
        tagline: { en: "Health education prototype", id: "Prototipe edukasi kesehatan" },
        role: { en: "Frontend Developer", id: "Frontend Developer" },
        year: "2026",
        points: {
            en: [
                "Developed a React prototype with symptom guidance, AI chat, medicine information, prevention tips, and medical disclaimers.",
                "Designed flows for general health education that clearly separate informational help from medical diagnosis.",
            ],
            id: [
                "Mengembangkan prototipe React dengan panduan gejala, chat AI, informasi obat, tips pencegahan, dan disclaimer medis.",
                "Merancang alur edukasi kesehatan umum yang memisahkan dengan jelas bantuan informasi dan diagnosis medis.",
            ],
        },
        stack: ["React", "JavaScript", "AI Chat", "Healthcare UI"],
        repo: "https://github.com/Arsyacoo/AI-Healthcare",
        image: "/ai-healthcare.webp",
    },
    {
        id: "fraud",
        name: "Digital Transaction Fraud Detection",
        tagline: { en: "Machine learning prototype", id: "Prototipe machine learning" },
        role: { en: "Machine Learning Developer", id: "Machine Learning Developer" },
        year: "2025",
        points: {
            en: [
                "Created a Random Forest fraud detector with baseline comparison, PR-AUC evaluation, anomaly-score ablation, and a Streamlit dashboard.",
                "Prepared evaluation outputs that make suspicious transaction patterns and feature impact easier to interpret.",
            ],
            id: [
                "Membuat detektor fraud Random Forest dengan baseline comparison, evaluasi PR-AUC, anomaly-score ablation, dan dashboard Streamlit.",
                "Menyiapkan output evaluasi yang memudahkan interpretasi pola transaksi mencurigakan dan pengaruh fitur.",
            ],
        },
        stack: ["Python", "Jupyter", "Scikit-learn", "Pandas", "Streamlit"],
        repo: "https://github.com/Arsyacoo/Fraud-Transaction-Detection-Random-Forest",
        image: "/fraud-detection.webp",
    },
    {
        id: "idx-monitor",
        name: "IDX Monitor",
        tagline: { en: "Indonesian stock monitoring dashboard", id: "Dashboard monitoring saham Indonesia" },
        role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
        year: "2025",
        points: {
            en: [
                "Built a FastAPI and React dashboard that monitors Indonesian stock prices and flags potential real-time whale activity.",
                "Created views for market monitoring, data visualization, and practical financial observation.",
            ],
            id: [
                "Membangun dashboard FastAPI dan React untuk memantau harga saham Indonesia dan menandai potensi aktivitas whale secara real-time.",
                "Membuat tampilan untuk market monitoring, visualisasi data, dan observasi finansial yang praktis.",
            ],
        },
        stack: ["FastAPI", "React", "Python", "Tailwind CSS"],
        repo: "https://github.com/Arsyacoo/IDX-Monitor",
        image: "/idx-monitor.webp",
    },
    {
        id: "rental-iqra",
        name: "Rental Iqra",
        tagline: { en: "Car rental reservation system", id: "Sistem reservasi rental mobil" },
        role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
        year: "2025",
        points: {
            en: [
                "Developed a full-stack car rental reservation app with a Laravel backend and a React frontend.",
                "Implemented booking workflows for vehicle rental operations and customer interaction.",
            ],
            id: [
                "Mengembangkan aplikasi reservasi rental mobil full-stack dengan backend Laravel dan frontend React.",
                "Mengimplementasikan workflow booking untuk operasional rental kendaraan dan interaksi pelanggan.",
            ],
        },
        stack: ["Laravel", "React", "JavaScript"],
        repo: "https://github.com/Arsyacoo/Rental-Iqra",
        image: "/rental-iqra.webp",
    },
];

export const path: { years: string; yearsId?: string; title: Record<Lang, string>; place: string; note?: Record<Lang, string> }[] = [
    {
        years: "2020 – 2023",
        title: { en: "Software Engineering (RPL)", id: "Rekayasa Perangkat Lunak (RPL)" },
        place: "SMK Muhammadiyah 1 Yogyakarta",
        note: {
            en: "Programming fundamentals, web design, database management, and software workflows.",
            id: "Dasar pemrograman, desain web, manajemen database, dan alur kerja pengembangan perangkat lunak.",
        },
    },
    {
        years: "2021 – 2022",
        title: { en: "Web Developer Intern", id: "Web Developer Intern" },
        place: "Universitas Jenderal Achmad Yani (UNJAYA)",
        note: {
            en: "Web development and IT support tasks inside a university environment.",
            id: "Web development dan tugas IT support di lingkungan universitas.",
        },
    },
    {
        years: "2023 – now",
        yearsId: "2023 – sekarang",
        title: { en: "Bachelor of Informatics", id: "S1 Informatika" },
        place: "Universitas Amikom Yogyakarta",
        note: {
            en: "Software engineering, web development, AI, machine learning, data analysis, and database systems.",
            id: "Software engineering, web development, AI, machine learning, analisis data, dan sistem basis data.",
        },
    },
    {
        years: "Nov 2025 – now",
        yearsId: "Nov 2025 – sekarang",
        title: { en: "Software Engineer Intern", id: "Software Engineer Intern" },
        place: "PT Javan Cipta Solusi",
        note: {
            en: "Building and maintaining web applications with the engineering team inside a professional software development workflow.",
            id: "Membangun dan memelihara aplikasi web bersama tim engineering dalam alur kerja pengembangan perangkat lunak profesional.",
        },
    },
];

export const skills: { label: Record<Lang, string>; items: string }[] = [
    { label: { en: "Languages", id: "Bahasa pemrograman" }, items: "Python, JavaScript, TypeScript, PHP, HTML, CSS, SQL" },
    { label: { en: "Frontend", id: "Frontend" }, items: "React, Next.js, Tailwind CSS, Bootstrap, responsive UI" },
    { label: { en: "Backend", id: "Backend" }, items: "FastAPI, Laravel, REST API" },
    { label: { en: "Database", id: "Database" }, items: "MySQL, PostgreSQL, MongoDB, SQL database design" },
    { label: { en: "AI/ML & Data", id: "AI/ML & Data" }, items: "Scikit-learn, Pandas, NumPy, Random Forest, Streamlit, Jupyter Notebook, RAG, Groq API, Gemini API" },
    { label: { en: "Tools", id: "Tools" }, items: "Git, GitHub, VS Code, Google Cloud Skills Boost, Google Colab" },
];

export const copy = {
    en: {
        nav: { work: "Work", path: "Path", skills: "Skills", contact: "Contact", resume: "Resume", switchTo: "Bahasa Indonesia" },
        title: "Full-Stack Developer & AI/ML Enthusiast",
        place: "Yogyakarta, Indonesia",
        summary: "I build practical digital products with web technology, data, and AI, turning academic ideas into functional, documented, user-focused projects.",
        emailCta: "Email me",
        resumeCta: "Download resume",
        portraitAlt: "Portrait of Lavina Arsya Aryanto",
        indexLabel: "Projects",
        workTitle: "Work",
        workIntro: "Six projects from 2025 to 2026, from full-stack apps to machine learning prototypes.",
        repo: "Source on GitHub",
        live: "Live site",
        role: "Role",
        stack: "Stack",
        previewAlt: (name: string) => `${name} interface`,
        pathTitle: "Path so far",
        skillsTitle: "Skills",
        skillsIntro: "The tools I reach for, as listed on my resume.",
        contactTitle: "Let’s build something practical together.",
        contactIntro: "Open to internships, freelance projects, and collaboration. Email is the fastest way to reach me.",
        footer: "Lavina Arsya Aryanto · Yogyakarta",
    },
    id: {
        nav: { work: "Karya", path: "Perjalanan", skills: "Keahlian", contact: "Kontak", resume: "Resume", switchTo: "English" },
        title: "Full-Stack Developer & AI/ML Enthusiast",
        place: "Yogyakarta, Indonesia",
        summary: "Saya membangun produk digital yang praktis dengan teknologi web, data, dan AI, mengubah ide akademik menjadi proyek yang fungsional, terdokumentasi, dan berorientasi pengguna.",
        emailCta: "Kirim email",
        resumeCta: "Unduh resume",
        portraitAlt: "Potret Lavina Arsya Aryanto",
        indexLabel: "Proyek",
        workTitle: "Karya",
        workIntro: "Enam proyek dari 2025 sampai 2026, dari aplikasi full-stack hingga prototipe machine learning.",
        repo: "Kode di GitHub",
        live: "Situs live",
        role: "Peran",
        stack: "Stack",
        previewAlt: (name: string) => `Tampilan ${name}`,
        pathTitle: "Perjalanan sejauh ini",
        skillsTitle: "Keahlian",
        skillsIntro: "Alat yang saya gunakan, sesuai resume saya.",
        contactTitle: "Mari membangun sesuatu yang berguna bersama.",
        contactIntro: "Terbuka untuk magang, proyek freelance, dan kolaborasi. Email adalah cara tercepat menghubungi saya.",
        footer: "Lavina Arsya Aryanto · Yogyakarta",
    },
};
