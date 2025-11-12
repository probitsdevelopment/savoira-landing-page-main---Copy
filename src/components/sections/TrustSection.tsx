import { Card } from "@/components/ui/card";
import { ShieldCheck, LockKey, Eye, ChartLine } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import iso27001Logo from "@/assets/images/iso.png";
import gdprLogo from "@/assets/images/Frame_427319119.png";
import uptime from "@/assets/images/uptime.png";

export function TrustSection() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "ISO 27001 Certified",
      description: "International standard for information security management",
    },
    {
      icon: LockKey,
      title: "GDPR Alignment",
      description: "Full compliance with data protection regulations",
    },
    {
      icon: Eye,
      title: "Role-Based Access",
      description: "Granular permissions and access control",
    },
    {
      icon: ChartLine,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring and threat detection",
    },
  ];

  const badges = [
    { type: "image", src: iso27001Logo, alt: "ISO 27001 Certified" },
    { type: "image", src: gdprLogo, alt: "GDPR Compliant" },
    { type: "image", src: uptime, alt: "99.99% Uptime" },
  ];

  return (
    <section id="trust" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" weight="duotone" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Built on a Foundation of Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security and compliance that you can count on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group p-6 h-full bg-background hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center hover:border-primary/30">
                <feature.icon
                  className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-400"
                  weight="duotone"
                />
                <h3 className="text-base font-semibold mb-2 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center w-32 h-32 bg-background rounded-lg border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 p-0"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
