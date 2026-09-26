import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const API_URL = 'https://business-website-server.onrender.com/api/leads'
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess('')
    setError('')

    try {
      const res = await axios.post(API_URL, form)
      setSuccess('✅ ' + res.data.message)
      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: '',
      })
      setTimeout(() => setSuccess(''), 5000)
    } catch (err) {
      setError('❌ ' + (err.response?.data?.message || 'Something went wrong'))
      setTimeout(() => setError(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Have a project in mind? Fill the form below and we'll get back to you within 24 hours.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-2xl border border-primary/20 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full bg-slate-900 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full bg-slate-900 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className="w-full bg-slate-900 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary outline-none"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary outline-none"
            >
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Mobile Apps</option>
              <option>SEO Optimization</option>
              <option>UI/UX Design</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your project *"
            required
            className="w-full bg-slate-900 border border-primary/20 rounded-lg px-4 py-3 focus:border-primary outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed py-3 rounded-lg font-semibold transition glow-btn"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>

          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center font-semibold"
            >
              {success}
            </motion.p>
          )}

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-center font-semibold"
            >
              {error}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact