export const projectsData = [
    {
        id: 1,
        projectName: 'Veriport',
        projectDesc:
            'Lab-testing compliance platform with MRO review workflows, document management, and multi-provider lab integrations.',
        problem:
            'MRO teams need lab orders, provider results, and chain-of-custody (CCF) documents from multiple labs brought together into one reviewable, auditable workflow.',
        built:
            'A two-service Django + Vue platform: the core app with document management, OCR-assisted CCF QA, dashboards, and reporting, plus a lab-ordering service integrating Quest and CRL via SOAP/XML APIs and webhooks — deployed on AWS ECS with Celery workers.',
        challenge:
            'Reliably parsing provider webhook XML and routing results and CCF documents from the lab-ordering service back into Veriport’s review workflows while keeping data consistent across two systems.',
        tags: ['Django', 'Vue.js', 'Celery', 'AWS'],
        demo: 'https://dashboard.veriport.app/',
        demoLabel: 'dashboard.veriport.app',
        image: 'https://res.cloudinary.com/dqtkhw88b/image/upload/v1781870558/Screenshot_from_2026-06-19_17-01-58_qqubvf.png',
    },
    {
        id: 2,
        projectName: 'PageOptimizer Pro',
        projectDesc:
            'SEO content optimization platform that analyzes top-ranking pages and tells you exactly how to improve yours.',
        problem:
            'SEO teams need data-driven, page-level guidance — the keywords, structure, and schema that top-ranking competitors use — instead of guesswork.',
        built:
            'Built and maintained features across the Flask REST API and Vue SPA — keyword insight and clustering, schema generation, AI content tooling, and async competitor-analysis pipelines on Celery and Redis, with Stripe and PayPal subscription billing.',
        challenge:
            'Running heavy competitor-analysis and NLP workloads asynchronously so reports stay responsive, while keeping a complex subscriptions-and-credits system in sync with Stripe and PayPal.',
        tags: ['Flask', 'Vue.js', 'Celery', 'Stripe'],
        demo: 'https://www.pageoptimizer.pro/',
        demoLabel: 'pageoptimizer.pro',
        image: 'https://res.cloudinary.com/dqtkhw88b/image/upload/v1781870559/Screenshot_from_2026-06-19_17-02-11_lz6fph.png',
    },
    {
        id: 3,
        projectName: 'EnergyGigs',
        projectDesc:
            'Marketplace that matches energy-sector professionals to projects.',
        problem:
            'Energy companies struggle to find and allocate skilled professionals for project-based work.',
        built:
            'A full-stack marketplace with a React + Redux Toolkit frontend and Django REST Framework APIs, deployed with Docker.',
        challenge:
            'Designing the search and matching flows between professionals and projects, and keeping environments consistent with containerised deployments.',
        tags: ['React', 'DRF', 'Redux Toolkit', 'Docker'],
        demo: 'https://energygigs.com/',
        demoLabel: 'energygigs.com',
        image: 'https://res.cloudinary.com/dqtkhw88b/image/upload/v1745946624/Screenshot_from_2025-04-29_22-10-06_uddyxf.png',
    },
    {
        id: 4,
        projectName: 'Omnia Resourcing',
        projectDesc:
            'Employee records and bulk communication platform for staffing agencies.',
        problem:
            'Managing employee records across accounts and distributing weekly work details to large groups of staff was slow and manual.',
        built:
            'A React + DRF platform with bulk CSV uploads for users and weekly work details, plus bulk email and WhatsApp delivery with per-employee PDF attachments.',
        challenge:
            'Processing large CSV imports and high-volume message fan-out without blocking the app — handled with Celery workers and Pandas-based validation.',
        tags: ['React', 'DRF', 'Pandas', 'Celery'],
        demo: 'http://18.130.83.142:8080/login',
        demoLabel: 'View live demo',
        image: 'https://res.cloudinary.com/dqtkhw88b/image/upload/v1781871799/Screenshot_from_2026-06-19_17-19-39_t14i3m.png',
    },
    {
        id: 5,
        projectName: 'CIDB Malaysia — QLASSIC',
        projectDesc:
            'National quality assessment system for building construction works in Malaysia.',
        problem:
            'CIDB Malaysia needed a standardised digital way to assess and score the quality of workmanship on building construction projects against the QLASSIC standard.',
        built:
            'A Django-based assessment platform covering assessment workflows, scoring, and reporting, with interactive amCharts dashboards for results.',
        challenge:
            'Translating a formal construction quality standard into application logic and reports that assessors can rely on.',
        tags: ['Django', 'jQuery', 'Bootstrap', 'amCharts'],
        demo: 'https://qlassic.cidb.gov.my/',
        demoLabel: 'qlassic.cidb.gov.my',
        image: 'https://res.cloudinary.com/dqtkhw88b/image/upload/v1745946831/Screenshot_from_2025-04-29_22-13-36_o3l04l.png',
    },
    {
        id: 6,
        projectName: 'SheetPros',
        projectDesc:
            'Smartsheet automation tool for sharing data across connected sheets.',
        problem:
            'Teams working across multiple Smartsheet sheets had no clean way to keep data in related sheets synchronised automatically.',
        built:
            'An Anvil-based Python tool that shares data between associated sheets via webhooks, manages webhook configuration, and handles subscriptions with Stripe.',
        challenge:
            'Keeping webhook-driven syncs reliable so connected sheets stay consistent as updates flow between them.',
        tags: ['Python', 'Anvil', 'Pandas', 'Stripe'],
        demo: 'https://ddvalidator.com/',
        demoLabel: 'ddvalidator.com',
        image: 'https://res.cloudinary.com/dqtkhw88b/image/upload/v1745946922/Screenshot_from_2025-04-29_22-15-06_fcap3e.png',
    },
]
