export const projects = [
    {
        id: 1,
        label: 'Team Project',
        title: 'NestMatch',
        description: 'An AI-powered roommate-matching platform that pairs people based on lifestyle compatibility. Built as our graduation project at AXSOS Academy, using Django, Google Gemini, and Google Maps.',
        slides: [{
            laptop: '/images/nestmatch-laptop.png',
            tablet: '/images/nestmatch-tablet.png',
            phone: '/images/nestmatch-phone.png',
        },
        {
            laptop: '/images/nestmatch_2-laptop.png',
            phone: '/images/nestmatch_2-phone.png',
        },
        {
            laptop: '/images/nestmatch_rooms-laptop.png',
            phone: '/images/nestmatch_rooms-phone.png',
        },
        {
            laptop: '/images/nestmatch_faq-laptop.png',
            tablet: '/images/nestmatch_contact-tablet.png',
            phone: '/images/nestmatch_contact-phone.png',
        }
    ],
        tech: ['Django', 'Python', 'SQLite'],
        github: 'https://github.com/Mostafa-Aljazar/NestMatch',
        live: 'http://13.51.156.107.nip.io/',
    },
    {
        id: 2,
        label: 'Full-Stack Django',
        title: 'SoulSpace Mood Tracker',
        description: 'A mood-tracking web app with daily check-ins, micro-journaling, and personal analytics. Users explore their calendar, streaks, and history to understand how their mood changes over time.',
        slides: [ {
                laptop: '/images/SoulSpace-laptop.png',
                tablet: '/images/SoulSpace-tablet.png',
                phone: '/images/SoulSpace-phone.png',
        },
        {
                laptop: '/images/SoulSpace-dashboard-laptop.png',
                tablet: '/images/SoulSpace-dashboard-tablet.png',
                phone: '/images/SoulSpace-dashboard-phone.png',
        },
    {
                laptop: '/images/SoulSpace-check-in-laptop.png',
                tablet: '/images/SoulSpace-check-in-tablet.png',
                phone: '/images/SoulSpace-check-in-phone.png',
        }

            
        ],
        tech: ['Django', 'Python', 'MYSQL'],
        github: 'https://github.com/NoorShurrab/Soul_Space_Mood_Tracker',
        live: '',
    },
];