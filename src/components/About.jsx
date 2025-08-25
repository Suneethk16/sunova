import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Code, Users, Zap, Shield, Globe, Rocket } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "24/7", label: "Support", icon: Zap }
  ]

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks and best practices.",
      color: "from-neon-blue to-neon-purple"
    },
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies for your applications.",
      color: "from-neon-purple to-neon-pink"
    },
    {
      icon: Rocket,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management.",
      color: "from-neon-pink to-neon-green"
    }
  ]

  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.span
                className="inline-block px-4 py-2 bg-white/5 rounded-full text-neon-blue text-sm font-medium border border-white/10 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.span>
              
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-white">We Build </span>
                <span className="gradient-text">Digital Solutions</span>
                <br />
                <span className="text-white">That Drive Growth</span>
              </motion.h2>
              
              <motion.p
                className="text-xl text-white/80 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Sunova, we're passionate about creating innovative digital solutions that help businesses thrive in the digital age. Our team of expert developers, designers, and strategists work together to deliver cutting-edge applications that exceed expectations.
              </motion.p>
            </div>

            {/* Services */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-96 lg:h-[500px] rounded-2xl overflow-hidden glass">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, -10, -10]} intensity={0.3} />
                
                {/* Animated Sphere */}
                <Sphere args={[1, 100, 200]} scale={1.5}>
                  <MeshDistortMaterial
                    color="#00d4ff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    radius={1}
                  />
                </Sphere>
                
                {/* Floating Elements */}
                <group>
                  <mesh position={[-2, 1, 0]} scale={0.3}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#a855f7" />
                  </mesh>
                  <mesh position={[2, -1, 0]} scale={0.3}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#10b981" />
                  </mesh>
                  <mesh position={[0, 2, 1]} scale={0.3}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#ec4899" />
                  </mesh>
                </group>
                
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-white/80 leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, 
              enhance user experiences, and create lasting value in an ever-evolving digital landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}