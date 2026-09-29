import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a complete range of digital services including Meta Ads (Facebook & Instagram), Google Ads (PPC), SEO Optimization, Social Media Marketing, Google My Business Setup, Content Marketing, Email Marketing, Graphic Design, and full-stack web development using MERN Stack.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on the project scope. A simple website takes 1-2 weeks, while a full-stack MERN application can take 3-4 weeks. Digital marketing campaigns are typically set up within 3-5 days. We always provide a detailed timeline before starting.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes! We work with clients worldwide and are available for remote work across all time zones — Pakistan, UAE, USA, UK, and beyond. Communication is done via WhatsApp, Email, or video calls as per your preference.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'We typically work with a 50% advance and 50% upon completion for projects. For ongoing marketing campaigns, monthly retainers are preferred. We accept payments via PayPal, Wise, Bank Transfer, and local Pakistani payment methods.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes! All projects include 30 days of free bug fixing and support after delivery. For digital marketing campaigns, we provide monthly reports and ongoing optimization. Extended support packages are also available.',
  },
  {
    question: 'Can you help grow my local business?',
    answer:
      'Absolutely! We specialize in local SEO and Google My Business optimization. We have successfully helped local businesses in Islamabad and Rawalpindi increase their visibility, walk-in customers, and online presence through targeted Meta Ads campaigns.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Got questions? Here are the most common ones
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl border border-primary/20 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary flex-shrink-0"
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ