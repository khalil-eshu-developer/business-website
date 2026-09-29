import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE - Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-primary/30 p-6 shadow-2xl shadow-primary/20"
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/20">
              <div>
                <p className="text-xs text-gray-400">Campaign Performance</p>
                <p className="text-lg font-bold text-white">This Month</p>
              </div>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                ↑ 42%
              </span>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-primary/10">
                <p className="text-xs text-gray-400 mb-1">Total Reach</p>
                <p className="text-2xl font-bold text-primary">125K</p>
                <p className="text-xs text-green-400">↑ 42.5%</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-primary/10">
                <p className="text-xs text-gray-400 mb-1">Conversions</p>
                <p className="text-2xl font-bold text-secondary">1.2K</p>
                <p className="text-xs text-green-400">↑ 67.2%</p>
              </div>
            </div>

            {/* Chart Bars */}
            <div className="mb-6">
              <p className="text-xs text-gray-400 mb-3">Weekly Performance</p>
              <div className="flex items-end justify-between gap-2 h-24">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-md"
                  />
                ))}
              </div>
            </div>

            {/* Dashboard Footer */}
            <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-primary/20">
              <span>📊 Google Analytics</span>
              <span>Meta Ads</span>
            </div>
          </motion.div>

          {/* Floating Badge 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full text-sm border border-primary/30"
          >
            ⚡ Fast Delivery
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full text-sm border border-primary/30"
          >
            🏆 1+ Years Experience
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero