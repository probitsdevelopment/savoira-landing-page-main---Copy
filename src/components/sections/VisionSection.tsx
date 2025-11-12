import { motion } from 'framer-motion'
import { Heart } from '@phosphor-icons/react'

export function VisionSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(101,84,192,0.1),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8 hover:bg-accent/20 transition-all duration-300">
            <Heart className="w-8 h-8 text-accent transition-colors duration-300" weight="duotone" />
          </div>

          <blockquote className="text-3xl md:text-4xl font-semibold text-foreground mb-8 leading-relaxed">
            "Even when people move on, your knowledge shouldn't."
          </blockquote>

          <div className="prose prose-lg mx-auto text-muted-foreground max-w-2xl">
            <p className="mb-4">
              At Savoira, we believe that learning and development is fundamentally human. Our AI doesn't replace 
              the human touch—it amplifies it.
            </p>
            <p className="mb-4">
              We built Savoira because we saw talented L&D teams drowning in spreadsheets, chasing down 
              availability updates, and losing institutional knowledge every time someone moved roles.
            </p>
            <p>
              Our vision is simple: give L&D leaders their time back to focus on what matters most—developing 
              people, not managing data.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group cursor-default"
            >
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-400">500+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Organizations Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group cursor-default"
            >
              <div className="text-3xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-400">50K+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Trainers Empowered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group cursor-default"
            >
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-400">1M+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Learning Hours Delivered</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
