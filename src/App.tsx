import { Route, Routes } from 'react-router-dom'
import Index from './components'
import SeriePage from './components/SeriePage'
import EntregaPage from './components/EntregaPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/series/:slug" element={<SeriePage />} />
      <Route path="/entregas" element={<EntregaPage />} />
    </Routes>
  )
}

export default App
