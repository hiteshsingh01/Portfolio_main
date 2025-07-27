import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import gsap from 'gsap';

export const Projects = ({ projects }) => {
  const { toast } = useToast();
  const cardRefs = useRef([]);

  // GSAP hover handlers
  const handleHover = (el) => {
    gsap.to(el, { scale: 1.04, boxShadow: '0 8px 32px rgba(102,126,234,0.15)', duration: 0.3, ease: 'power2.out' });
  };
  const handleHoverOut = (el) => {
    gsap.to(el, { scale: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', duration: 0.3, ease: 'power2.in' });
  };

  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card bg-white rounded-lg overflow-hidden cursor-pointer flex flex-col h-full shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={e => handleHover(e.currentTarget)}
              onMouseLeave={e => handleHoverOut(e.currentTarget)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto flex-col sm:flex-row">
                  {project.hasCode && project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px]"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.hasLive && project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px]"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-flex flex-col sm:flex-row items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 focus:outline-none border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white group shadow-lg"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <Github className="mr-0 sm:mr-3 h-6 w-6 mb-2 sm:mb-0" />
            View All Projects
            <span className="ml-0 sm:ml-3 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
