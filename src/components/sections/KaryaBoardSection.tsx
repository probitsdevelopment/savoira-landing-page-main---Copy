import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Bell,
  Target,
  Laptop,
  Users,
  Clock,
  Archive,
  ArrowRight,
  User,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

type Priority = "High" | "Medium" | "Low";
type Status =
  | "todo"
  | "inProgress"
  | "atClientsCourt"
  | "inTraining"
  | "inReview"
  | "completed"
  | "archive";
type DeliveryMode = "Virtual" | "Classroom";

interface Task {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  deliveryMode: DeliveryMode;
  owner: string;
}

const statusConfig = {
  todo: {
    label: "TODO",
    color: "bg-gradient-to-r from-slate-600 to-slate-700",
    textColor: "text-slate-200",
  },
  inProgress: {
    label: "IN PROGRESS",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    textColor: "text-blue-100",
  },
  atClientsCourt: {
    label: "AT CLIENTS COURT",
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    textColor: "text-orange-100",
  },
  inTraining: {
    label: "IN TRAINING",
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    textColor: "text-purple-100",
  },
  inReview: {
    label: "IN REVIEW",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    textColor: "text-yellow-100",
  },
  completed: {
    label: "COMPLETED",
    color: "bg-gradient-to-r from-green-500 to-green-600",
    textColor: "text-green-100",
  },
  archive: {
    label: "ARCHIVE",
    color: "bg-gradient-to-r from-gray-500 to-gray-600",
    textColor: "text-gray-100",
  },
};

// cspell:disable-next-line
export function KaryaBoardSection() {
  const benefits = [
    { icon: CheckCircle, text: "Real-time updates across all projects" },
    { icon: Bell, text: "Smart follow-ups and notifications" },
    { icon: Target, text: "Task sentiment & blocker detection" },
  ];

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Update Leadership Curriculum",
      priority: "High",
      status: "todo",
      deliveryMode: "Virtual",
      owner: "John Smith",
    },
    {
      id: "2",
      title: "Sales Training Module",
      priority: "Medium",
      status: "todo",
      deliveryMode: "Classroom",
      owner: "Sarah Johnson",
    },
    {
      id: "3",
      title: "Q1 Training Planning",
      priority: "Medium",
      status: "inProgress",
      deliveryMode: "Virtual",
      owner: "Mike Davis",
    },
    {
      id: "4",
      title: "Customer Service Workshop",
      priority: "High",
      status: "inProgress",
      deliveryMode: "Classroom",
      owner: "Lisa Wong",
    },
    {
      id: "5",
      title: "Product Knowledge Training",
      priority: "Medium",
      status: "atClientsCourt",
      deliveryMode: "Virtual",
      owner: "Alex Brown",
    },
    {
      id: "6",
      title: "Leadership Development",
      priority: "High",
      status: "inTraining",
      deliveryMode: "Classroom",
      owner: "Emma Wilson",
    },
    {
      id: "7",
      title: "Technical Skills Training",
      priority: "Medium",
      status: "inReview",
      deliveryMode: "Virtual",
      owner: "David Lee",
    },
    {
      id: "8",
      title: "Onboarding Program",
      priority: "Low",
      status: "completed",
      deliveryMode: "Virtual",
      owner: "Maria Garcia",
    },
    {
      id: "9",
      title: "Old Compliance Training",
      priority: "Low",
      status: "archive",
      deliveryMode: "Classroom",
      owner: "Tom Anderson",
    },
  ]);

  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [draggedOverColumn, setDraggedOverColumn] = useState<Status | null>(
    null
  );

  // Add smooth dragging styles
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .dragging * {
        cursor: grabbing !important;
        user-select: none;
      }
      .kanban-column {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .task-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .kanban-column.drag-available {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        50% {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const getTasksByStatus = (status: Status) => {
    return tasks.filter((task) => task.status === status);
  };

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
    setDraggedOverColumn(null);
  };

  const handleDrop = (status: Status) => {
    if (!draggedTask) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTask ? { ...task, status } : task
      )
    );
    setDraggedTask(null);
    setDraggedOverColumn(null);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (e: any, status: Status) => {
    e.preventDefault();
    setDraggedOverColumn(status);
    // Add visual feedback
    const element = e.currentTarget as HTMLElement;
    element.style.transform = "scale(1.02)";
    element.style.transition = "transform 0.2s ease";
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    // Only clear if we're actually leaving the column
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDraggedOverColumn(null);
    }
  };

  const getPriorityIcon = (priority: Priority) => {
    const baseClasses = "w-4 h-4";
    switch (priority) {
      case "High":
        return <div className={`${baseClasses} bg-red-500 rounded-full`} />;
      case "Medium":
        return <div className={`${baseClasses} bg-yellow-500 rounded-full`} />;
      case "Low":
        return <div className={`${baseClasses} bg-green-500 rounded-full`} />;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: draggedTask === task.id ? 0.3 : 1,
        y: 0,
        scale: draggedTask === task.id ? 0.95 : 1,
        rotate: draggedTask === task.id ? 2 : 0,
      }}
      whileHover={{
        scale: draggedTask === task.id ? 0.95 : 1.03,
        boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)",
        y: draggedTask === task.id ? 0 : -3,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.4,
      }}
      className={`task-card bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-4 rounded-xl cursor-grab active:cursor-grabbing hover:border-blue-400/50 hover:shadow-xl ${
        draggedTask === task.id
          ? "ring-2 ring-blue-400 shadow-2xl border-blue-400"
          : ""
      } ${task.status === "archive" ? "opacity-70" : ""} ${
        draggedTask && draggedTask !== task.id
          ? "pointer-events-none opacity-60"
          : ""
      }`}
      draggable
      onDragStart={(e: any) => {
        handleDragStart(task.id);
        e.dataTransfer.setData("text/plain", task.id);
        e.dataTransfer.effectAllowed = "move";
        // Create enhanced ghost image with smooth styling
        if (e.currentTarget) {
          const dragImage = e.currentTarget.cloneNode(true) as HTMLElement;
          dragImage.style.transform = "rotate(3deg) scale(1.05)";
          dragImage.style.opacity = "0.9";
          dragImage.style.position = "absolute";
          dragImage.style.top = "-2000px";
          dragImage.style.boxShadow = "0 25px 60px rgba(59, 130, 246, 0.4)";
          dragImage.style.borderRadius = "16px";
          dragImage.style.border = "2px solid rgb(59, 130, 246)";
          dragImage.style.zIndex = "9999";
          document.body.appendChild(dragImage);
          e.dataTransfer.setDragImage(
            dragImage,
            e.currentTarget.offsetWidth / 2,
            e.currentTarget.offsetHeight / 2
          );
          setTimeout(() => {
            if (document.body.contains(dragImage)) {
              document.body.removeChild(dragImage);
            }
          }, 100);
        }
      }}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-sm font-semibold text-gray-100 flex-1 mr-2 leading-tight">
          {task.title}
        </h4>
        {getPriorityIcon(task.priority)}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {task.deliveryMode === "Virtual" ? (
            <div className="flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-2 py-1 rounded text-xs">
              <Laptop className="w-3 h-3" />
              <span>Virtual</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 px-2 py-1 rounded text-xs">
              <Users className="w-3 h-3" />
              <span>Classroom</span>
            </div>
          )}
        </div>

        <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border border-slate-600">
          {getInitials(task.owner)}
        </div>
      </div>
    </motion.div>
  );
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {/* cspell:disable-next-line */}
            Introducing Karya Board
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The one board to see everything happening across your L&D ecosystem.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg px-6 py-4 shadow-lg hover:bg-slate-700/50 transition-all duration-300"
              >
                <benefit.icon className="w-6 h-6 text-blue-400" weight="bold" />
                <span className="text-gray-200 font-medium">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Full-width Kanban Board */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-8"
        >
          <div className="overflow-x-auto">
            <div className="grid grid-cols-7 gap-6 min-w-[1400px]">
              {Object.entries(statusConfig).map(([status, config]) => (
                <div
                  key={status}
                  className={`kanban-column min-h-[600px] rounded-xl p-4 border-2 transition-all duration-500 ease-out ${
                    draggedOverColumn === status
                      ? "border-blue-400 bg-gradient-to-br from-blue-500/20 to-purple-500/10 shadow-2xl transform scale-[1.03] backdrop-blur-sm"
                      : draggedTask
                      ? "border-dashed border-slate-600/50 hover:border-blue-400/60 hover:bg-slate-800/40 hover:shadow-lg hover:transform hover:scale-[1.01]"
                      : "border-transparent hover:border-slate-600/30"
                  }`}
                  onDrop={(e: any) => {
                    e.preventDefault();
                    const taskId = e.dataTransfer.getData("text/plain");
                    if (taskId) {
                      handleDrop(status as Status);
                    }
                  }}
                  onDragOver={handleDragOver}
                  onDragEnter={(e) => handleDragEnter(e, status as Status)}
                  onDragLeave={handleDragLeave}
                >
                  {/* Column Header */}
                  <div className="mb-6">
                    <div
                      className={`${config.color} ${
                        config.textColor
                      } rounded-lg p-4 text-center shadow-lg border border-slate-600 ${
                        draggedTask && draggedOverColumn === status
                          ? "ring-2 ring-blue-400 scale-105"
                          : ""
                      } transition-all duration-300`}
                    >
                      <h3 className="font-bold text-sm mb-1">{config.label}</h3>
                      <div className="text-xs opacity-90">
                        {getTasksByStatus(status as Status).length} items
                      </div>
                      {draggedTask && draggedOverColumn === status && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-2 text-xs bg-white/20 rounded px-2 py-1"
                        >
                          Drop here
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-4">
                    {getTasksByStatus(status as Status).map((task, index) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <TaskCard task={task} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Add button for empty columns */}
                  {getTasksByStatus(status as Status).length === 0 && (
                    <div
                      className={`border-2 border-dashed rounded-lg p-4 text-center transition-all duration-300 ${
                        draggedTask && draggedOverColumn === status
                          ? "border-blue-400 bg-blue-500/10 text-blue-300"
                          : "border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                      } cursor-pointer`}
                    >
                      <div className="text-2xl mb-2">
                        {draggedTask && draggedOverColumn === status
                          ? "📌"
                          : "+"}
                      </div>
                      <div className="text-sm">
                        {draggedTask && draggedOverColumn === status
                          ? "Drop task here"
                          : "Add task"}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Board Footer */}
          <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                <span>High Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                <span>Medium Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                <span>Low Priority</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Laptop className="w-4 h-4" />
                <span>Virtual</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Users className="w-4 h-4" />
                <span>Classroom</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
