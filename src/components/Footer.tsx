import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { LinkedinLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import { toast } from 'sonner'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Successfully subscribed to updates!')
    setEmail('')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="bg-[oklch(0.10_0.02_250)] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex flex-col gap-2 mb-4">
              <span className="text-2xl font-bold ai-gradient-text">
                Savoira
              </span>
              <span className="text-xs text-gray-400">AI-Powered L&D Operations</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI-powered platform for intelligent L&D operations. Simplify, scale, and measure your learning programs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ai-agents')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Agents
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('analytics')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  Analytics
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Karya Board
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Use
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  Compliance
                </button>
              </li>
            </ul>

            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/20">
                <LinkedinLogo className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" weight="fill" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/20">
                <TwitterLogo className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" weight="fill" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/20">
                <YoutubeLogo className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" weight="fill" />
              </button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Savoira. All rights reserved.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Subscribe to updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 w-full md:w-64 focus:border-primary focus:ring-primary transition-all duration-200 focus:bg-white/10"
            />
            <Button 
              type="submit" 
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  )
}
