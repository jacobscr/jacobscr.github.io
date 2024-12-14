// composables/useSkills.js
export function useSkills() {
    const categories = {
        'Backend Development': [
            {
                name: 'Java & Spring',
                experience: '3 Jahre Erfahrung',
                description: 'Entwicklung skalierbarer Microservices und Enterprise-Anwendungen',
                technologies: ['Spring Boot', 'Spring Security', 'JPA/Hibernate', 'JUnit', 'Maven'],
                highlights: [
                    'Implementierung einer Microservice-Architektur für E-Commerce Platform',
                    'Entwicklung RESTful APIs mit über 100k täglichen Anfragen',
                    'Integration von OAuth2 und JWT-basierter Authentifizierung'
                ]
            },
            {
                name: 'PHP & Symfony',
                experience: '2 Jahre Erfahrung',
                description: 'Backend-Entwicklung für Webanwendungen und CMS',
                technologies: ['Symfony', 'Doctrine', 'Composer', 'PHPUnit', 'MySQL'],
                highlights: [
                    'Custom CMS-Entwicklung für mehrere Unternehmenswebsites',
                    'Implementation von Payment-Gateway Integrationen',
                    'Optimierung der Datenbankperformance'
                ]
            }
        ],
        'Frontend Development': [
            {
                name: 'Vue.js Ecosystem',
                experience: '3 Jahre Erfahrung',
                description: 'Single Page Applications und Progressive Web Apps',
                technologies: ['Vue 3', 'Nuxt.js', 'Vuex/Pinia', 'Vue Router', 'TypeScript'],
                highlights: [
                    'Entwicklung einer PWA mit Offline-Funktionalität',
                    'Implementation von Real-time Features mit WebSocket',
                    'Performance-Optimierung durch Code-Splitting und Lazy Loading'
                ]
            },
            {
                name: 'Modern Frontend Stack',
                experience: '3 Jahre Erfahrung',
                description: 'Moderne Webentwicklung mit Fokus auf Performance und UX',
                technologies: ['JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Webpack', 'Vite'],
                highlights: [
                    'Entwicklung responsiver und barrierefreier Interfaces',
                    'Implementation von CI/CD-Pipelines für Frontend-Deployments',
                    'Optimierung von Core Web Vitals'
                ]
            }
        ],
        'DevOps & Tools': [
            {
                name: 'Container & Orchestrierung',
                experience: '2 Jahre Erfahrung',
                description: 'Container-basierte Entwicklung und Deployment',
                technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'AWS'],
                highlights: [
                    'Setup von Kubernetes-Clustern für Microservices',
                    'Implementierung von Auto-Scaling Lösungen',
                    'Monitoring und Logging mit ELK Stack'
                ]
            },
            {
                name: 'Datenbanken & Caching',
                experience: '3 Jahre Erfahrung',
                description: 'Design und Optimierung von Datenbanklösungen',
                technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch'],
                highlights: [
                    'Datenbankdesign für hochskalierbare Anwendungen',
                    'Implementation von Caching-Strategien',
                    'Performance-Optimierung von Datenbankabfragen'
                ]
            }
        ]
    }

    return {
        categories
    }
}