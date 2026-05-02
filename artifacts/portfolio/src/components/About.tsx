import { motion } from "framer-motion";
import { Terminal, MapPin, Briefcase, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground tracking-tight">&lt;About /&gt;</h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I am a Senior Network Engineer with over 8 years of experience designing, implementing, and optimizing large-scale enterprise networks. I specialize in routing protocols, network security, and infrastructure automation.
            </p>
            <p>
              My philosophy is simple: networks should be invisible, resilient, and fully programmable. I treat infrastructure as code and believe that manual configuration is a bug waiting to happen. Whether it's optimizing BGP routes across global data centers or deploying zero-trust SD-WAN architectures, I build for scale and stability.
            </p>
            <p>
              Currently, I'm focusing on cloud networking architectures and exploring the intersection of traditional networking and modern DevOps practices using Python and Ansible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3 text-foreground">
                    <Terminal className="w-5 h-5 text-primary" />
                    <span>STATUS: ONLINE</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>LOC: Seattle, WA</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span>EXP: 8+ Years</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-border"></div>

                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full justify-start font-mono text-xs" asChild>
                    <a href="mailto:hello@example.com">
                      <Mail className="w-4 h-4 mr-2" />
                      USER@DOMAIN.COM
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start font-mono text-xs" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GITHUB.COM/NETENG
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start font-mono text-xs" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LINKEDIN.COM/IN/NETENG
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
