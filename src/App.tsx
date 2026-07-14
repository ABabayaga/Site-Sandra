import { Route, Routes } from 'react-router-dom'
import Index from './components'
import SeriePage from './components/SeriePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/series/:slug" element={<SeriePage />} />
    </Routes>
  )
}

export default App
