import { useEffect, useState } from 'react'
import ContactSection from '../components/ContactSection'
import ExperienceSection from '../components/ExperienceSection'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import { NavigationContext } from '../context/NavigationContext'

const SECTION_IDS = ['hero', 'work', 'projects', 'contact'] as const
const ENABLE_WEBBRAIN = false

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<(typeof SECTION_IDS)[number]>('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as (typeof SECTION_IDS)[number])
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-25% 0px -50% 0px'
      }
    )

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!ENABLE_WEBBRAIN) return

    const initWidget = () => window.WebBrain?.init({ userId: 'AhRuxnjQn5WVbWDt8EZDWgU98RM2' })

    if (window.WebBrain) {
      initWidget()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://dist.webbrain.app/webbrain-widget.min.js'
    script.async = true
    script.onload = initWidget
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id)
    if (!target) {
      return
    }

    const header = document.getElementById('site-header')
    const headerHeight = header?.getBoundingClientRect().height ?? 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16

    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  // Handle hash navigation from other pages (e.g. /blog → /#projects)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      // Delay to allow DOM to render
      setTimeout(() => handleNavigate(hash), 100)
    }
  }, [])

  return (
    <NavigationContext.Provider value={{ activeSection, handleNavigate }}>
      <main id="main-content">
        <Hero />
        <div className="mx-auto h-px w-11/12 max-w-6xl bg-gradient-to-r from-transparent via-brand-black/10 to-transparent" />
        <div className="bg-brand-cream/40">
          <ExperienceSection />
        </div>
        <div className="mx-auto h-px w-11/12 max-w-6xl bg-gradient-to-r from-transparent via-brand-black/10 to-transparent" />
        <ProjectsSection />
        <div className="mx-auto h-px w-11/12 max-w-6xl bg-gradient-to-r from-transparent via-brand-black/10 to-transparent" />
        <div className="bg-brand-cream/40">
          <ContactSection />
        </div>
      </main>
    </NavigationContext.Provider>
  )
}

export default HomePage
