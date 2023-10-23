import { BrowserRouter, Routes, Route } from "react-router-dom"
import Agency from './pages/Agency'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Agency />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    </BrowserRouter>    
  )
}

export default App