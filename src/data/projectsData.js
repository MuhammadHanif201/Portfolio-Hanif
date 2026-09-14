import vaihok from '../assets/png/project-vaihok.jpg'
import bemindepower from '../assets/png/project-bemindepower.webp'
import reservationpoints from '../assets/png/project-reservationpoints.jpg'
import nomadicmart from '../assets/png/project-nomadicmart.jpg'
import pjow from '../assets/png/project-pjow.jpg'
import pjowdash from '../assets/png/project-pjowdash.jpg'
import setterai from '../assets/png/project-setterai.jpg'
import novii from '../assets/png/project-novii.webp'
import jewels from '../assets/png/project-jewels.webp'
import goffix from '../assets/png/project-goffix.webp'
import dost from '../assets/png/project-4dost.webp'

export const projectsData = [
    {
        id: 1,
        projectName: 'Be-MindePower',
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
    {
        id: 6,
        projectName: 'Vaihok',
        projectDesc:
            'All-in-one super app bringing private communication, voice & video calls, payments, wallets, services, and communities together in one platform.',
        problem:
            'Users juggle separate apps for messaging, calls, payments, services, and communities — Vaihok needed to unify them all in one secure, consistent mobile experience.',
        built:
            'A multi-module Flutter super app with end-to-end encrypted 1:1 and group chats, voice and video calls, secure payments and wallet functionality, a services marketplace, media and file sharing, location sharing, communities, channels, and cross-device sync.',
        challenge:
            'Maintaining a scalable, consistent Flutter experience across significantly different feature areas — real-time communication, financial features, and service workflows — within the same application.',
        tags: ['Flutter', 'WebSockets', 'Payments', 'REST APIs'],
        demo: 'https://play.google.com/store/apps/details?id=app.vaihok.vaihoksuperapp.staging',
        demoLabel: 'on Google Play',
        image: vaihok,
    },
    {
        id: 7,
        projectName: 'ReservationPoints',
        projectDesc:
            'Visa travel-document app where travellers order onward and dummy flight tickets, hotel reservations, travel plans, and visa cover letters — and track each order to delivery.',
        problem:
            'Travellers need the paperwork airlines and visa offices ask for, and the existing web experience had to work screen by screen on small mobile displays.',
        built:
            'The entire mobile front end in Flutter — animated home with service picker, product pages with pricing tiers, reviews and FAQs, order tracking with a status stepper and document downloads, contact form, searchable FAQ hub, and a blog with rich article rendering. Behind it, a shared REST client and 17 API services covering products, pricing, coupons, Stripe payment intents, file uploads, order submissions, reviews, blog, FAQ, currency, and a CMS content endpoint so copy updates without a new build.',
        challenge:
            'Reproducing the full web experience on small screens while keeping the code reusable — GetX state, multi-currency conversion with auto-detection, and a percentage-based responsive layout on strict design tokens.',
        tags: ['Flutter', 'GetX', 'Stripe', 'REST APIs'],
        demo: 'https://test.reservationpoints.com/',
        demoLabel: 'the website',
        image: reservationpoints,
    },
    {
        id: 8,
        projectName: 'Nomadic Mart',
        projectDesc:
            'Visa and travel-document app where travellers browse visas, check if they qualify, apply, pay and track their application — plus order flight itineraries, hotel reservations, travel plans and cover letters.',
        problem:
            'Travellers needed one place to complete the whole visa journey from their phone, matching the company web platform exactly — same API contracts, pricing maths, validation and error handling.',
        built:
            'The Flutter mobile companion to the web platform: visa catalogue and detail pages, an eligibility checker driven by backend-served questions, the application and checkout flow with a booking status tracker, four document-order services with file upload and quantity-based pricing, plus blog, pricing, FAQ and legal pages — wired to the REST backend for bookings, orders, eligibility, contact and newsletter.',
        challenge:
            'Payment happens outside the app via Stripe hosted checkout in an external browser, so the booking screen polls until the webhook confirms it — and phone numbers validate against libphonenumber rules using the traveller nationality, mirroring web validation.',
        tags: ['Flutter', 'Stripe', 'REST APIs', 'File Uploads'],
        demo: 'https://nomadicmart.com/',
        demoLabel: 'the website',
        image: nomadicmart,
    },
    {
        id: 9,
        projectName: 'Private Jet One Ways',
        projectDesc:
            'Flyer booking app for one-way private jet flights — search routes, get a live price quote, sign the agreement and book the seat from your phone.',
        problem:
            'Booking a private jet meant a manual charter enquiry and phone calls; flyers needed self-service search, quoting, booking and trip management on mobile.',
        built:
            'A Flutter app for iOS and Android with GetX and a layered core/data/presentation structure over the REST API shared with the web platform — flight search with airport autocomplete, nearby-airport results, date and jet-size filters and a US route map; flight details with amenities and pricing breakdown; multi-step checkout with passenger and co-passenger details, luggage, in-app signing of the flyer agreement PDF and payment; Stripe cards and wire transfer; a bookings area with documents, passenger lists, cancellations, refunds, airport changes, flight swaps and operator messaging; plus profile, saved passengers, price estimates and OTP, Google and Apple sign-in.',
        challenge:
            'The booking logic — expiring quotes, held aircraft, partial refunds and swap approvals all change what a flyer can do next, so every state had to be mapped carefully to keep the interface accurate and avoid invalid bookings.',
        tags: ['Flutter', 'GetX', 'Stripe', 'REST APIs'],
        demo: 'https://privatejetoneways.com/',
        demoLabel: 'the website',
        image: pjow,
    },
    {
        id: 10,
        projectName: 'PJOW Dashboard',
        projectDesc:
            'Operations dashboard for a private jet charter platform — one Flutter codebase running on web and mobile for platform admins, charter operators, brokers and accountants.',
        problem:
            'Four different teams needed to run flights, clients and payments in one place, each with their own navigation and permission rules — and it had to match the existing web product exactly.',
        built:
            'The full Flutter side: GetX state management, a REST service layer over the platform API, and reusable tables, dialogs and forms. Modules cover flights (create/edit, requested, pending, listed, booked, upcoming and cancelled views, delays, aircraft swaps, cancellations and refunds), fleet and multi-leg itineraries with airport-local timezones, booking details with passenger management, in-app group chat, notes, audit history and post-flight feedback, finances (commissions, operator payouts, invoices, wire transactions, holdings ledger, tax review), and admin (company, broker and flyer management, document checks, PDF contracts with e-signature, email template and static page editors, audit logs and master search).',
        challenge:
            'Keeping one large role-based app consistent across every permission set while matching the web product behaviour — plus Stripe payments and Connect payouts, broker subscription tiers, TOTP two-factor auth with QR setup, and an FL3XX flight-ops integration.',
        tags: ['Flutter', 'GetX', 'Stripe Connect', 'Flutter Web'],
        demo: 'https://privatejetoneways.com/',
        demoLabel: 'the platform',
        image: pjowdash,
    },
    {
        id: 11,
        projectName: 'Setter AI',
        projectDesc:
            'AI appointment setter that follows up new leads across WhatsApp, SMS, Messenger, Instagram, LinkedIn and web chat — and books meetings inside the conversation, with a live AI voice demo.',
        problem:
            'Businesses lose leads to slow follow-up, and prospects want to hear the AI setter work before committing — so the product needed a marketing experience with a real, live voice demo built in.',
        built:
            'The complete cross-platform Flutter front end as one responsive long-scroll experience: header with Solutions dropdown and slide-in drawer, AI agent playground, value calculator with custom sliders, animated integrations marquee (Zapier, Google Calendar, Calendly, Acuity, Meta), YouTube videos, a 4-step how-it-works flow, booking-channel cards, testimonials, FAQ accordion, outbound WhatsApp demo form and newsletter footer.',
        challenge:
            'The live voice demo — a visitor picks an agent (Jessica, Lily or Eric) and a use case, the app requests a session token over HTTP, joins a LiveKit room via WebRTC and opens a call screen with mic toggling, runtime permissions and clean disconnect — all paired with a polished marketing layout that adapts from phone to desktop.',
        tags: ['Flutter', 'GetX', 'LiveKit WebRTC', 'Design System'],
        demo: 'https://www.trysetter.com/',
        demoLabel: 'the website',
        image: setterai,
    },
]
