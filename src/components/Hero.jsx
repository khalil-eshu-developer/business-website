import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg mb-3 flex items-center gap-2"
          >
            <span className="w-8 h-0.5 bg-primary"></span>
            🚀 Welcome to TechSolutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            We Build <span className="gradient-text">Digital Solutions</span> For Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-6 max-w-lg"
          >
            From web development to digital marketing — we help businesses grow with 
            modern technology and proven strategies.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2 mb-8 text-gray-300"
          >
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> 100+ Projects Delivered
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> 50+ Happy Clients
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> 24/7 Support Available
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#contact" className="bg-primary hover:bg-secondary px-6 py-3 rounded-lg font-semibold transition glow-btn">
              Get Free Consultation
            </a>
            <a href="#services" className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition">
              Our Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-md h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/30 flex items-center justify-center text-8xl pulse-ring"
          >
            💼
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full text-sm border border-primary/30"
          >
            ⚡ Fast Delivery
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full text-sm border border-primary/30"
          >
            🏆 5+ Years Experience
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero