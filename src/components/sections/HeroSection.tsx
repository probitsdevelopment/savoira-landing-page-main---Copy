import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkle,
  Brain,
  Lightning,
  ChartLine,
  Users,
  GraduationCap,
  Target,
  CalendarCheck,
  Robot,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import videoPath from "@/assets/videos/videos.mp4";
import { PartnerModal } from "@/components/PartnerModal";

interface HeroSectionProps {
  _onDemoClick?: () => void;
  _onExploreClick?: () => void;
  onLaunchClick: () => void;
}

const FloatingParticle = ({
  delay = 0,
  duration = 20,
}: {
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className="absolute w-1 h-1 bg-primary/40 rounded-full"
    initial={{
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      opacity: 0,
    }}
    animate={{
      x: [
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
      ],
      y: [
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
      ],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0,
  position,
}: {
  icon: any;
  className: string;
  delay?: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}) => (
  <motion.div
    className={`absolute ${className}`}
    style={position}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      y: [0, -30, -60, -90],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  >
    <Icon className="w-6 h-6" weight="duotone" />
  </motion.div>
);

const AIAgentPulse = () => (
  <motion.div
    className="absolute top-1/4 right-[15%] hidden lg:flex flex-col items-center gap-3"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    <motion.div
      className="relative"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
        <Robot className="w-8 h-8 text-white" weight="duotone" />
      </div>
    </motion.div>

    <motion.div
      className="flex flex-col items-center gap-1 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{
            opacity: [1, 0.3, 1],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="text-xs font-medium text-foreground">
          AI Agent Active
        </span>
      </div>
      <motion.div
        className="text-[10px] text-muted-foreground"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Parsing profiles...
      </motion.div>
    </motion.div>
  </motion.div>
);

const DataStream = () => (
  <motion.div
    className="absolute bottom-1/4 left-[12%] hidden lg:block"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.4, duration: 0.8 }}
  >
    <div className="bg-card/70 backdrop-blur-sm rounded-xl p-4 border border-accent/20 shadow-xl max-w-[200px]">
      <div className="flex items-center gap-2 mb-3">
        <ChartLine className="w-4 h-4 text-accent" weight="duotone" />
        <span className="text-xs font-semibold text-foreground">
          L&D Metrics
        </span>
      </div>
      <div className="space-y-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "85%" }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "92%" }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "78%" }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

export function HeroSection({
  _onDemoClick,
  _onExploreClick,
  onLaunchClick,
}: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowControls(false);
        // Show controls again after 3 seconds
        setTimeout(() => setShowControls(true), 3000);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            duration={15 + Math.random() * 10}
          />
        ))}
      </div>

      <FloatingIcon
        icon={GraduationCap}
        className="text-blue-400/50"
        position={{ top: "20%", left: "15%" }}
        delay={0}
      />
      <FloatingIcon
        icon={Users}
        className="text-purple-400/50"
        position={{ top: "25%", right: "20%" }}
        delay={2}
      />
      <FloatingIcon
        icon={Target}
        className="text-cyan-400/50"
        position={{ bottom: "30%", left: "18%" }}
        delay={4}
      />
      <FloatingIcon
        icon={CalendarCheck}
        className="text-violet-400/50"
        position={{ bottom: "35%", right: "22%" }}
        delay={6}
      />

      <motion.div
        className="absolute top-20 right-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkle className="w-8 h-8 text-primary/30" weight="fill" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Brain className="w-10 h-10 text-accent/30" weight="duotone" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Lightning className="w-6 h-6 text-cyan-400/40" weight="fill" />
      </motion.div>

      <AIAgentPulse />
      <DataStream />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkle className="w-4 h-4 text-primary" weight="fill" />
            </motion.div>
            <span className="text-sm font-medium text-primary">
              AI-Powered L&D Operations
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <motion.span
              className="text-white inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Profiles that build themselves —
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#2563EB] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                opacity: { delay: 0.5, duration: 0.6 },
                x: { delay: 0.5, duration: 0.6 },
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              powered by AI Agents
            </motion.span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            No more forms or manual uploads.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* cspell:disable-next-line */}
            Savoira decodes human expertise with precision. It reads what others
            skim — extracting skills, availability, and alignment from every
            profile, instantly. The intelligence works quietly, so your focus
            stays on decisions, not data.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={onLaunchClick}
                className="relative text-base px-8 h-12 gap-2 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] hover:from-[#1D4ED8] hover:to-[#7C3AED] text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-200%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.5,
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Join the launch
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight weight="bold" className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            <motion.button
              onClick={() => setIsPartnerModalOpen(true)}
              className="ghost-button text-base px-8 h-12 rounded-lg font-medium border-2 border-[#2563EB] relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/10 to-[#2563EB]/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-white font-semibold relative z-10">
                Partner with us
              </span>
            </motion.button>
          </motion.div>

          <motion.p
            className="text-sm text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Built for L&D leaders who want to simplify and scale learning
            operations.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-24 relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
              {/* Left Panel: Compact Stats */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Performance Metrics
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Real-time insights from our AI platform
                    </p>
                  </div>

                  {/* Compact Stats Grid */}
                  <div className="space-y-4 mb-6">
                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(37,99,235,0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkle
                          className="w-5 h-5 text-blue-400"
                          weight="fill"
                        />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-xs text-gray-400">
                          Profile Accuracy
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-violet-500/10 to-violet-600/5 border border-violet-500/20"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(139,92,246,0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lightning
                          className="w-5 h-5 text-violet-400"
                          weight="fill"
                        />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">70%</div>
                        <div className="text-xs text-gray-400">Time Saved</div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(34,211,238,0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain
                          className="w-5 h-5 text-cyan-400"
                          weight="duotone"
                        />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          24/7
                        </div>
                        <div className="text-xs text-gray-400">
                          AI Monitoring
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Capabilities */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Key Capabilities
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">
                          Auto-extracts skills & certifications
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">
                          Detects gaps & suggests updates
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">
                          Instant trainer matching
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Panel: Prominent Video */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {/* cspell:disable-next-line */}
                      See Savoira In Action
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Watch how our AI transforms L&D operations and automates
                      profile management
                    </p>
                  </div>

                  <motion.div
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center group"
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 25px 80px rgba(34, 211, 238, 0.4)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <video
                      ref={videoRef}
                      src={videoPath}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover rounded-2xl"
                      style={{ filter: "brightness(0.95)" }}
                      onPlay={() => {
                        setIsPlaying(true);
                        setShowControls(false);
                        setTimeout(() => setShowControls(true), 3000);
                      }}
                      onPause={() => {
                        setIsPlaying(false);
                        setShowControls(true);
                      }}
                      onError={(e) => {
                        // Handle video loading error gracefully
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                      onClick={handlePlayPause}
                    >
                      Your browser does not support the video tag.
                    </video>

                    {/* Fallback content if video fails to load */}
                    <div className="hidden w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex-col items-center justify-center text-center p-8">
                      <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mb-4">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">
                        Demo Video
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Video preview coming soon
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        {/* cspell:disable-next-line */}
                        Experience Savoira's AI-powered L&D automation
                      </p>
                    </div>

                    {/* Video overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Play/Pause button overlay */}
                    {showControls && (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={handlePlayPause}
                      >
                        <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/60 hover:bg-black/60 transition-all duration-300 cursor-pointer shadow-xl">
                          {isPlaying ? (
                            // Pause icon
                            <div className="flex gap-1">
                              <div className="w-1.5 h-4 bg-white" />
                              <div className="w-1.5 h-4 bg-white" />
                            </div>
                          ) : (
                            // Play icon
                            <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1" />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Video controls overlay */}
                    {showControls && (
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 transition-opacity duration-300">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayPause();
                            }}
                          >
                            {isPlaying ? (
                              // Pause icon
                              <div className="flex gap-0.5">
                                <div className="w-1 h-2 bg-white" />
                                <div className="w-1 h-2 bg-white" />
                              </div>
                            ) : (
                              // Play icon
                              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                            )}
                          </div>
                          <div className="text-xs text-white font-medium">
                            2:34
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-white/20 rounded cursor-pointer hover:bg-white/30 transition-colors flex items-center justify-center">
                            <div className="text-xs text-white">⚙</div>
                          </div>
                          <div className="w-6 h-6 bg-white/20 rounded cursor-pointer hover:bg-white/30 transition-colors flex items-center justify-center">
                            <div className="text-xs text-white">⛶</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Experience the future of L&D automation
                    </div>
                    <div className="text-xs text-gray-500 bg-slate-800/50 px-3 py-1 rounded-full">
                      2:34 min
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner Modal */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </section>
  );
}
