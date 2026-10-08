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
    const subject = lang === "id" ? "Percakapan proyek Arsyacoo" : "Arsyacoo project conversation";
    const body = lang === "id"
        ? "Halo Arsyacoo,\n\nSaya ingin berdiskusi tentang produk AI, proyek web, atau kolaborasi.\n"
        : "Hi Arsyacoo,\n\nI would like to discuss an AI product, web project, or collaboration.\n";
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
        nav: { work: "Proof", approach: "Approach", stack: "Stack", contact: "Contact", resume: "Profile", switchTo: "Bahasa Indonesia" },
        heroTitle: "AI for work that matters.",
        heroSummary: "Arsyacoo builds focused AI products that turn documents, data, and complex workflows into clear next steps.",
        heroPrimary: "Explore the proof",
        heroSecondary: "Start a conversation",
        heroLocation: "Yogyakarta, Indonesia",
        heroPanelLabel: "A PRODUCT IN FOCUS",
        heroPanelTitle: "PDF Insight AI",
        heroPanelMeta: "Document intelligence · illustrative flow",
        heroPanelQuestion: "What changed between these reports?",
        heroPanelAnswer: "Bring the source into view, ground the answer, and keep the next step close.",
        heroPanelFooter: ["Source-grounded", "Human review", "Built end-to-end"],
        strip: ["Applied AI", "Full-stack systems", "Human handoff"],
        proofTitle: "Proof, not promises.",
        proofIntro: "A small set of working projects across documents, health education, risk signals, and everyday digital products.",
        featuredTag: "Featured build",
        featuredTitle: "Make the document useful.",
        featuredIntro: "PDF Insight AI turns a dense PDF into a place to ask, compare, summarize, and study — with the source still in view.",
        featuredPoints: [
            "Summaries, quizzes, flashcards, comparisons, and chat from uploaded documents.",
            "RAG workflows with React, FastAPI, Python, and Groq API.",
        ],
        projectListTitle: "More from the workbench",
        projectListIntro: "Each project starts with a concrete problem, then earns its way into a working surface.",
        repo: "View source",
        live: "Open live build",
        role: "Contribution",
        stack: "Built with",
        previewAlt: (name: string) => `${name} interface`,
        approachTitle: "Good AI keeps a human hand on the wheel.",
        approachIntro: "The work sits where software engineering, data, and useful intelligence meet.",
        approach: [
            { title: "Make information usable", text: "From PDFs to market signals, turn raw inputs into something a person can work with." },
            { title: "Keep the edges honest", text: "Use evaluation, disclaimers, and clear source context wherever a model can overreach." },
            { title: "Ship the whole loop", text: "A model is only part of a product. The interface, API, data, and handoff have to hold together." },
        ],
        stackTitle: "The stack behind the surface.",
        stackIntro: "Practical tools for taking an idea from a rough question to a usable product.",
        founderTitle: "Built close to the work.",
        founderIntro: "Arsyacoo is built from Yogyakarta by Lavina Arsya Aryanto, an Informatics student and software engineer working across full-stack web, data, and applied AI.",
        founderProfile: "Read founder profile",
        portraitAlt: "Portrait of Lavina Arsya Aryanto",
        contactTitle: "Have a messy workflow?",
        contactLead: "Let’s turn it into something clear, useful, and ready to use.",
        contactIntro: "For an AI product, a web build, or a collaboration, email is the fastest way to start.",
        emailCta: "Email Arsyacoo",
        whatsappCta: "WhatsApp",
        linkedinCta: "LinkedIn",
        githubCta: "GitHub",
        resumeCta: "Download resume",
        footer: "Arsyacoo · Lavina Arsya Aryanto · Yogyakarta",
    },
    id: {
        nav: { work: "Bukti", approach: "Cara kerja", stack: "Stack", contact: "Kontak", resume: "Profil", switchTo: "English" },
        heroTitle: "AI untuk kerja yang berarti.",
        heroSummary: "Arsyacoo membangun produk AI yang fokus, mengubah dokumen, data, dan alur kerja yang rumit menjadi langkah berikutnya yang jelas.",
        heroPrimary: "Lihat buktinya",
        heroSecondary: "Mulai percakapan",
        heroLocation: "Yogyakarta, Indonesia",
        heroPanelLabel: "PRODUK DALAM FOKUS",
        heroPanelTitle: "PDF Insight AI",
        heroPanelMeta: "Kecerdasan dokumen · alur ilustratif",
        heroPanelQuestion: "Apa yang berubah di antara dua laporan ini?",
        heroPanelAnswer: "Tampilkan sumbernya, landaskan jawaban, dan dekatkan langkah berikutnya.",
        heroPanelFooter: ["Berbasis sumber", "Tinjauan manusia", "Dibangun menyeluruh"],
        strip: ["AI terapan", "Sistem full-stack", "Handoff manusia"],
        proofTitle: "Bukti, bukan janji.",
        proofIntro: "Kumpulan proyek yang sudah dibuat untuk dokumen, edukasi kesehatan, sinyal risiko, dan produk digital sehari-hari.",
        featuredTag: "Proyek utama",
        featuredTitle: "Buat dokumen jadi berguna.",
        featuredIntro: "PDF Insight AI mengubah PDF yang padat menjadi ruang untuk bertanya, membandingkan, merangkum, dan belajar — dengan sumber tetap terlihat.",
        featuredPoints: [
            "Ringkasan, kuis, flashcard, perbandingan, dan chat dari dokumen yang diunggah.",
            "Workflow RAG dengan React, FastAPI, Python, dan Groq API.",
        ],
        projectListTitle: "Proyek lain dari workbench",
        projectListIntro: "Setiap proyek dimulai dari masalah konkret, lalu dibuktikan dalam produk yang bisa digunakan.",
        repo: "Lihat source code",
        live: "Buka versi live",
        role: "Kontribusi",
        stack: "Dibangun dengan",
        previewAlt: (name: string) => `Tampilan ${name}`,
        approachTitle: "AI yang baik tetap menyisakan tangan manusia di kemudi.",
        approachIntro: "Karya ini berada di pertemuan software engineering, data, dan kecerdasan yang berguna.",
        approach: [
            { title: "Buat informasi bisa dipakai", text: "Dari PDF sampai sinyal pasar, ubah input mentah menjadi sesuatu yang bisa dikerjakan manusia." },
            { title: "Jaga batas tetap jujur", text: "Gunakan evaluasi, disclaimer, dan konteks sumber saat model berpotensi melampaui batas." },
            { title: "Bangun seluruh siklusnya", text: "Model hanya bagian dari produk. Interface, API, data, dan handoff harus berjalan bersama." },
        ],
        stackTitle: "Stack di balik permukaan.",
        stackIntro: "Alat praktis untuk membawa ide dari pertanyaan awal menjadi produk yang bisa digunakan.",
        founderTitle: "Dibangun dekat dengan pekerjaannya.",
        founderIntro: "Arsyacoo dibangun dari Yogyakarta oleh Lavina Arsya Aryanto, mahasiswa Informatika dan software engineer yang bekerja di full-stack web, data, dan AI terapan.",
        founderProfile: "Lihat profil pendiri",
        portraitAlt: "Potret Lavina Arsya Aryanto",
        contactTitle: "Punya alur kerja yang rumit?",
        contactLead: "Mari ubah menjadi sesuatu yang jelas, berguna, dan siap dipakai.",
        contactIntro: "Untuk produk AI, website, atau kolaborasi, email adalah cara tercepat untuk memulai.",
        emailCta: "Email Arsyacoo",
        whatsappCta: "WhatsApp",
        linkedinCta: "LinkedIn",
        githubCta: "GitHub",
        resumeCta: "Unduh resume",
        footer: "Arsyacoo · Lavina Arsya Aryanto · Yogyakarta",
    },
};
