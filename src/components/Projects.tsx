"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Agility Creative Solution",
    description: "Um site visando estética, responsividade, SEO e performance.",
    image: "/images/project1.png",
    technologies: ["React", "Next", "Tailwind", "TypeScript", "Sanity"],
  },
  {
    title: "Academia Cearense de Economia",
    description:
      "Um site com um design moderno e responsivo, com blog, galeria de fotos, contato e etc.",
    image: "/images/project2.png",
    technologies: ["Wordpress", "PHP", "Elementor"],
  },
  {
    title: "Monteiro & Rolim advocacia",
    description: "Um site com um design moderno, atualizado e responsivo.",
    image: "/images/project3.png",
    technologies: ["Wordpress", "PHP", "Elementor"],
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
  },
  {
    title: "Treina AI",
    description:
      "Um app ios para gerar e acompanhar sua rotina de treino de musculação utilizando IA, com um layout intuitivo, moderno e responsivo.",
    image: "/images/project5.png",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ],
  },
  {
    title: "Shopping Então Pronto",
    description:
      "Um site para associados da Então Pronto cadastrarem suas lojas e seus serviços e produtos.",
    image: "/images/project6.png",
    technologies: [
      "Next.js",
      "Tailwind",
      "Sanity",
      "TypeScript",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
            Projetos entregues
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
