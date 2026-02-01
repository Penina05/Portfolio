import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Project One',
    description: 'A beautiful web app showcasing modern design principles and smooth interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: '🖼️',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'An elegant e-commerce experience with intuitive navigation and delightful micro-interactions.',
    tags: ['Next.js', 'Commerce', 'UI'],
    image: '🛍️',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'A creative portfolio site that tells a story through thoughtful design and animation.',
    tags: ['Design', 'Animation', 'Web'],
    image: '✨',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-semibold text-rose-800 text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-rose-100/50 border border-rose-100 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-blush-100 to-rose-100 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-rose-800 mb-2 group-hover:text-rose-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-rose-700/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-rose-600 hover:text-rose-500 font-medium text-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-rose-600 hover:text-rose-500 font-medium text-sm transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
