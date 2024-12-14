export function useAbout() {
    const description = 'Als angehender Absolvent der HTL Rennweg, Abteilung Medientechnik, bringe ich nicht nur eine fundierte technische Ausbildung mit, sondern auch praktische Erfahrung aus verschiedenen Projekten. Meine Leidenschaft gilt der Entwicklung moderner Webanwendungen und der kreativen Umsetzung digitaler Medieninhalte.'

    const interests = [
        'Frontend Development',
        'UI/UX Design',
        'Web Animations',
        'Backend Engineering',
        'Content Management',
        'Media Production',
        'Digital Design',
        'App Development'
    ]

    const education = [
        {
            id: 1,
            institution: 'Ella Lingens Gymnasium',
            department: 'Realgymnasium',
            year: '1. - 4. Jahrgang',
            period: '2016 - 2020',
            description: 'Mit Darstellender Geometrie oder vertiefendem naturwissenschaftlichen Unterricht'
        },
        {
            id: 2,
            institution: 'HTL Rennweg',
            department: 'Informationstechnologie, Medientechnik',
            year: '5. Jahrgang',
            period: '2020 - jetzt',
            description: 'Fokus auf Softwareentwicklung, Webentwicklung und IT-Projektmanagement'
        }
    ]

    return {
        description,
        interests,
        education
    }
}