import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
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

  // Typing animation for heading
  const fullText = `Hi, I'm ${name}.`;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120); // slow and smooth
    return () => clearInterval(interval);
  }, [fullText]);

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
          {displayedText}
          <span className="animate-pulse">
            {displayedText.length < fullText.length ? "|" : ""}
          </span>
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
          <a
            href="/Hitesh.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-black text-white border border-black hover:bg-gray-900"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </a>
          <a
            href="https://github.com/hiteshsingh01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/hiteshsingh01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </a>
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
