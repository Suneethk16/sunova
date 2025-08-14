import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, MeshDistortMaterial } from '@react-three/drei'
import { ExternalLink, Github, Globe, Code, Database, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/300",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application",
      liveUrl: "#",
      githubUrl: "#",
      color: "#00d4ff"
    },
    {
      id: 2,
      title: "AI-Powered Analytics",
      description: "Machine learning platform that provides real-time business insights and predictive analytics using Python and TensorFlow.",
      image: "/api/placeholder/400/300",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#",
      color: "#a855f7"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      image: "/api/placeholder/400/300",
      tech: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      category: "Mobile App",
      liveUrl: "#",
      githubUrl: "#",
      color: "#10b981"
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure solution using AWS services, Docker containers, and Kubernetes orchestration for high availability.",
      image: "/api/placeholder/400/300",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "DevOps",
      liveUrl: "#",
      githubUrl: "#",
      color: "#ec4899"
    },
    {
      id: 5,
      title: "Real-time Chat System",
      description: "WebSocket-based real-time chat application with end-to-end encryption, file sharing, and group chat functionality.",
      image: "/api/placeholder/400/300",
      tech: ["WebSocket", "React", "Node.js", "Redis"],
      category: "Real-time",
      liveUrl: "#",
      githubUrl: "#",
      color: "#f59e0b"
    },
    {
      id: 6,
      title: "Blockchain DApp",
      description: "Decentralized application built on Ethereum blockchain with smart contracts for secure and transparent transactions.",
      image: "/api/placeholder/400/300",
      tech: ["Solidity", "Web3.js", "React", "Hardhat"],
      category: "Blockchain",
      liveUrl: "#",
      githubUrl: "#",
      color: "#8b5cf6"
    }
  ]

  const categories = ["All", "Web Application", "Mobile App", "AI/ML", "DevOps", "Real-time", "Blockchain"]

  return (
    <section id="projects" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00d4ff 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that demonstrate our expertise 
            in building cutting-edge applications and systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === "All" 
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/25"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card h-full card-hover">
                {/* Project Image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800/50 to-dark-900/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 btn-primary text-center py-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Globe className="w-4 h-4 inline mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 btn-secondary text-center py-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white/80 mb-6">
              Let's collaborate on your next project and bring your vision to life with cutting-edge technology.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
