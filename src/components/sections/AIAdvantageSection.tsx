import { Card } from '@/components/ui/card'
import { TrendUp, Bell, Broom, ChartLineUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function AIAdvantageSection() {
  const advantages = [
    {
      icon: TrendUp,
      title: 'Predictive Utilization',
      description: 'Forecast demand and optimize trainer allocation before bottlenecks occur'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Context-aware alerts that surface the right information at the right time'
    },
    {
      icon: Broom,
      title: 'Automated Cleanup',
      description: 'Intelligent data hygiene that keeps profiles accurate without manual effort'
    },
    {
      icon: ChartLineUp,
      title: 'Pattern Recognition',
      description: 'Discover trends and insights hidden in your L&D operations data'
    }
  ]

  return (
    <section id="ai-agents" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            AI That Learns How Your Organization Learns
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Intelligent agents that continuously improve your L&D operations through machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="ai-glow-card group p-6 h-full bg-white/5 backdrop-blur-sm border-white/10">
                <advantage.icon className="w-10 h-10 mb-4 text-[#8B5CF6] group-hover:text-[#22D3EE] transition-colors duration-400" weight="duotone" />
                <h3 className="text-lg font-semibold mb-2 text-white">{advantage.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {advantage.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
