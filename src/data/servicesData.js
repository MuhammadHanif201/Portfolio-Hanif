import { FiSmartphone, FiShoppingCart, FiCalendar, FiCpu, FiUploadCloud } from 'react-icons/fi'

export const servicesData = [
    {
        id: 1,
        title: 'Custom Flutter App Development',
        description:
            'Custom Android & iOS apps built with Flutter and Dart — professional, responsive UI/UX with clean, maintainable code and smooth performance on both platforms.',
        icon: <FiSmartphone aria-hidden='true' />,
    },
    {
        id: 2,
        title: 'Business & Startup MVPs',
        description:
            'Fast, scalable MVPs for startups, entrepreneurs, and businesses — from idea to a production-ready app that validates your product quickly.',
        icon: <FiCpu aria-hidden='true' />,
    },
    {
        id: 3,
        title: 'eCommerce & Marketplace Apps',
        description:
            'eCommerce and marketplace apps with payment gateways, subscriptions, push notifications, and real-time features your customers rely on.',
        icon: <FiShoppingCart aria-hidden='true' />,
    },
    {
        id: 4,
        title: 'Booking, Travel & Service Apps',
        description:
            'Booking & appointment, travel & transportation, healthcare, chat, social, and AI-powered apps — with maps, chat, and third-party integrations.',
        icon: <FiCalendar aria-hidden='true' />,
    },
    {
        id: 5,
        title: 'Firebase, APIs & Store Deployment',
        description:
            'Firebase & REST API integration, testing, debugging & optimization, source code delivery, and Google Play Store & Apple App Store deployment support.',
        icon: <FiUploadCloud aria-hidden='true' />,
    },
]

export const capabilitiesData = servicesData
