import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const Hero = ({ name }) => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-2 sm:px-4 lg:px-8 text-center bg-white"
    >
      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold text-black mb-4"
        >
          Hi, I'm {name}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto"
        >
          DevOps Engineer • Automation Builder • Cloud Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          I specialize in building scalable CI/CD pipelines, automating
          infrastructure using tools like Docker, Kubernetes, and Terraform.
          Currently pursuing my B.Tech in Computer Science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button
            onClick={handleNotImplemented}
            size="lg"
            className="bg-black text-white border border-black hover:bg-gray-900"
          >
            <Download className="mr-2 h-4 w-4" />
            View Resume
          </Button>
          <Button
            onClick={handleNotImplemented}
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            onClick={handleNotImplemented}
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>
      </div>
      {/* Scroll Down Indicator at the very bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center">
        <span className="text-gray-500 text-lg font-mono mb-2">
          Scroll Down
        </span>
        <span className="h-8 w-0.5 bg-black mb-1 animate-pulse"></span>
        <svg
          className="animate-bounce"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};
