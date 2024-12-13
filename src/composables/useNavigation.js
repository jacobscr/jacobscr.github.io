import { ref } from 'vue'

export function useNavigation() {
    const items = [
        { id: 'about', label: 'Über Mich', href: '#about' },
        { id: 'skills', label: 'Skills', href: '#skills' },
        { id: 'projects', label: 'Projekte', href: '#projects' },
        { id: 'contact', label: 'Kontakt', href: '#contact' }
    ]

    const isMenuOpen = ref(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        const offset = 100 // Navbar height + padding
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })

        isMenuOpen.value = false
    }

    return {
        items,
        isMenuOpen,
        scrollToSection
    }
}