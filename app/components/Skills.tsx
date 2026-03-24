"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  BarChart3,
  Layers,
  Bot,
  Globe,
} from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "TensorFlow, PyTorch, scikit-learn — building and deploying production ML models.",
    span: "col-span-1",
  },
  {
    icon: Bot,
    title: "LLM & RAG Pipelines",
    description:
      "Retrieval-augmented generation systems with LangChain and vector DBs.",
    span: "col-span-1",
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Next.js, React, FastAPI, Node.js — end-to-end web applications.",
    span: "col-span-1",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "SQL, NoSQL, ETL pipelines, and scalable data architectures.",
    span: "col-span-1",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Docker, CI/CD — deploying and scaling AI services.",
    span: "col-span-1",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description:
      "Dashboards with Streamlit, Plotly, and D3 for real-time analytics.",
    span: "col-span-1",
  },
  {
    icon: Layers,
    title: "Deep Learning",
    description:
      "CNNs, RNNs, transformers — computer vision and NLP at scale.",
    span: "col-span-1",
  },
  {
    icon: Globe,
    title: "API Development",
    description: "RESTful and GraphQL APIs with FastAPI, Express, and Flask.",
    span: "col-span-1",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="relative min-h-screen py-20 flex flex-col justify-center items-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/[0.04] blur-[120px] pointer-events-none" />

      <div ref={ref} className="section-container relative z-10 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-28 space-y-8"
        >
          <span className="section-badge">My Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Technologies I{" "}
            <span className="gradient-text">work with</span>
          </h2>
          <div className="flex justify-center w-full">
            <p className="text-[#8888a0] max-w-xl mx-auto text-center leading-relaxed">
              A diverse toolkit spanning AI, data, and full-stack engineering.
            </p>
          </div>
          <br />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className={`glass-card gradient-border-top p-7 md:p-9 group cursor-default ${skill.span}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/15 group-hover:border-purple-500/20 transition-all duration-300">
                  <skill.icon
                    size={22}
                    className="text-purple-400 group-hover:text-purple-300 transition-colors"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-[#8888a0] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
