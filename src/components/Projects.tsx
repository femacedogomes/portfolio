"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Moderno",
    description:
      "Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo.",
    image: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    title: "App de Delivery",
    description:
      "Aplicativo mobile para entrega de comida com rastreamento em tempo real.",
    image: "/project2.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados e métricas de negócio.",
    image: "/project3.jpg",
    technologies: ["React", "D3.js", "Material UI", "Firebase"],
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
            Projetos
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
