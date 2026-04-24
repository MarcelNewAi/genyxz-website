import { useLocation } from 'react-router-dom'
import useScrollReveal from '../utils/useScrollReveal'
import CustomScrollbar from './CustomScrollbar'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import StickyCTA from './StickyCTA'

export default function Layout({ children }) {
  const location = useLocation()
  const stickyCtaRoutes = ['/', '/o-nas', '/kaj-delamo', '/partnerji', '/ambasadorji', '/kontakt']
  const shouldRenderStickyCTA = stickyCtaRoutes.includes(location.pathname)

  useScrollReveal(location.pathname)

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="site-main">{children}</main>
      {shouldRenderStickyCTA ? <StickyCTA key={location.pathname} /> : null}
      <Footer />
      <CustomScrollbar />
    </div>
  )
}
