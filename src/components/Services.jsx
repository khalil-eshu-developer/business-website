import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaFacebookF, 
  FaGoogle, 
  FaMapMarkerAlt, 
  FaMobileAlt, 
  FaSearch, 
  FaPalette, 
  FaChartLine 
} from 'react-icons/fa'

const services = [
  { 
    icon: <FaCode />, 
    title: 'Web Development', 
    desc: 'Modern, fast & responsive websites using MERN stack.' 
  },
  { 
    icon: <FaFacebookF />, 
    title: 'Meta Ads', 
    desc: 'Facebook & Instagram ads for awareness, leads & sales.' 
  },
  { 
    icon: <FaGoogle />, 
    title: 'Google Ads', 
    desc: 'Search, Display, YouTube & Shopping PPC campaigns.' 
  },
  { 
    icon: <FaMapMarkerAlt />, 
    title: 'Google My Business', 
    desc: 'Local SEO & GMB optimization to attract local customers.' 
  },
  { 
    icon: <FaMobileAlt />, 
    title: 'Mobile Apps', 
    desc: 'Cross-platform mobile applications for iOS & Android.' 
  },
  { 
    icon: <FaSearch />, 
    title: 'SEO Optimization', 
    desc: 'Rank higher on Google and get more organic traffic.' 
  },
  { 
    icon: <FaPalette />, 
    title: 'UI/UX Design', 
    desc: 'Beautiful & user-friendly designs that convert visitors.' 
  },
  { 
    icon: <FaChartLine />, 
    title: 'Analytics & Reporting', 
    desc: 'Track your growth with detailed analytics & reports.' 
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our <span className="gradient-text">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          We provide complete digital solutions to help your business grow online.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-xl card-hover group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-4xl text-primary mb-4 group-hover:text-secondary transition"
              >
                {s.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services