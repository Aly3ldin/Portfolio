import { motion } from "framer-motion";
import { Mail, MessageSquare, Terminal } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-card relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center justify-center p-3 bg-primary/10 rounded-full"
        >
          <Terminal className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Initiate Handshake
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Whether you need to architect a new network topology, optimize an existing infrastructure, or just want to talk BGP attributes. My inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button size="lg" className="font-mono bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base">
            <Mail className="w-5 h-5 mr-2" />
            SEND_PACKET
          </Button>
          <Button size="lg" variant="outline" className="font-mono h-14 px-8 text-base">
            <MessageSquare className="w-5 h-5 mr-2" />
            PING_LINKEDIN
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs font-mono text-muted-foreground/50">
        <p>Built with React & Tailwind. No manual routing required.</p>
        <p className="mt-1">© {new Date().getFullYear()} Alex Chen. All connections secured.</p>
      </div>
    </section>
  );
}
