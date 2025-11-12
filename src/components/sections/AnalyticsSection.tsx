import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function AnalyticsSection() {
  const metrics = [
    { label: 'Trainer Utilization', value: '87%', trend: '+12%', color: 'text-primary' },
    { label: 'L&D ROI', value: '3.2x', trend: '+0.8x', color: 'text-accent' },
    { label: 'Program Completion', value: '94%', trend: '+7%', color: 'text-primary' },
    { label: 'Skill Gap Coverage', value: '76%', trend: '+15%', color: 'text-accent' }
  ]

  return (
    <section id="analytics" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Turn Data into Decisions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time analytics dashboards that provide actionable insights into your L&D performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group p-6 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30">
                <div className="text-sm text-muted-foreground mb-2 transition-colors duration-300 group-hover:text-foreground">{metric.label}</div>
                <div className={`text-3xl font-bold ${metric.color} mb-1 transition-all duration-300`}>{metric.value}</div>
                <div className="text-xs text-green-600 font-medium transition-colors duration-300 group-hover:text-green-500">{metric.trend} vs last quarter</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-card to-background">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-6">Utilization Trends</h3>
                <div className="space-y-4">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => {
                    const height = 40 + Math.random() * 60
                    return (
                      <div key={month} className="flex items-center gap-4">
                        <div className="w-12 text-sm text-muted-foreground">{month}</div>
                        <div className="flex-1">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${height}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="h-8 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-end pr-3"
                          >
                            <span className="text-xs font-medium text-white">{Math.round(height)}%</span>
                          </motion.div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Top Insights</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5">
                    <div className="text-xs text-muted-foreground mb-1 transition-colors duration-300">Peak Demand</div>
                    <div className="font-semibold">Q1 & Q3</div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5">
                    <div className="text-xs text-muted-foreground mb-1 transition-colors duration-300">Most Requested Skill</div>
                    <div className="font-semibold">Leadership</div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5">
                    <div className="text-xs text-muted-foreground mb-1 transition-colors duration-300">Avg Session Duration</div>
                    <div className="font-semibold">2.5 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
