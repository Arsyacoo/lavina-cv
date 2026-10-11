# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personal-branding site for Lavina Arsya Aryanto. Audiences are mixed and equally weighted: recruiters and HR screening for internships, potential freelance clients looking for someone to build a web or AI product, and peers or lecturers who meet Lavina's name and look him up. Visitors arrive from the CV, LinkedIn, or GitHub and usually decide in under a minute whether to reach out.

## Product Purpose

Present who Lavina is, what he has built, and how to contact him, so a visitor leaves knowing his focus (practical web, data, and AI products) and with an easy path to email, WhatsApp, or the resume PDF. Success is a visitor who contacts him or downloads the resume.

## Positioning

An Informatics undergraduate who turns academic ideas into functional, documented, user-focused products across full-stack web, data, and applied AI.

## Operating Context

- Live at https://www.arsyalavina.web.id, deployed from the `master` branch.
- Bilingual: English at `/` and Bahasa Indonesia at `/id`, each server-rendered with its own lang, canonical and hreflang; the EN/ID toggle links between them. Copy comes from the two CVs (English ATS resume and Indonesian ATS CV).
- Resume PDF served from `public/Lavina-Arsya-Resume.pdf`.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind CSS 4, lucide-react. Static, single page.
- Content (all from the CVs, do not invent beyond them):
  - Education: Bachelor of Informatics, Universitas Amikom Yogyakarta, 2023 to present. Software Engineering (RPL), SMK Muhammadiyah 1 Yogyakarta, 2020 to 2023.
  - Work: Software Engineer Intern, PT Javan Cipta Solusi, November 2025 to present (confirmed by the user in chat, not yet on the CV; the description is a general summary the user asked for, pending their own wording). Web Developer Intern, Universitas Jenderal Achmad Yani (UNJAYA), 2021 to 2022.
  - Projects: Sholatku (Full-Stack Developer, confirmed by the user; prayer times and Quran PWA, from the GitHub repo README; live at https://sholatku-staging.vercel.app), PDF Insight AI (Full-Stack), AI-Powered Healthcare Assistant (Frontend), Digital Transaction Fraud Detection (ML Developer), IDX Monitor (Full-Stack), Rental Iqra (Full-Stack). Sholatku, PDF Insight AI and Healthcare Assistant are 2026; Fraud Detection, IDX Monitor and Rental Iqra are 2025 (corrected by the user; the CVs still say 2026).
  - Skills: Languages, Frontend, Backend, Database, AI/ML & Data, Tools as listed in the CVs.
- Contacts: arsyalavina@gmail.com, WhatsApp +62 895 3405 25328, github.com/Arsyacoo, linkedin.com/in/arsyacoo.

## Evidence on Hand

- Project screenshots: `public/sholatku-light.webp` (light-mode screenshot supplied by the user), `public/ai-healthcare.webp`, `public/pdf-insight.webp`, `public/fraud-detection.webp`.
- `public/idx-monitor.webp` (captured from the locally running app) and `public/rental-iqra.webp` (supplied by the user, low resolution 624x326). Every project now has a screenshot.
- Portrait: `public/portrait.webp` (formal headshot supplied by the user, shown in full colour). Raster provenance notes live in `.impeccable/provenance/`.
- No testimonials, clients, metrics, or awards exist. Never fabricate them.

## Product Principles

- Show the work, not adjectives: every claim traces to a project or CV line.
- Contact in one step from anywhere on the page.
- Equal care for both languages; neither reads as a machine translation.
- Calm and simple over busy: the user explicitly asked for "kalem tapi simpel" with colour.

## Brand Commitments

- Name: Lavina Arsya Aryanto. Title: Full-Stack Developer & AI/ML Enthusiast.
- User asked for a calm, simple, colourful (not monochrome) site that does not read as AI-generated. Previous cream + pastel + serif-italic attempt was rejected.
