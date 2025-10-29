"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaBolt,
  FaWandMagicSparkles,
  FaMoon,
  FaWrench,
} from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSanity,
  SiWordpress,
  SiPhp,
  SiElementor,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

// Mapeamento de tecnologias para ícones e cores
const techConfig = {
  React: { icon: <SiReact />, color: "from-cyan-400 to-blue-500" },
  Next: { icon: <SiNextdotjs />, color: "from-gray-800 to-gray-900" },
  "Next.js": { icon: <SiNextdotjs />, color: "from-gray-800 to-gray-900" },
  Tailwind: { icon: <SiTailwindcss />, color: "from-teal-400 to-cyan-500" },
  "Tailwind CSS": {
    icon: <SiTailwindcss />,
    color: "from-teal-400 to-cyan-500",
  },
  TypeScript: { icon: <SiTypescript />, color: "from-blue-500 to-blue-600" },
  Sanity: { icon: <SiSanity />, color: "from-pink-500 to-rose-500" },
  Wordpress: { icon: <SiWordpress />, color: "from-blue-600 to-blue-700" },
  PHP: { icon: <SiPhp />, color: "from-purple-600 to-indigo-600" },
  Elementor: { icon: <SiElementor />, color: "from-orange-500 to-red-500" },
  "Node.js": { icon: <SiNodedotjs />, color: "from-green-500 to-green-600" },
  MongoDB: { icon: <SiMongodb />, color: "from-green-600 to-emerald-600" },
  "React Native": { icon: <SiReact />, color: "from-purple-500 to-pink-500" },
} as const;

const projects = [
  {
    title: "Agility Creative Solution",
    description: "Um site visando estética, responsividade, SEO e performance.",
    image: "/images/project1.png",
    technologies: ["React", "Next", "Tailwind", "TypeScript", "Sanity"],
    category: "Web Development",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Academia Cearense de Economia",
    description:
      "Um site com um design moderno e responsivo, com blog, galeria de fotos, contato e etc.",
    image: "/images/project2.png",
    technologies: ["Wordpress", "PHP", "Elementor"],
    category: "WordPress",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Monteiro & Rolim advocacia",
    description: "Um site com um design moderno, atualizado e responsivo.",
    image: "/images/project3.png",
    technologies: ["Wordpress", "PHP", "Elementor"],
    category: "WordPress",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "EasyToLive",
    description:
      "Um webApp para gerar cupons de desconto para clientes, com um design moderno e responsivo, com um sistema de login e registro de usuários, e um sistema de administração para gerenciar os cupons de desconto.",
    image: "/images/project4.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Treina AI",
    description:
      "Um app ios para gerar e acompanhar sua rotina de treino de musculação utilizando IA, com um layout intuitivo, moderno e responsivo.",
    image: "/images/project5.png",
    technologies: ["React Native", "Node.js", "MongoDB", "TypeScript"],
    category: "Mobile App",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Shopping Então Pronto",
    description:
      "Um site para associados da Então Pronto cadastrarem suas lojas e seus serviços e produtos.",
    image: "/images/project6.png",
    technologies: ["Next.js", "Tailwind", "Sanity", "TypeScript"],
    category: "E-commerce",
    gradient: "from-pink-500 to-rose-600",
  },
];

const Projects = () => {
  return (
    <section
      id="projetos"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A855F7' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl pb-4 font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-12"
          >
            Projetos Entregues 🚀
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}
                >
                  {project.category}
                </motion.div>

                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => {
                      const config = techConfig[tech] || {
                        icon: <FaWrench />,
                        color: "from-gray-500 to-gray-600",
                      };
                      return (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + 0.7 + techIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            transition: { duration: 0.2 },
                          }}
                          viewport={{ once: true }}
                          className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${config.color} text-white text-xs font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <motion.span
                            animate={{
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 4,
                              delay: techIndex * 0.5,
                            }}
                            className="text-sm"
                          >
                            {config.icon}
                          </motion.span>
                          {tech}
                        </motion.span>
                      );
                    })}
                  </motion.div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "6+", label: "Projetos Entregues", icon: <FaRocket /> },
              { number: "10+", label: "Tecnologias", icon: <FaBolt /> },
              {
                number: "100%",
                label: "Satisfação",
                icon: <FaWandMagicSparkles />,
              },
              { number: "24/7", label: "Disponibilidade", icon: <FaMoon /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.5,
                  }}
                  className="text-4xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
