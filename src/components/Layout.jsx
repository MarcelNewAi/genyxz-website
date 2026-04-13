import { useLocation } from 'react-router-dom'
import useScrollReveal from '../utils/useScrollReveal'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
  const location = useLocation()

  useScrollReveal(location.pathname)

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
