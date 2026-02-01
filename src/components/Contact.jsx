import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission - replace with your backend or form service
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-semibold text-rose-800 text-center mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-rose-600 text-center mb-12"
        >
          I'd love to hear from you. Send me a message!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-rose-800 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 outline-none transition-all bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-rose-800 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 outline-none transition-all bg-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-rose-800 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 outline-none transition-all resize-none bg-white"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-rose-300/50 hover:shadow-rose-400/50"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : status === 'sent' ? (
              'Message Sent! ✓'
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </motion.form>

        <p className="mt-6 text-center text-sm text-rose-500">
          For a working form, connect to a service like Formspree, Netlify Forms, or your own backend.
        </p>
      </div>
    </section>
  )
}
