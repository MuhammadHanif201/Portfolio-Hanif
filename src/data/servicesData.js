import { FiServer, FiCloud, FiLayers, FiCpu, FiZap } from 'react-icons/fi'

export const servicesData = [
    {
        id: 1,
        title: 'Backend Platforms & APIs',
        description:
            'REST APIs and service backends with Django, DRF, and FastAPI — authentication, permissions, documentation, and testing included.',
        icon: <FiServer aria-hidden='true' />,
    },
    {
        id: 2,
        title: 'Cloud Deployment & DevOps',
        description:
            'Dockerised deployments on AWS with Nginx, CI/CD pipelines, and environment management from development to production.',
        icon: <FiCloud aria-hidden='true' />,
    },
    {
        id: 3,
        title: 'Full-Stack Product Development',
        description:
            'Complete features across React frontends and Python backends — from data model and API design to the user interface.',
        icon: <FiLayers aria-hidden='true' />,
    },
    {
        id: 4,
        title: 'AI-Assisted Product Features',
        description:
            'Generative AI chatbots and LLM-powered features using LangChain and vector databases, integrated into real products.',
        icon: <FiCpu aria-hidden='true' />,
    },
    {
        id: 5,
        title: 'Integrations & Automation',
        description:
            'Third-party API integrations, Stripe payments, bulk messaging, and background automation with Celery and Redis.',
        icon: <FiZap aria-hidden='true' />,
    },
]

export const capabilitiesData = servicesData
