import { motion } from 'framer-motion'
import { Sparkle } from '@phosphor-icons/react'
import dashboardImg from '@/assets/images/dashboard.png'

export function DashboardSection() {
  return (
    <section id="dashboard" className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkle className="w-4 h-4 text-primary" weight="fill" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Live Dashboard Preview</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your L&D Command Center
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Monitor trainers, track sessions, and manage your entire learning operation from one intelligent dashboard
          </p>
        </motion.div>

        <div className="relative perspective-[2000px]">
          <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4 bg-gray-700/50 rounded-md px-3 py-1.5 text-xs text-gray-400 font-mono">
                  https://savoira.app/dashboard
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[oklch(0.12_0.02_250)] to-[oklch(0.10_0.02_250)]">
                <motion.div
                  className="relative aspect-[16/10] w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={dashboardImg} 
                    alt="Savoira Dashboard - L&D Command Center" 
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>

            <div className="relative h-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-b-2xl shadow-xl">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm italic">
            ✨ This is a representation of how Savoira manages your L&D operations in real-time
          </p>
        </motion.div>
      </div>
    </section>
  )
}
