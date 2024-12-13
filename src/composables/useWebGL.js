import * as THREE from 'three'
import { gsap } from 'gsap'

export function useWebGL() {
    let scene, camera, renderer, particles

    const initWebGL = (canvas) => {
        // Scene Setup
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 1500

        const positions = new Float32Array(particlesCount * 3)
        const colors = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
            colors[i] = Math.random()
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8
        })

        particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        camera.position.z = 3

        // Animation
        const animate = () => {
            requestAnimationFrame(animate)

            particles.rotation.x += 0.0001
            particles.rotation.y += 0.0002

            renderer.render(scene, camera)
        }

        animate()

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }

    const destroyWebGL = () => {
        if (renderer) {
            renderer.dispose()
            scene.remove(particles)
            particles.geometry.dispose()
            particles.material.dispose()
        }
    }

    return {
        initWebGL,
        destroyWebGL
    }
}