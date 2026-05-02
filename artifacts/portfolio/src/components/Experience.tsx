import { motion } from "framer-motion";
import { Calendar, Building2, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Network Engineer",
    company: "Nexus Enterprise Solutions",
    location: "Seattle, WA",
    period: "2021 - Present",
    description: "Lead architect for global WAN operations. Designed and deployed SD-WAN across 120+ global branch offices. Implemented network automation using Python and Ansible, reducing provisioning time by 75%.",
    tech: ["Cisco SD-WAN", "BGP", "Python", "Ansible", "Palo Alto"]
  },
  {
    role: "Network Engineer",
    company: "TeleCom Global",
    location: "Denver, CO",
    period: "2018 - 2021",
    description: "Managed core routing infrastructure for ISP network. Optimized BGP routing policies reducing latency by 30% for key enterprise clients. Participated in 24/7 on-call rotation resolving critical network outages.",
    tech: ["Juniper", "OSPF", "BGP", "MPLS", "Wireshark"]
  },
  {
    role: "Junior Network Administrator",
    company: "DataTech Inc.",
    location: "Portland, OR",
    period: "2016 - 2018",
    description: "Maintained campus LAN and WLAN. Configured and deployed access switches, managed VLANs, and troubleshooted end-user connectivity issues. Assisted in data center migration project.",
    tech: ["Cisco Catalyst", "VLAN", "STP", "Cisco WLC"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground tracking-tight">&lt;Experience /&gt;</h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2"></div>
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-33px] md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

                <div className="md:w-1/2 flex flex-col">
                  <div className={`bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors shadow-sm ${
                    idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.role}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-mono">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-mono border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
