import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const mountRef = useRef()

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Core wireframe icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.42, 0)
    const core = new THREE.LineSegments(
      new THREE.EdgesGeometry(icoGeo),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 })
    )

    const system = new THREE.Group()
    system.position.set(2.6, 0.2, 0)
    system.add(core)

    // Orbital rings
    function makeRing(radius, tiltX, tiltZ, opacity) {
      const g = new THREE.Group()
      g.rotation.x = tiltX
      g.rotation.z = tiltZ
      g.add(new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.006, 8, 90),
        new THREE.MeshBasicMaterial({ color: 0xa1a1aa, transparent: true, opacity })
      ))
      const orbiter = new THREE.Group()
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.055, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
      )
      dot.position.x = radius
      orbiter.add(dot)
      g.add(orbiter)
      return { group: g, orbiter }
    }

    const rings = [
      { ...makeRing(1.1,  0,              0,            0.30), speed: 0.42 },
      { ...makeRing(1.55, Math.PI / 3,    Math.PI / 6,  0.20), speed: 0.27 },
      { ...makeRing(2.0,  Math.PI / 1.8, -Math.PI / 7,  0.14), speed: 0.16 },
    ]
    rings.forEach(r => system.add(r.group))
    scene.add(system)

    // Particle field
    const count = 320
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0x71717a, size: 0.022, transparent: true, opacity: 0.55, sizeAttenuation: true })
    )
    scene.add(particles)

    // Animate
    let id
    const clock = new THREE.Clock()
    function animate() {
      id = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      core.rotation.y = t * 0.35
      core.rotation.x = t * 0.18
      rings.forEach(r => { r.orbiter.rotation.z = t * r.speed })
      particles.rotation.y = t * 0.006
      renderer.render(scene, camera)
    }
    animate()

    function onResize() {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
}
