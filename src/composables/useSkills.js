// composables/useSkills.js
export function useSkills() {
    const categories = {
        'Backend Development': [
            { name: 'Java & Spring Boot', level: 95, experience: '3 Jahre', description: 'Enterprise Applications, Microservices' },
            { name: 'PHP & Symfony', level: 90, experience: '2 Jahre', description: 'Web Applications, CMS' },
            { name: 'Python', level: 85, experience: '2 Jahre', description: 'Data Science, API Development' },
            { name: 'Node.js', level: 85, experience: '2 Jahre', description: 'REST APIs, Real-time Applications' },
            { name: 'Kotlin', level: 80, experience: '1 Jahr', description: 'Android Development, Server-side' }
        ],
        'Frontend Development': [
            { name: 'Vue.js & Nuxt', level: 95, experience: '3 Jahre', description: 'SPA, SSR Applications' },
            { name: 'JavaScript/TypeScript', level: 90, experience: '3 Jahre', description: 'Modern ES6+, Type Safety' },
            { name: 'HTML5 & CSS3', level: 90, experience: '4 Jahre', description: 'Responsive Design, Animations' },
            { name: 'Tailwind CSS', level: 85, experience: '2 Jahre', description: 'Utility-first CSS' },
            { name: 'WebGL & Three.js', level: 75, experience: '1 Jahr', description: '3D Visualizations' }
        ],
        'DevOps & Cloud': [
            { name: 'Docker & Kubernetes', level: 85, experience: '2 Jahre', description: 'Container Orchestration' },
            { name: 'AWS Services', level: 80, experience: '2 Jahre', description: 'EC2, S3, Lambda, ECS' },
            { name: 'CI/CD', level: 85, experience: '2 Jahre', description: 'Jenkins, GitHub Actions' },
            { name: 'Linux Systems', level: 80, experience: '3 Jahre', description: 'Ubuntu, CentOS' },
            { name: 'Monitoring', level: 75, experience: '2 Jahre', description: 'Prometheus, Grafana' }
        ]
    }

    // Tech Radar Data
    const radarData = [
        // Frontend Quadrant (0 bis π/2)
        {
            name: 'Vue.js',
            group: 'Current',
            distance: 0.9,
            angle: Math.PI * 0.125,
            description: 'Hauptframework für Frontend-Entwicklung',
            experience: '3 Jahre'
        },
        {
            name: 'TypeScript',
            group: 'Current',
            distance: 0.85,
            angle: Math.PI * 0.25,
            description: 'Statisch typisiertes JavaScript',
            experience: '2 Jahre'
        },
        {
            name: 'Svelte',
            group: 'Learning',
            distance: 0.5,
            angle: Math.PI * 0.375,
            description: 'Modernes Compiler-basiertes Framework',
            experience: '6 Monate'
        },

        // Backend Quadrant (π/2 bis π)
        {
            name: 'Spring Boot',
            group: 'Current',
            distance: 0.95,
            angle: Math.PI * 0.625,
            description: 'Java Framework für Microservices',
            experience: '3 Jahre'
        },
        {
            name: 'Symfony',
            group: 'Current',
            distance: 0.9,
            angle: Math.PI * 0.75,
            description: 'PHP Framework für Webanwendungen',
            experience: '2 Jahre'
        },
        {
            name: 'Go',
            group: 'Learning',
            distance: 0.4,
            angle: Math.PI * 0.875,
            description: 'Effiziente Systemsprache',
            experience: '3 Monate'
        },

        // DevOps Quadrant (π bis 3π/2)
        {
            name: 'Docker',
            group: 'Current',
            distance: 0.85,
            angle: Math.PI * 1.125,
            description: 'Container-Virtualisierung',
            experience: '2 Jahre'
        },
        {
            name: 'Kubernetes',
            group: 'Current',
            distance: 0.8,
            angle: Math.PI * 1.25,
            description: 'Container-Orchestrierung',
            experience: '1.5 Jahre'
        },
        {
            name: 'Terraform',
            group: 'Learning',
            distance: 0.5,
            angle: Math.PI * 1.375,
            description: 'Infrastructure as Code',
            experience: '6 Monate'
        },

        // Data Quadrant (3π/2 bis 2π)
        {
            name: 'PostgreSQL',
            group: 'Current',
            distance: 0.9,
            angle: Math.PI * 1.625,
            description: 'Relationale Datenbank',
            experience: '3 Jahre'
        },
        {
            name: 'MongoDB',
            group: 'Current',
            distance: 0.85,
            angle: Math.PI * 1.75,
            description: 'NoSQL Datenbank',
            experience: '2 Jahre'
        },
        {
            name: 'Apache Kafka',
            group: 'Learning',
            distance: 0.6,
            angle: Math.PI * 1.875,
            description: 'Distributed Streaming Platform',
            experience: '6 Monate'
        }
    ]

    return {
        categories,
        radarData
    }
}