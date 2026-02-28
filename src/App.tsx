import { useEffect, useState } from 'react'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import ScrollProgress from './components/ScrollProgress'
import SiteFooter from './components/SiteFooter'

const SECTION_IDS = ['hero', 'work', 'projects', 'contact'] as const
const ENABLE_WEBBRAIN = false // Temporarily disabled

const App = () => {
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

  return (
    <div className="noise-overlay relative min-h-screen bg-gradient-to-br from-brand-cream via-brand-white to-brand-stone/40 text-brand-black">
      <ScrollProgress />
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main id="main-content">
        <Hero />
        {/* Subtle divider */}
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
      <SiteFooter />
    </div>
  )
}

export default App
