import { motion } from 'framer-motion'
import { Github, Linkedin, Mail,  } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Penina05', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/penina-godeme/', label: 'LinkedIn' },

  { icon: Mail, href: 'mailto:peninagodeme@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-rose-900/5 border-t border-rose-200/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 hover:text-rose-700 transition-all hover:-translate-y-1"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-rose-600/80 font-medium">Your Name</p>
            <p className="text-rose-500 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
