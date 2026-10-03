import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923112422822?text=Hi%20TechSolutions%2C%20I%20need%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 transition"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl text-white" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
    </motion.a>
  )
}

export default WhatsAppButton