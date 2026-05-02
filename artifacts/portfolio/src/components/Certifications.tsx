import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { SiCisco, SiAmazon, SiComptia, SiPaloaltonetworks } from "react-icons/si";

const certifications = [
  {
    name: "Cisco Certified Network Professional (CCNP)",
    issuer: "Cisco",
    date: "2022",
    icon: SiCisco,
    id: "CSCO12345678",
  },
  {
    name: "AWS Certified Advanced Networking - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: SiAmazon,
    id: "AWS-ANS-98765",
  },
  {
    name: "Palo Alto Networks Certified Network Security Administrator (PCNSA)",
    issuer: "Palo Alto Networks",
    date: "2021",
    icon: SiPaloaltonetworks,
    id: "PAN-112233",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    date: "2018",
    icon: SiComptia,
    id: "COMP-NET-4455",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground tracking-tight">&lt;Certifications /&gt;</h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-6 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary transition-colors flex-shrink-0">
                <cert.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer} • Issued {cert.date}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background py-1 px-2 rounded inline-flex border border-border">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>ID: {cert.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
