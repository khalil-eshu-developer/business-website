import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const API_URL = 'https://business-website-server.onrender.com/api/leads'

const AdminLeads = () => {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const res = await axios.get(API_URL)
      setLeads(res.data.leads)
      setError('')
    } catch (err) {
      setError('❌ Failed to load leads: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const deleteLead = async (id) => {
    if (!window.confirm('Delete this lead?')) return
    try {
      await axios.delete(`${API_URL}/${id}`)
      fetchLeads()
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${API_URL}/${id}`, { status })
      fetchLeads()
    } catch (err) {
      alert('Update failed: ' + err.message)
    }
  }

  const getStatusColor = (status) => {
    if (status === 'new') return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    if (status === 'contacted') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    if (status === 'converted') return 'bg-green-500/20 text-green-400 border-green-500/30'
    return 'bg-gray-500/20 text-gray-400'
  }

  return (
    <div className="min-h-screen bg-dark text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-bold mb-2">
            📋 <span className="gradient-text">Admin Panel</span>
          </h1>
          <p className="text-gray-400">All contact form leads ({leads.length} total)</p>
        </motion.div>

        <div className="flex gap-4 mb-6">
          <button onClick={fetchLeads} className="bg-primary hover:bg-secondary px-6 py-2 rounded-lg font-semibold transition">
            🔄 Refresh
          </button>
          <a href="/" className="glass border border-primary/30 hover:border-primary px-6 py-2 rounded-lg font-semibold transition">
            ← Back to Site
          </a>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6">{error}</div>
        )}

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <p className="text-gray-400 mt-4">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass p-12 rounded-2xl text-center">
            <p className="text-6xl mb-4">📭</p>
            <h3 className="text-2xl font-bold mb-2">No leads yet</h3>
            <p className="text-gray-400">Jab koi contact form bharega, tab leads yahan dikhengi.</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-2xl overflow-hidden border border-primary/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-primary/20">
                  <tr>
                    <th className="text-left p-4 font-semibold">Name</th>
                    <th className="text-left p-4 font-semibold">Email</th>
                    <th className="text-left p-4 font-semibold">Phone</th>
                    <th className="text-left p-4 font-semibold">Service</th>
                    <th className="text-left p-4 font-semibold">Message</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <motion.tr
                      key={lead._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-primary/10 hover:bg-primary/5 transition"
                    >
                      <td className="p-4 font-semibold">{lead.name}</td>
                      <td className="p-4 text-sm">
                        <a href={`mailto:${lead.email}`} className="text-primary hover:underline">{lead.email}</a>
                      </td>
                      <td className="p-4 text-sm">
                        <a href={`tel:${lead.phone}`} className="text-primary hover:underline">{lead.phone}</a>
                      </td>
                      <td className="p-4 text-sm">
                        <span className="glass px-2 py-1 rounded text-xs border border-primary/20">{lead.service}</span>
                      </td>
                      <td className="p-4 text-sm text-gray-400 max-w-xs">{lead.message}</td>
                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead._id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs border cursor-pointer ${getStatusColor(lead.status)} bg-transparent`}
                        >
                          <option value="new" className="bg-dark">New</option>
                          <option value="contacted" className="bg-dark">Contacted</option>
                          <option value="converted" className="bg-dark">Converted</option>
                        </select>
                      </td>
                      <td className="p-4 text-xs text-gray-400">
                        {new Date(lead.createdAt).toLocaleDateString()}<br />
                        {new Date(lead.createdAt).toLocaleTimeString()}
                      </td>
                      <td className="p-4">
                        <button onClick={() => deleteLead(lead._id)} className="text-red-400 hover:text-red-300 transition" title="Delete">
                          🗑️
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="glass p-6 rounded-xl border border-blue-500/20">
            <p className="text-3xl font-bold text-blue-400">{leads.filter((l) => l.status === 'new').length}</p>
            <p className="text-gray-400 text-sm mt-1">🔵 New Leads</p>
          </div>
          <div className="glass p-6 rounded-xl border border-yellow-500/20">
            <p className="text-3xl font-bold text-yellow-400">{leads.filter((l) => l.status === 'contacted').length}</p>
            <p className="text-gray-400 text-sm mt-1">🟡 Contacted</p>
          </div>
          <div className="glass p-6 rounded-xl border border-green-500/20">
            <p className="text-3xl font-bold text-green-400">{leads.filter((l) => l.status === 'converted').length}</p>
            <p className="text-gray-400 text-sm mt-1">🟢 Converted</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLeads