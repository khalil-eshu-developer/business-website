import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-primary/20 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          <span className="gradient-text">Tech</span>
          <span className="text-white">Solutions</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-block bg-primary hover:bg-secondary px-5 py-2 rounded-lg font-semibold transition glow-btn">
          Get Quote
        </a>

        <button className="md:hidden text-2xl text-primary" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-dark/95 backdrop-blur-md px-6 pb-4 space-y-3 border-t border-primary/20"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block bg-primary text-center py-2 rounded-lg">
            Get Quote
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar