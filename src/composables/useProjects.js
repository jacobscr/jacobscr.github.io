export function useProjects() {
    const projects = [
        {
            id: 1,
            title: 'KI-gestützte E-Learning Plattform',
            description: 'Eine moderne Lernplattform mit adaptiven Lernpfaden, die KI nutzt, um personalisierte Lernerfahrungen zu schaffen. Das System analysiert das Lernverhalten und passt Inhalte dynamisch an.',
            image: '/api/placeholder/800/600',
            technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
            demoUrl: 'https://elearning.example.com',
            githubUrl: 'https://github.com/example/elearning',
            highlights: [
                'Microservices-Architektur mit Spring Boot',
                'Real-time Kollaboration via WebSockets',
                'KI-basierte Lernempfehlungen',
                'Adaptive Testumgebung'
            ],
            role: 'Lead Developer',
            duration: '6 Monate'
        },
        {
            id: 2,
            title: 'Enterprise Resource Management System',
            description: 'Ein umfassendes ERP-System für mittelständische Unternehmen mit Modulen für Personalwesen, Lagerverwaltung und Buchhaltung. Besonderer Fokus lag auf der Benutzerfreundlichkeit und Systemintegration.',
            image: '/api/placeholder/800/600',
            technologies: ['Nuxt.js', 'Spring Framework', 'Oracle DB', 'Redis', 'Kubernetes'],
            demoUrl: 'https://erp.example.com',
            githubUrl: 'https://github.com/example/erp',
            highlights: [
                'Modulare Frontend-Architektur',
                'OAuth2 Integration',
                'Real-time Reporting',
                'Multi-Mandanten-Fähigkeit'
            ],
            role: 'Fullstack Developer',
            duration: '8 Monate'
        },
        {
            id: 3,
            title: 'IoT Dashboard & Analytics',
            description: 'Ein skalierbares Dashboard für IoT-Geräte mit Echtzeit-Datenvisualisierung und prädiktiver Wartung. Verarbeitet Daten von tausenden Sensoren in Echtzeit.',
            image: '/api/placeholder/800/600',
            technologies: ['Vue.js', 'Node.js', 'InfluxDB', 'MQTT', 'AWS'],
            demoUrl: 'https://iot.example.com',
            githubUrl: 'https://github.com/example/iot-dashboard',
            highlights: [
                'Echtzeitverarbeitung mit Apache Kafka',
                'Grafana Integration',
                'Predictive Maintenance Algorithmen',
                'Skalierbare Cloud-Architektur'
            ],
            role: 'IoT Solution Architect',
            duration: '5 Monate'
        },
        {
            id: 4,
            title: 'Blockchain-basiertes Supply Chain System',
            description: 'Eine dezentrale Anwendung zur Verfolgung von Lieferketten mit Smart Contracts und transparenter Nachverfolgung von Waren.',
            image: '/api/placeholder/800/600',
            technologies: ['Vue.js', 'Solidity', 'Web3.js', 'Node.js', 'MongoDB'],
            demoUrl: 'https://supply.example.com',
            githubUrl: 'https://github.com/example/supply-chain',
            highlights: [
                'Ethereum Smart Contracts',
                'IPFS Integration',
                'QR-Code Tracking',
                'Mobile-First Design'
            ],
            role: 'Blockchain Developer',
            duration: '7 Monate'
        },
        {
            id: 5,
            title: 'Medical Image Analysis Platform',
            description: 'Eine Plattform für die KI-gestützte Analyse medizinischer Bilder mit Fokus auf Früherkennung von Anomalien. Integriert modernste Deep Learning Modelle.',
            image: '/api/placeholder/800/600',
            technologies: ['Vue.js', 'Python', 'PyTorch', 'FastAPI', 'Azure'],
            demoUrl: 'https://medical.example.com',
            githubUrl: 'https://github.com/example/medical-imaging',
            highlights: [
                'DICOM Format Support',
                'GPU-beschleunigte Analyse',
                'HL7 FHIR Integration',
                'Datenschutzkonformes Design'
            ],
            role: 'ML Engineer',
            duration: '9 Monate'
        }
    ]

    return {
        projects
    }
}