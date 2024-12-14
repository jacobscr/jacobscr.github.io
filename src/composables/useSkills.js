// composables/useSkills.js
export function useSkills() {
    const categories = {
        'Frontend & Web Development': [
            {
                name: 'Modern Web Development',
                experience: '5 Jahre HTL-Ausbildung',
                description: 'Entwicklung moderner, responsiver Webanwendungen',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Tailwind CSS'],
                highlights: [
                    'Single Page Applications mit Vue.js/Nuxt',
                    'Responsive & Mobile-First Design',
                    'Web Performance Optimierung',
                    'Progressive Web Apps'
                ]
            },
            {
                name: 'Web Design & UX',
                experience: 'Medientechnische Ausbildung',
                description: 'User Interface Design und User Experience Optimierung',
                technologies: ['UI/UX Design', 'Figma', 'Adobe XD', 'CSS Animations'],
                highlights: [
                    'Benutzerfreundliche Interface-Gestaltung',
                    'Barrierefreie Webentwicklung',
                    'Design System Development',
                    'Interaktive Prototypen'
                ]
            }
        ],
        'Backend & Datenbanken': [
            {
                name: 'Backend Development',
                experience: 'Fortgeschrittene Praxis',
                description: 'Entwicklung skalierbarer Server-Anwendungen',
                technologies: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'RESTful APIs'],
                highlights: [
                    'Microservices-Architektur',
                    'API-Design und Entwicklung',
                    'Authentifizierung & Autorisierung',
                    'Server-Side Rendering'
                ]
            },
            {
                name: 'Datenbanken & System-Integration',
                experience: 'Praxiserfahrung',
                description: 'Datenmodellierung und Systemintegration',
                technologies: ['MySQL', 'PostgreSQL', 'Docker', 'Git', 'CI/CD'],
                highlights: [
                    'Datenbankdesign und -optimierung',
                    'Container-Virtualisierung',
                    'Versionskontrolle',
                    'Automatisierte Deployments'
                ]
            }
        ],
        'Medientechnik & Design': [
            {
                name: 'Medienproduktion',
                experience: 'HTL Medientechnik',
                description: 'Digitale Medienbearbeitung und -produktion',
                technologies: ['Adobe Creative Suite', 'Video-Editing', 'Audio-Bearbeitung', '3D-Modellierung'],
                highlights: [
                    'Video Post-Production',
                    'Audio-Nachbearbeitung',
                    'Medienformate und Kodierung',
                    'Grundlagen der 3D-Modellierung'
                ]
            },
            {
                name: 'CMS & Content Management',
                experience: 'Praktische Erfahrung',
                description: 'Content Management und Web Publishing',
                technologies: ['WordPress', 'Headless CMS', 'SEO', 'Content Strategy'],
                highlights: [
                    'Theme & Plugin Entwicklung',
                    'Content-Migration',
                    'Suchmaschinenoptimierung',
                    'Web Analytics'
                ]
            }
        ]
    }

    return {
        categories
    }
}