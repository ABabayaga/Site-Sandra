import { Route, Routes } from 'react-router-dom'
import Index from './components'
import SeriePage from './components/SeriePage'
import EntregaPage from './components/EntregaPage'
import ArtistaPage from './components/ArtistaPage'
import NotFoundPage from './components/NotFoundPage'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/series/:slug" element={<SeriePage />} />
        <Route path="/entregas" element={<EntregaPage />} />
        <Route path="/artistas" element={<ArtistaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
