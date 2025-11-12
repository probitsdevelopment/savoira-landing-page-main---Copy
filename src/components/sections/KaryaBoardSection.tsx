import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { CheckCircle, Bell, Target } from '@phosphor-icons/react'
import { motion, Reorder } from 'framer-motion'

type Priority = 'High' | 'Medium' | 'Low'
type Status = 'todo' | 'inProgress' | 'done'

interface Task {
  id: string
  title: string
  priority: Priority
  status: Status
}

export function KaryaBoardSection() {
  const benefits = [
    { icon: CheckCircle, text: 'Real-time updates across all projects' },
    { icon: Bell, text: 'Smart follow-ups and notifications' },
    { icon: Target, text: 'Task sentiment & blocker detection' }
  ]

  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Update curriculum', priority: 'High', status: 'todo' },
    { id: '2', title: 'Review trainers', priority: 'Medium', status: 'todo' },
    { id: '3', title: 'Q1 planning', priority: 'Medium', status: 'inProgress' },
    { id: '4', title: 'Sync calendars', priority: 'Medium', status: 'done' }
  ])

  const [draggedTask, setDraggedTask] = useState<string | null>(null)

  const getTasksByStatus = (status: Status) => {
    return tasks.filter(task => task.status === status)
  }

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId)
  }

  const handleDragEnd = () => {
    setDraggedTask(null)
  }

  const handleDrop = (status: Status) => {
    if (!draggedTask) return
    
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === draggedTask ? { ...task, status } : task
      )
    )
    setDraggedTask(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case 'High':
        return 'bg-accent/10 text-accent'
      case 'Medium':
        return 'bg-primary/10 text-primary'
      case 'Low':
        return 'bg-muted/50 text-muted-foreground'
    }
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Introducing Karya Board
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The one board to see everything happening across your L&D ecosystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-400" weight="bold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-card to-background">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className="col-span-1 space-y-3"
                    onDrop={() => handleDrop('todo')}
                    onDragOver={handleDragOver}
                  >
                    <div className="text-xs font-semibold text-muted-foreground mb-3">TO DO</div>
                    {getTasksByStatus('todo').map((task) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task.id)}
                        onDragEnd={handleDragEnd}
                        className={`bg-background p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-grab active:cursor-grabbing ${
                          draggedTask === task.id ? 'opacity-50' : ''
                        }`}
                      >
                        <div className="text-sm font-medium mb-1">{task.title}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs px-2 py-0.5 rounded transition-colors duration-300 ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="col-span-1 space-y-3"
                    onDrop={() => handleDrop('inProgress')}
                    onDragOver={handleDragOver}
                  >
                    <div className="text-xs font-semibold text-muted-foreground mb-3">IN PROGRESS</div>
                    {getTasksByStatus('inProgress').map((task) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task.id)}
                        onDragEnd={handleDragEnd}
                        className={`bg-background p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-grab active:cursor-grabbing ${
                          draggedTask === task.id ? 'opacity-50' : ''
                        }`}
                      >
                        <div className="text-sm font-medium mb-1">{task.title}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs px-2 py-0.5 rounded transition-colors duration-300 ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="col-span-1 space-y-3"
                    onDrop={() => handleDrop('done')}
                    onDragOver={handleDragOver}
                  >
                    <div className="text-xs font-semibold text-muted-foreground mb-3">DONE</div>
                    {getTasksByStatus('done').map((task) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task.id)}
                        onDragEnd={handleDragEnd}
                        className={`bg-background p-3 rounded-lg border border-border opacity-60 hover:opacity-80 transition-all duration-300 cursor-grab active:cursor-grabbing ${
                          draggedTask === task.id ? 'opacity-30' : ''
                        }`}
                      >
                        <div className="text-sm font-medium mb-1">{task.title}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <CheckCircle className="w-4 h-4 text-primary" weight="fill" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
