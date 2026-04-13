import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Ambasadorji from './pages/Ambasadorji'
import Domov from './pages/Domov'
import KajDelamo from './pages/KajDelamo'
import Kontakt from './pages/Kontakt'
import NotFound from './pages/NotFound'
import ONas from './pages/ONas'
import Partnerji from './pages/Partnerji'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Domov />} path="/" />
        <Route element={<ONas />} path="/o-nas" />
        <Route element={<KajDelamo />} path="/kaj-delamo" />
        <Route element={<Partnerji />} path="/partnerji" />
        <Route element={<Ambasadorji />} path="/ambasadorji" />
        <Route element={<Kontakt />} path="/kontakt" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Layout>
  )
}
