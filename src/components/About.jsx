import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-semibold text-rose-800 text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-rose-200/50 bg-gradient-to-br from-blush-200 to-rose-200 flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="Your photo"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="text-6xl text-rose-400">✨</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-lg text-rose-900/90 leading-relaxed mb-4">
              I'm a creative professional passionate about building beautiful, user-centered digital experiences.
              With a keen eye for design and a love for clean code, I bring ideas to life through thoughtful
              interfaces and engaging interactions.
            </p>
            <p className="text-lg text-rose-900/90 leading-relaxed mb-6">
              When I'm not designing or coding, you'll find me exploring new trends, sipping bubble tea, or
              getting inspired by art and nature. I believe great design should feel effortless — elegant
              yet approachable.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Design', 'Development', 'UI/UX', 'Creative Direction'].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
