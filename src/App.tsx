import { Routes, Route } from 'react-router-dom'
import { I18nProvider } from './i18n'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import SiteFooter from './components/SiteFooter'
import MetaTags from './components/MetaTags'
import LanguageRedirect from './components/LanguageRedirect'
import BlogListPage from './pages/BlogListPage'
import BlogPostPage from './pages/BlogPostPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <I18nProvider>
      <div className="noise-overlay relative min-h-screen bg-gradient-to-br from-brand-cream via-brand-white to-brand-stone/40 text-brand-black">
        <MetaTags />
        <LanguageRedirect />
        <ScrollProgress />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/:lang" element={<HomePage />} />
          <Route path="/:lang/blog" element={<BlogListPage />} />
          <Route path="/:lang/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </I18nProvider>
  )
}

export default App
