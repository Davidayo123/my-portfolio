"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Supply Chain Microgrid",
    description:
      "AI-powered supply chain microgrid optimization system with energy flow management, battery storage monitoring, and renewable energy integration.",
    tags: ["Python", "TensorFlow", "FastAPI", "IoT"],
    image: "/projects/supply-chain-microgrid.png",
    link: "https://solar-microgrid-optimization.streamlit.app/",
  },
  {
    title: "Multimodal Sentiment Analysis",
    description:
      "Deep learning pipeline combining text, image, and audio modalities for comprehensive sentiment analysis with transformer-based fusion.",
    tags: ["PyTorch", "Transformers", "NLP", "Computer Vision"],
    image: "/projects/multimodal-sentiment.png",
    link: "https://multimodal-sentiment-analysis-nlp.streamlit.app/",
  },
  {
    title: "Financial Fraud Detection",
    description:
      "Real-time financial fraud detection platform with anomaly scoring, transaction monitoring, and geographic risk mapping using ensemble ML models.",
    tags: ["scikit-learn", "XGBoost", "Streamlit", "SQL"],
    image: "/projects/fraud-detection.png",
    link: "https://financial-fraud-detection-smote.streamlit.app/",
  },
  {
    title: "RAG Study Buddy",
    description:
      "Retrieval-augmented generation study assistant with document upload, intelligent Q&A, flashcard generation, and knowledge graph visualization.",
    tags: ["LangChain", "Pinecone", "Next.js", "OpenAI"],
    image: "/projects/rag-study-buddy.png",
    link: "#",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="relative min-h-screen py-20 flex flex-col justify-center items-center">
      <div ref={ref} className="section-container relative z-10 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-28 space-y-8"
        >
          <span className="section-badge">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Projects I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h2>
          <div className="flex justify-center w-full">
            <p className="text-[#8888a0] max-w-xl mx-auto text-center leading-relaxed">
              A selection of production systems and creative experiments.
            </p>
          </div>
          <br />
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass-card gradient-border-top overflow-hidden group block"
            >
              {/* Image area */}
              <div className="relative h-52 md:h-64 overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-7 md:p-9 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-[#5a5a72] group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                <p className="text-sm text-[#8888a0] leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/8 border border-purple-500/10 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
