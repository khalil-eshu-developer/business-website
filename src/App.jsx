import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminLeads from './components/AdminLeads'

function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/admin/leads" element={<AdminLeads />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App