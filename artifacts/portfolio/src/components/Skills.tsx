import { motion } from "framer-motion";
import { Server, Shield, Cloud, Activity, Wrench, Code2 } from "lucide-react";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    title: "Routing & Switching",
    icon: Server,
    skills: [
      { name: "BGP / OSPF / EIGRP", level: 95 },
      { name: "VLANs / STP / VTP", level: 90 },
      { name: "Cisco Nexus / Catalyst", level: 92 },
      { name: "Juniper NX-OS", level: 85 },
    ]
  },
  {
    title: "Network Security",
    icon: Shield,
    skills: [
      { name: "Palo Alto / Fortinet", level: 88 },
      { name: "IPsec / SSL VPN", level: 90 },
      { name: "Zero Trust Architecture", level: 85 },
      { name: "802.1X / NAC", level: 80 },
    ]
  },
  {
    title: "Cloud Networking",
    icon: Cloud,
    skills: [
      { name: "AWS VPC / Transit Gateway", level: 85 },
      { name: "Azure VNet", level: 75 },
      { name: "Cloudflare", level: 80 },
      { name: "SD-WAN (Cisco Viptela)", level: 88 },
    ]
  },
  {
    title: "Scripting & Automation",
    icon: Code2,
    skills: [
      { name: "Python", level: 85 },
      { name: "Ansible", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "REST APIs / NETCONF", level: 85 },
    ]
  },
  {
    title: "Tools & Monitoring",
    icon: Activity,
    skills: [
      { name: "Wireshark / tcpdump", level: 95 },
      { name: "SolarWinds / PRTG", level: 90 },
      { name: "Datadog", level: 85 },
      { name: "Splunk", level: 80 },
    ]
  },
  {
    title: "Protocols & Services",
    icon: Wrench,
    skills: [
      { name: "DNS / DHCP / IPAM", level: 95 },
      { name: "QoS / Multicast", level: 85 },
      { name: "SNMP / Syslog", level: 90 },
      { name: "IPv6", level: 80 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground tracking-tight">&lt;Skills /&gt;</h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-mono text-muted-foreground">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
