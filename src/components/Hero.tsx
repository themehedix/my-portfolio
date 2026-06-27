"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Download, ArrowRight } from "lucide-react";
import { personalData } from "@/constants/data";
import { toast } from "react-toastify";

export default function Hero() {

  const resume = () => {
    const fileUrl = "Mehedi Hasan Resume (2).pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Mehedi_Hasan_Resume_Full-stack_dev.pdf"); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Resume download started!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20"
          >
            Available for new opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            {personalData.designation}. I build high-performance, scalable web applications with modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2 group"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={resume} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2 border border-slate-700">
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="flex items-center gap-6">
            <a href={personalData.socials.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={personalData.socials.linkedin} target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalData.socials.facebook} target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Geometric Decorations */}
            <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl rotate-6 -z-10" />
            <div className="absolute -inset-4 border border-indigo-500/20 rounded-3xl -rotate-6 -z-10" />
            
            <div className="w-full h-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900/50">
                 <img 
                    src="mehedi.png" 
                    alt="Mehedi Hasan"
                    className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}