import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendUp,
  Users,
  Clock,
  ChartLine,
  ArrowRight,
  CheckCircle,
  Quotes,
  Building,
  GlobeHemisphereWest,
  Star,
  Target,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All Stories" },
    { id: "enterprise", label: "Enterprise" },
    { id: "education", label: "Education" },
    { id: "healthcare", label: "Healthcare" },
    { id: "technology", label: "Technology" },
  ];

  const caseStudies = [
    {
      id: 1,
      slug: "manufacturing-enterprise",
      category: "enterprise",
      company: "Manufacturing Enterprise",
      industry: "Manufacturing & Engineering",
      logo: "🏭",
      location: "India",
      size: "1,000+ employees across India",
      challenge:
        "Fragmented training tracking, inconsistent trainer availability, and zero data visibility",
      keyHighlights: [
        "Manual Excel-based tracking of training programs",
        "No visibility into trainer skills, rates, or availability",
        "High dependency on single coordinators — data lost during transitions",
        "Difficult to calculate ROI or skill impact",
      ],
      results: [
        {
          metric: "95%",
          label: "Reduction in trainer onboarding time",
          icon: Clock,
        },
        {
          metric: "98%",
          label: "Fewer session scheduling errors",
          icon: CheckCircle,
        },
        { metric: "96%", label: "Faster reporting time", icon: TrendUp },
        {
          metric: "Instant",
          label: "Compliance audit readiness",
          icon: Target,
        },
      ],
      beforeMetrics: [
        { label: "Trainer onboarding time", value: "7 days" },
        { label: "Session scheduling errors", value: "15%" },
        { label: "Reporting time", value: "2 days" },
        { label: "Compliance audit readiness", value: "Manual" },
      ],
      afterMetrics: [
        { label: "Trainer onboarding time", value: "2 hours" },
        { label: "Session scheduling errors", value: "1%" },
        { label: "Reporting time", value: "30 min" },
        { label: "Compliance audit readiness", value: "Auto-generated" },
      ],
      testimonial:
        "We moved from Excel chaos to complete visibility — Savoira made L&D effortless.",
      author: "L&D Head",
      authorCompany: "Leading Manufacturing Firm",
      tags: ["Automation", "Compliance", "Analytics"],
    },
    {
      id: 2,
      slug: "apex-university",
      category: "education",
      company: "Apex University",
      industry: "Higher Education",
      logo: "🎓",
      location: "Boston, USA",
      size: "25,000 students",
      challenge:
        "Difficulty in tracking trainer availability and maintaining up-to-date faculty profiles",
      keyHighlights: [
        "Faculty schedules scattered across multiple systems",
        "Outdated trainer profiles causing mismatches",
        "No real-time visibility into availability",
        "Manual coordination consuming admin time",
      ],
      results: [
        {
          metric: "92%",
          label: "Profile accuracy improvement",
          icon: CheckCircle,
        },
        { metric: "70%", label: "Time saved on admin tasks", icon: Clock },
        { metric: "45%", label: "Increase in course offerings", icon: TrendUp },
        { metric: "4.8/5", label: "Student satisfaction score", icon: Star },
      ],
      beforeMetrics: [
        { label: "Profile accuracy", value: "65%" },
        { label: "Admin task time", value: "20 hrs/week" },
        { label: "Course offerings", value: "200 courses" },
        { label: "Student satisfaction", value: "3.2/5" },
      ],
      afterMetrics: [
        { label: "Profile accuracy", value: "98%" },
        { label: "Admin task time", value: "6 hrs/week" },
        { label: "Course offerings", value: "290 courses" },
        { label: "Student satisfaction", value: "4.8/5" },
      ],
      testimonial:
        "The automatic profile updates and calendar integration have been game-changers for our faculty management.",
      author: "Dr. James Peterson",
      authorCompany: "Dean of Academic Affairs",
      tags: ["Profile Management", "Calendar Sync", "Reporting"],
    },
    {
      id: 3,
      slug: "medicare-health-systems",
      category: "healthcare",
      company: "MediCare Health Systems",
      industry: "Healthcare",
      logo: "🏥",
      location: "London, UK",
      size: "5,000+ medical staff",
      challenge:
        "Complex compliance training requirements and dispersed medical trainers",
      keyHighlights: [
        "Manual tracking of compliance certifications",
        "Difficulty coordinating dispersed medical trainers",
        "Risk of missing critical training deadlines",
        "Unable to predict trainer capacity needs",
      ],
      results: [
        {
          metric: "100%",
          label: "Compliance training completion",
          icon: CheckCircle,
        },
        { metric: "55%", label: "Better trainer utilization", icon: TrendUp },
        { metric: "£1.8M", label: "Annual savings", icon: Target },
        { metric: "99%", label: "Audit pass rate", icon: Star },
      ],
      beforeMetrics: [
        { label: "Compliance completion rate", value: "78%" },
        { label: "Trainer utilization", value: "45%" },
        { label: "Training costs", value: "£3.2M" },
        { label: "Audit success", value: "85%" },
      ],
      afterMetrics: [
        { label: "Compliance completion rate", value: "100%" },
        { label: "Trainer utilization", value: "70%" },
        { label: "Training costs", value: "£1.4M" },
        { label: "Audit success", value: "99%" },
      ],
      testimonial:
        "Savoira ensures we never miss critical compliance deadlines while optimizing our trainer resources.",
      author: "Emma Thompson",
      authorCompany: "Director of Medical Education",
      tags: ["Karya Board", "Compliance", "Utilization"],
    },
  ];

  const filteredStudies =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <section
      id="case-studies"
      className="py-20 md:py-32 bg-gradient-to-br from-[#0A0F1E] via-[#0F1628] to-[#0A0F1E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white border-none px-4 py-1.5">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results from Real Organizations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading organizations across industries are transforming
            their L&D operations with Savoira
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                transition-all duration-300 
                ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white border-none shadow-lg shadow-[#2563EB]/30"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-[#2563EB]/50 transition-all duration-500 overflow-hidden relative flex flex-col">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 via-[#8B5CF6]/0 to-[#2563EB]/0 group-hover:from-[#2563EB]/10 group-hover:via-[#8B5CF6]/10 group-hover:to-[#2563EB]/10 transition-all duration-500" />

                <div className="relative p-6 flex flex-col h-full">
                  {/* Company Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#8B5CF6]/20 flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
                      {study.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 truncate">
                        {study.company}
                      </h3>
                      <p className="text-xs text-gray-400">{study.industry}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <GlobeHemisphereWest className="w-3 h-3" />
                        <span>{study.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge Badge */}
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="border-red-400/30 text-red-300 text-xs bg-red-400/5"
                    >
                      Challenge
                    </Badge>
                    <p className="text-sm text-gray-300 leading-relaxed mt-2 line-clamp-2">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Key Results - Highlighted */}
                  <div className="grid grid-cols-2 gap-3 mb-4 flex-grow">
                    {study.results.slice(0, 4).map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-[#2563EB]/10 to-[#8B5CF6]/10 rounded-lg p-3 border border-white/5"
                      >
                        {result.icon && (
                          <result.icon
                            className="w-4 h-4 text-[#2563EB] mb-1"
                            weight="duotone"
                          />
                        )}
                        <div className="text-xl font-bold bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
                          {result.metric}
                        </div>
                        <div className="text-[10px] text-gray-400 leading-tight">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 text-gray-400 text-[10px] px-2 py-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* See Details Button */}
                  <Button
                    onClick={() => navigate(`/case-studies/${study.slug}`)}
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white border-none hover:shadow-lg hover:shadow-[#2563EB]/30 transition-all duration-300 group/btn mt-auto"
                  >
                    <span>See Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-[#2563EB]/20 via-[#8B5CF6]/20 to-[#2563EB]/20 border-[#2563EB]/30 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#8B5CF6]/10" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations transforming their L&D operations
                with Savoira
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white border-none hover:shadow-xl hover:shadow-[#2563EB]/40 transition-all duration-300"
                >
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Download All Case Studies
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
