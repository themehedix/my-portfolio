"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Info } from "lucide-react";
import { personalData } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof personalData.projects[0] | null>(null);

  
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">A showcase of my recent work and technical expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {personalData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-wider font-bold rounded border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-slate-900 text-slate-500 text-[10px] font-bold rounded">
                      +{project.techStack.length - 3} More
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a href={project.frontEndGithub} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.serverGithub} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.liveLink} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-blue-400 font-bold text-sm hover:underline"
                  >
                    Details <Info size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-blue-400 font-medium mb-6">{selectedProject.subtitle}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Description</h4>
                      <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Challenges Faced</h4>
                      <p className="text-slate-400 text-sm italic">{selectedProject.challenges}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Future Plans</h4>
                      <p className="text-slate-400 text-sm">{selectedProject.futurePlans}</p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-center rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                      >
                        Live Demo <ExternalLink size={18} />
                      </a>
                      {/* <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        className="flex-1 py-4 bg-slate-800 hover:bg-slate-700 text-center rounded-xl font-bold border border-slate-700 transition-all flex items-center justify-center gap-2"
                      >
                        View Code <Github size={18} />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
