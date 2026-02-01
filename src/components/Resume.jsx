import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap } from 'lucide-react'

const experience = [
  { role: 'Senior Designer', company: 'Creative Studio', year: '2022 – Present' },
  { role: 'UI Designer', company: 'Digital Agency', year: '2020 – 2022' },
  { role: 'Junior Designer', company: 'Startup Inc', year: '2018 – 2020' },
]

const education = [
  { degree: 'Currently in a Computer Engineering Bachelor', school: ' University of Ottawa', year: 'current' },
  { degree: 'Highschool diploma', school: 'Bakhita', year: '2023' },
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-rose-800">
            Resume
          </h2>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all shadow-lg shadow-rose-300/50 w-fit"
          >
            <Download size={20} />
            Download PDF
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Briefcase className="text-rose-600" size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-rose-800">
                Experience
              </h3>
            </div>
            <ul className="space-y-6">
              {experience.map((item, i) => (
                <li key={i} className="border-l-2 border-rose-300 pl-6 py-2">
                  <p className="font-semibold text-rose-800">{item.role}</p>
                  <p className="text-rose-600">{item.company}</p>
                  <p className="text-sm text-rose-500">{item.year}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blush-100 rounded-lg">
                <GraduationCap className="text-blush-600" size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-rose-800">
                Education
              </h3>
            </div>
            <ul className="space-y-6">
              {education.map((item, i) => (
                <li key={i} className="border-l-2 border-blush-300 pl-6 py-2">
                  <p className="font-semibold text-rose-800">{item.degree}</p>
                  <p className="text-rose-600">{item.school}</p>
                  <p className="text-sm text-rose-500">{item.year}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="mt-8 text-center text-rose-600/80 text-sm">
          Place your resume.pdf in the <code className="bg-rose-100 px-2 py-1 rounded">public</code> folder, or update the link above.
        </p>
      </div>
    </section>
  )
}
