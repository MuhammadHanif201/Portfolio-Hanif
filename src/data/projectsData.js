import bemindepower from '../assets/png/project-bemindepower.webp'
import novii from '../assets/png/project-novii.webp'
import jewels from '../assets/png/project-jewels.webp'
import goffix from '../assets/png/project-goffix.webp'
import dost from '../assets/png/project-4dost.webp'

export const projectsData = [
    {
        id: 1,
        projectName: 'BeMindePower',
        projectDesc:
            'Multi-module Flutter platform combining chat, finance, music, and marketplace experiences in one unified mobile app — 1K+ downloads and growing.',
        problem:
            'Bringing significantly different digital services — social chat, finance, music, and a marketplace — into a single mobile app without fragmenting the user experience.',
        built:
            'A multi-module Flutter application with conversational and social features, finance functionality, music experiences, and marketplace workflows — responsive UI, API-driven data, real-time features, and smooth navigation between modules.',
        challenge:
            'Maintaining a consistent, scalable application structure while supporting very different feature areas within the same Flutter codebase.',
        tags: ['Flutter', 'Firebase', 'WebSockets', 'REST APIs'],
        demo: 'https://play.google.com/store/apps/details?id=chat.bemindepower.bmpchat',
        demoLabel: 'on Google Play',
        image: bemindepower,
    },
    {
        id: 2,
        projectName: 'Novii',
        projectDesc:
            'Self-discovery and life-alignment app that helps users understand where they are in life, what matters to them, and what direction to take.',
        problem:
            'Users needed a calm, guided way to reflect on their life, priorities, and goals — through assessments that feel simple and engaging rather than overwhelming.',
        built:
            'An interactive assessment experience in Flutter — guided questions, ratings and selections, personal insights, and progress-based flows with consistent navigation, published on both Android and iOS.',
        challenge:
            'Keeping the assessment flow simple and engaging while handling many questions, responses, and progress states across the app.',
        tags: ['Flutter', 'Dart', 'Android', 'iOS'],
        demo: 'https://play.google.com/store/apps/details?id=com.anonymous.novii',
        demoLabel: 'on Google Play',
        image: novii,
    },
    {
        id: 3,
        projectName: 'Jewels Airport Transfers',
        projectDesc:
            'Airport transfer booking app for reliable, professional transportation to and from all major UK airports.',
        problem:
            'Travelers needed a simple mobile way to book airport transfers, calculate fares, choose suitable vehicles, and receive instant booking confirmations.',
        built:
            'A Flutter booking app with airport transfer flows, fare calculation, multiple vehicle options (saloon, executive, MPV), meet & greet services, and real-time booking information — published on Google Play and the App Store.',
        challenge:
            'Keeping the booking process simple and reliable for travelers while integrating backend services and real-time booking data.',
        tags: ['Flutter', 'Provider', 'Firebase', 'REST APIs'],
        demo: 'https://play.google.com/store/apps/details?id=com.tiecodes.jat',
        demoLabel: 'on Google Play',
        image: jewels,
    },
    {
        id: 4,
        projectName: 'Goffix',
        projectDesc:
            'On-demand multi-service app connecting users with trusted local service providers for everyday services and deliveries.',
        problem:
            'Users needed one place to find trusted local providers — mechanics, electricians, couriers, cleaning, grocery delivery, pet care, and more — and manage requests end to end.',
        built:
            'A Flutter services platform with category-based discovery, service posting, provider selection, in-app chat, ratings, service history, and location-based search across 200+ service categories.',
        challenge:
            'Handling many service categories and distinct user journeys while keeping one consistent, easy-to-use experience across the application.',
        tags: ['Flutter', 'GetX', 'REST APIs', 'Google Maps'],
        demo: 'https://play.google.com/store/apps/details?id=com.fewnix.goffix',
        demoLabel: 'on Google Play',
        image: goffix,
    },
    {
        id: 5,
        projectName: '4DOST',
        projectDesc:
            'Local business discovery app for restaurants, deals, coupons, events, services, and food delivery in your city.',
        problem:
            'Users needed an easy way to find nearby businesses, restaurants, deals, and events — with reviews, ratings, and map locations all in one app.',
        built:
            'A Flutter discovery experience with location-based search, category filters, business details, reviews and ratings, deals and coupons, local events, reservations, and food delivery flows.',
        challenge:
            'Supporting many categories and user journeys — discovery, deals, events, delivery — while keeping the experience consistent, fast, and easy to use.',
        tags: ['Flutter', 'Google Maps', 'Firebase', 'REST APIs'],
        demo: 'https://play.google.com/store/apps/details?id=com.msr.dost',
        demoLabel: 'on Google Play',
        image: dost,
    },
]
