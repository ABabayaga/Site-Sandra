import { Route, Routes } from 'react-router-dom'
import Index from './components'
import SeriePage from './components/SeriePage'
import EntregaPage from './components/EntregaPage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/series/:slug" element={<SeriePage />} />
      <Route path="/entregas" element={<EntregaPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
