export function useProjects() {
    const projects = [
        {
            id: 1,
            title: 'KLUGes Management - Verwaltungstool für Nachhilfeunternehmen',
            description: 'KLUGes Management ist eine webbasierte Applikation zur Verwaltung von Mitarbeitern, Kunden und Terminen des Nachhilfeunternehmens Lernen ist KLUG. Die Diplomarbeit umfasst Tools wie Wochenpläne, Anwesenheitsverfolgung und einen Lehrmaterialordner, um eine effiziente Zusammenarbeit zu gewährleisten.',
            image: 'klug.png',
            technologies: ['Symfony', 'Twig', 'Vue.js', 'Tailwind', 'MySQL'],
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com/KLUGes-Management/kluges-management',
        },
        {
            id: 2,
            title: 'Unlock the Enigma - Eine digitale Schnitzeljagd',
            description: 'Unlock the Enigma ist eine kryptographische Schnitzeljagd an unserer Schule, bei der Teams mit Rätseln wie Verschlüsselungen, Steganografie und versteckten digitalen Hinweisen konfrontiert werden. Ziel ist es, kreatives Denken, Teamarbeit und technische Problemlösungsfähigkeiten zu fördern.',
            image: 'enigma.png',
            technologies: ['Symfony', 'Twig', 'JavaScript', 'Tailwind'],
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com/TimonAME/UnlockTheEnigma',
        },
        {
            id: 3,
            title: 'Planning Poker für agiles Projektmanagement',
            description: 'Das Projekt Planning Poker ist eine digitale Lösung zur agilen Aufwandsschätzung, die im Rahmen eines Schulprojekts an der HTL Rennweg entwickelt wurde, mit Fokus auf Benutzerfreundlichkeit und Scrum-Prinzipien.',
            image: 'plapo.png',
            technologies: ['Nuxt.js', 'Spring Boot', 'Tailwind', 'Restful API', 'SQLite'],
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com/1FailX1/Planning-Poker',
        },
    ]

    return {
        projects
    }
}