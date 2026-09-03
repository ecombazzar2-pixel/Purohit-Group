import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Company from './pages/Company'
import Contact from './pages/Contact'
import './styles/global.css'

function NotFound() {
  return (
    <section className="container" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '8rem 1.5rem' }}>
      <div>
        <span className="eyebrow">404 / PAGE NOT FOUND</span>
        <h1 style={{ margin: '1rem 0' }}>This page has moved.</h1>
        <p style={{ maxWidth: 560, margin: '0 auto 2rem' }}>The link you opened is not available. Return to the group homepage and choose a company again.</p>
        <Link className="btn primary" to="/">Back to home</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies/:slug" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}
