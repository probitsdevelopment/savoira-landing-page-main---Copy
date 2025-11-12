import { Card } from '@/components/ui/card'
import { 
  CalendarCheck, 
  Gauge, 
  FileText, 
  Brain, 
  SquaresFour, 
  TrendUp 
} from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function CoreFeaturesSection() {
  const features = [
    {
      icon: SquaresFour,
      title: 'Availability Matrix',
      description: 'Real-time view of trainer availability across your entire organization'
    },
    {
      icon: CalendarCheck,
      title: 'Two-Way Calendar Sync',
      description: 'Seamless integration with Google Calendar, Outlook, and more'
    },
    {
      icon: FileText,
      title: 'Profile Freshness Reports',
      description: 'Automated alerts when profiles need updates or verification'
    },
    {
      icon: Brain,
      title: 'AI Matching Engine',
      description: 'Intelligent trainer-to-program matching based on skills and availability'
    },
    {
      icon: Gauge,
      title: 'Unified Dashboard',
      description: 'Single pane of glass for all L&D operations and metrics'
    },
    {
      icon: TrendUp,
      title: 'Predictive Utilization',
      description: 'Forecast trainer capacity and optimize resource allocation'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Core Features Overview
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools designed to streamline every aspect of your L&D operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="ai-glow-card group p-6 h-full bg-gradient-to-br from-white/10 to-white/5 border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-bl-full transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
                <div className="relative">
                  <feature.icon className="w-10 h-10 mb-4 text-[#2563EB] group-hover:text-[#8B5CF6] transition-colors duration-400" weight="duotone" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
