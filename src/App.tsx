import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import SiteFooter from './components/SiteFooter'
import BlogListPage from './pages/BlogListPage'
import BlogPostPage from './pages/BlogPostPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className="noise-overlay relative min-h-screen bg-gradient-to-br from-brand-cream via-brand-white to-brand-stone/40 text-brand-black">
      <ScrollProgress />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App
