import { useParams, useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building,
  Users,
  MapPin,
  CheckCircle,
  XCircle,
  TrendUp,
  Quotes,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface CaseStudyDetailProps {
  onDemoClick: () => void;
}

// This would ideally come from an API or database
const caseStudiesData = {
  "manufacturing-enterprise": {
    id: 1,
    company: "Manufacturing Enterprise",
    industry: "Manufacturing & Engineering",
    size: "1,000+ employees across India",
    location: "India",
    challenge:
      "Fragmented training tracking, inconsistent trainer availability, and zero data visibility.",

    beforeSection: {
      title: "🔴 Before Savoira",
      points: [
        "Manual Excel-based tracking of training programs.",
        "No visibility into trainer skills, rates, or availability.",
        "High dependency on single coordinators — data lost during transitions.",
        "Difficult to calculate ROI or skill impact.",
      ],
    },

    afterSection: {
      title: "🟢 After Savoira",
      points: [
        "Centralized Trainer & Program Repository across all departments.",
        "AI-based Availability Matrix ensures fast trainer matching.",
        "Audit-proof logs ensure continuity even when teams change.",
        "ROI Dashboard quantifies time saved and efficiency gains.",
      ],
    },

    results: {
      title: "📊 Results",
      metrics: [
        {
          label: "Trainer onboarding time",
          before: "7 days",
          after: "2 hours",
          improvement: "↓ 95%",
        },
        {
          label: "Session scheduling errors",
          before: "15%",
          after: "1%",
          improvement: "↓ 98%",
        },
        {
          label: "Reporting time",
          before: "2 days",
          after: "30 min",
          improvement: "↓ 96%",
        },
        {
          label: "Compliance audit readiness",
          before: "Manual",
          after: "Auto-generated",
          improvement: "Instant",
        },
      ],
    },

    testimonial: {
      quote:
        "We moved from Excel chaos to complete visibility — Savoira made L&D effortless.",
      author: "L&D Head",
      company: "Leading Manufacturing Firm",
    },
  },
  "apex-university": {
    id: 2,
    company: "Apex University",
    industry: "Higher Education",
    size: "25,000 students",
    location: "Boston, USA",
    challenge:
      "Difficulty in tracking trainer availability and maintaining up-to-date faculty profiles.",

    beforeSection: {
      title: "🔴 Before Savoira",
      points: [
        "Faculty schedules scattered across multiple systems.",
        "Outdated trainer profiles causing mismatches.",
        "No real-time visibility into availability.",
        "Manual coordination consuming admin time.",
      ],
    },

    afterSection: {
      title: "🟢 After Savoira",
      points: [
        "Unified faculty profile system with auto-updates.",
        "Real-time calendar sync across all platforms.",
        "Automated availability tracking and notifications.",
        "Self-service portal reduces admin workload.",
      ],
    },

    results: {
      title: "📊 Results",
      metrics: [
        {
          label: "Profile accuracy",
          before: "65%",
          after: "98%",
          improvement: "↑ 92%",
        },
        {
          label: "Admin task time",
          before: "20 hrs/week",
          after: "6 hrs/week",
          improvement: "↓ 70%",
        },
        {
          label: "Course offerings",
          before: "200 courses",
          after: "290 courses",
          improvement: "↑ 45%",
        },
        {
          label: "Student satisfaction",
          before: "3.2/5",
          after: "4.8/5",
          improvement: "↑ 50%",
        },
      ],
    },

    testimonial: {
      quote:
        "The automatic profile updates and calendar integration have been game-changers for our faculty management.",
      author: "Dr. James Peterson",
      company: "Dean of Academic Affairs",
    },
  },
  "medicare-health-systems": {
    id: 3,
    company: "MediCare Health Systems",
    industry: "Healthcare",
    size: "5,000+ medical staff",
    location: "London, UK",
    challenge:
      "Complex compliance training requirements and dispersed medical trainers.",

    beforeSection: {
      title: "🔴 Before Savoira",
      points: [
        "Manual tracking of compliance certifications.",
        "Difficulty coordinating dispersed medical trainers.",
        "Risk of missing critical training deadlines.",
        "Unable to predict trainer capacity needs.",
      ],
    },

    afterSection: {
      title: "🟢 After Savoira",
      points: [
        "Automated compliance tracking with deadline alerts.",
        "Centralized trainer coordination across facilities.",
        "Predictive analytics for capacity planning.",
        "Real-time dashboard for audit readiness.",
      ],
    },

    results: {
      title: "📊 Results",
      metrics: [
        {
          label: "Compliance completion rate",
          before: "78%",
          after: "100%",
          improvement: "↑ 22%",
        },
        {
          label: "Trainer utilization",
          before: "45%",
          after: "70%",
          improvement: "↑ 55%",
        },
        {
          label: "Training costs",
          before: "£3.2M",
          after: "£1.4M",
          improvement: "↓ £1.8M",
        },
        {
          label: "Audit success",
          before: "85%",
          after: "99%",
          improvement: "↑ 14%",
        },
      ],
    },

    testimonial: {
      quote:
        "Savoira ensures we never miss critical compliance deadlines while optimizing our trainer resources.",
      author: "Emma Thompson",
      company: "Director of Medical Education",
    },
  },
};

export function CaseStudyDetailPage({ onDemoClick }: CaseStudyDetailProps) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudy = slug
    ? caseStudiesData[slug as keyof typeof caseStudiesData]
    : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Case Study Not Found
          </h1>
          <Button onClick={() => navigate("/case-studies")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/case-studies")}
              className="text-gray-300 hover:text-white mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Button>
          </motion.div>

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-[#2563EB]/20 via-[#8B5CF6]/20 to-[#2563EB]/20 border-[#2563EB]/30 p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {caseStudy.company}
                  </h1>
                  <Badge className="bg-white/10 text-white border-white/20 mb-3">
                    {caseStudy.industry}
                  </Badge>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" weight="duotone" />
                      <span>{caseStudy.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" weight="duotone" />
                      <span>{caseStudy.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  Challenge
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Before & After Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Before Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20 p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4">
                  {caseStudy.beforeSection.title}
                </h3>
                <ul className="space-y-3">
                  {caseStudy.beforeSection.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <XCircle
                        className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                        weight="fill"
                      />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* After Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4">
                  {caseStudy.afterSection.title}
                </h3>
                <ul className="space-y-3">
                  {caseStudy.afterSection.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle
                        className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                        weight="fill"
                      />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Results Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {caseStudy.results.title}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">
                        Metric
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                        Before
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                        After
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-300">
                        Improvement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudy.results.metrics.map((metric, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4 text-sm text-white font-medium">
                          {metric.label}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-400 text-center">
                          {metric.before}
                        </td>
                        <td className="py-4 px-4 text-sm text-green-400 text-center font-semibold">
                          {metric.after}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <Badge className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white border-none">
                            {metric.improvement}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-[#2563EB]/10 to-[#8B5CF6]/10 border-[#2563EB]/20 p-8 mb-8">
              <Quotes
                className="w-12 h-12 text-[#2563EB] mb-4 opacity-50"
                weight="fill"
              />
              <p className="text-lg text-gray-200 italic mb-6 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] flex items-center justify-center text-white font-semibold text-lg">
                  {caseStudy.testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-[#2563EB]/20 via-[#8B5CF6]/20 to-[#2563EB]/20 border-[#2563EB]/30 p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your L&D Operations?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join {caseStudy.company} and hundreds of other organizations
                using Savoira to streamline their training operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={onDemoClick}
                  className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white border-none hover:shadow-xl hover:shadow-[#2563EB]/40 transition-all duration-300"
                >
                  Schedule a Demo
                  <TrendUp className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/case-studies")}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  View More Case Studies
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
