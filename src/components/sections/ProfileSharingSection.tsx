import { Card } from '@/components/ui/card'
import { Lock, Link as LinkIcon, Eye } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function ProfileSharingSection() {
  const features = [
    {
      icon: Eye,
      title: 'Hide/Show Fields',
      description: 'Control visibility'
    },
    {
      icon: LinkIcon,
      title: 'Share Live Link',
      description: 'Instant sharing'
    },
    {
      icon: Lock,
      title: 'Client Web-View',
      description: 'Secure access'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Dynamic Profile Sharing & Control
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Your data, your control. Share exactly what you want, when you want it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="ai-glow-card group p-6 text-center bg-white/5 border-white/10">
                    <feature.icon className="w-8 h-8 mx-auto mb-3 text-[#2563EB] group-hover:text-[#8B5CF6] transition-colors duration-400" weight="duotone" />
                    <h3 className="font-semibold text-sm mb-1 text-white">{feature.title}</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-8 shadow-xl backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-medium text-white">Full Name</span>
                  <Eye className="w-5 h-5 text-[#2563EB] transition-colors duration-300" weight="fill" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-medium text-white">Email Address</span>
                  <Eye className="w-5 h-5 text-gray-500 hover:text-gray-400 transition-colors duration-300" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-medium text-white">Phone Number</span>
                  <Eye className="w-5 h-5 text-[#2563EB] transition-colors duration-300" weight="fill" />
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-medium">Certifications</span>
                  <Eye className="w-5 h-5 text-primary transition-colors duration-300" weight="fill" />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <div className="flex-1 bg-primary/10 text-primary text-center py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-all duration-300 cursor-pointer">
                  Generate Link
                </div>
                <div className="flex-1 bg-accent/10 text-accent text-center py-2 rounded-md text-sm font-medium hover:bg-accent/20 transition-all duration-300 cursor-pointer">
                  Share Profile
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
