import { Card } from '@/components/ui/card'
import { RocketLaunch, ChartBar, ShieldCheck, ArrowsClockwise, Cloud } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function USPSection() {
  const usps = [
    {
      icon: RocketLaunch,
      title: 'AI-Driven Efficiency',
      description: 'Automate profile updates and reduce manual overhead by 70%'
    },
    {
      icon: ChartBar,
      title: 'Insightful Analytics',
      description: 'Real-time dashboards that turn data into actionable decisions'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Security',
      description: 'ISO 27001 certified with GDPR compliance built-in'
    },
    {
      icon: ArrowsClockwise,
      title: 'Seamless Continuity',
      description: 'Knowledge persists even when team members transition'
    },
    {
      icon: Cloud,
      title: 'Cloud-Ready Access',
      description: 'Access your L&D ecosystem from anywhere, anytime'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Your Single Source of Truth for Learning Operations
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage, measure, and optimize your L&D programs in one intelligent platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="ai-glow-card group p-6 h-full bg-white/5 border-white/10">
                <usp.icon className="w-12 h-12 mb-4 text-[#2563EB] group-hover:text-[#8B5CF6] transition-colors duration-400" weight="duotone" />
                <h3 className="text-lg font-semibold mb-2 text-white">{usp.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {usp.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
