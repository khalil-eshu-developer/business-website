import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Umair Awan',
    company: 'Tahiri Mobile Shop',
    location: 'Islamabad, Pakistan',
    feedback:
      'Khalil ne meri mobile shop ke liye Meta Ads campaign chalaya. Bohat jaldi results aaye — local visibility badhi aur zyada customers aane lage. Highly recommended!',
    rating: 5,
    initials: 'UA',
  },
  {
    name: 'Ahmed Khan',
    company: 'Real Estate Business',
    location: 'Islamabad, Pakistan',
    feedback:
      'Excellent digital marketing services! Khalil managed our Meta Ads campaign and generated high-quality property leads. Very professional and result-oriented.',
    rating: 5,
    initials: 'AK',
  },
  {
    name: 'Sara Ali',
    company: 'E-commerce Store',
    location: 'Dubai, UAE',
    feedback:
      'Working with Khalil was a great experience. He handled our Google Ads and SEO perfectly. Our website traffic increased significantly within 2 months.',
    rating: 5,
    initials: 'SA',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Client <span className="gradient-text">Testimonials</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          What our clients say about working with us
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-2xl border border-primary/20 card-hover relative"
            >
              <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.feedback}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.company}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Want to be our next happy client?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full font-semibold transition glow-btn"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials