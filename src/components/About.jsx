import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const stats = [
  { number: '100+', label: 'Projects Delivered' },
  { number: '50+', label: 'Happy Clients' },
  { number: '1+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
]

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why <span className="gradient-text">Choose Us?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a team of passionate developers and marketers helping businesses 
              succeed in the digital world. With 1+ years of experience, we deliver 
              results that matter — from stunning websites to high-converting ad campaigns.
            </p>

            <ul className="space-y-3 text-gray-300 mb-6">
              {[
                'Expert team of developers & marketers',
                'On-time project delivery',
                'Affordable pricing packages',
                'Free consultation & support',
                '100% client satisfaction guarantee',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <a href="#contact" className="inline-block bg-primary hover:bg-secondary px-6 py-3 rounded-lg font-semibold transition glow-btn">
              Start Your Project
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-xl text-center card-hover"
              >
                <h3 className="text-3xl font-bold gradient-text">{s.number}</h3>
                <p className="text-gray-400 text-sm mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About