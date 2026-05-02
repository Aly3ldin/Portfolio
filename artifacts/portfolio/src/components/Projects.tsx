import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, GitBranch } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Global SD-WAN Rollout",
    description: "Architected and deployed Cisco Viptela SD-WAN across 50+ enterprise branches. Migrated from legacy MPLS to dual internet circuits, reducing monthly telecom costs by 40% while improving application performance and redundancy.",
    tags: ["Cisco SD-WAN", "BGP", "IPsec", "QoS"],
    link: "#",
    github: "#"
  },
  {
    title: "Zero Trust Network Architecture",
    description: "Implemented a comprehensive Zero Trust model for a hybrid cloud environment. Integrated Palo Alto firewalls, Cisco ISE for NAC, and AWS Transit Gateway to enforce micro-segmentation and strict access controls.",
    tags: ["Zero Trust", "Palo Alto", "Cisco ISE", "AWS"],
    link: "#",
  },
  {
    title: "Network Automation Framework",
    description: "Developed a centralized Python/Ansible framework for automated switch provisioning and configuration backup. Reduced manual configuration errors by 90% and shortened deployment time for new sites from days to hours.",
    tags: ["Python", "Ansible", "Jinja2", "Git"],
    github: "#"
  },
  {
    title: "BGP Route Optimization",
    description: "Redesigned internet edge routing for a data center. Implemented BGP traffic engineering, manipulating local preference and AS-path prepending to optimize inbound/outbound traffic flows and reduce latency.",
    tags: ["BGP", "Traffic Engineering", "Juniper"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground tracking-tight">&lt;Projects /&gt;</h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full"
            >
              <Card className="h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="w-8 h-8 text-primary" />
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                          <GitBranch className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-primary/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" className="font-mono">
            VIEW_FULL_ARCHIVE <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
