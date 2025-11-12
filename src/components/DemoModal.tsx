import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.company) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    toast.success('Demo request received! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[oklch(0.18_0.02_250)] border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Book a Demo</DialogTitle>
          <DialogDescription className="text-gray-400">
            See how Savoira can transform your L&D operations. Fill out the form below and we'll get in touch.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Full Name <span className="text-red-400">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary transition-all duration-200 focus:bg-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Work Email <span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary transition-all duration-200 focus:bg-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-300">
              Company <span className="text-red-400">*</span>
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Acme Corp"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary transition-all duration-200 focus:bg-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your L&D challenges..."
              rows={4}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary transition-all duration-200 focus:bg-white/10"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button" 
              onClick={() => onOpenChange(false)} 
              className="ghost-button flex-1 py-2 rounded-lg font-medium border-2 border-white/30"
            >
              <span className="text-white font-semibold">Cancel</span>
            </button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white transition-all duration-300"
            >
              Request Demo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
