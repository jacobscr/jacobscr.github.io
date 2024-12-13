export function useAbout() {
    const description = `Als angehender Absolvent der HTL Rennweg bringe ich nicht nur eine fundierte technische Ausbildung mit, sondern auch praktische Erfahrung aus verschiedenen Projekten. Ich bin begeistert von der Entwicklung moderner Webanwendungen und strebe danach, innovative Lösungen zu schaffen, die sowohl technisch ausgereift als auch benutzerfreundlich sind.`

    const interests = [
        'Web Development',
        'UI/UX Design',
        'Cloud Computing',
        'DevOps',
        'Mobile Development',
        'Machine Learning',
        'Künstliche Intelligenz',
        'Cyber Security'
    ]

    const education = [
        {
            id: 1,
            institution: 'HTL Rennweg',
            department: 'Informationstechnologie, Medientechnik',
            year: '5. Jahrgang',
            period: '2019 - 2024',
            description: 'Fokus auf Softwareentwicklung, Webentwicklung und IT-Projektmanagement'
        }
    ]

    return {
        description,
        interests,
        education
    }
}