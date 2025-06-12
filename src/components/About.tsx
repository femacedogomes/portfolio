"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPinIcon className="w-6 h-6 text-indigo-600" />
                <span className="text-gray-600">Fortaleza – CE</span>
              </div>

              <p className="text-gray-600 mb-6">
                Desenvolvedor Front-End com background em Engenharia Civil,
                Mestrado pelo Instituto Politécnico de Bragança e atualmente
                cursando Análise e Desenvolvimento de Sistemas. Desde 2022 atuo
                com desenvolvimento web e mobile, buscando contribuir com
                projetos inovadores e impactantes.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BriefcaseIcon className="w-6 h-6 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Experiência</h3>
                  </div>
                  <p className="text-gray-600 ml-8">
                    Desenvolvimento web e mobile desde 2022, com foco em React,
                    Next.js e React Native.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AcademicCapIcon className="w-6 h-6 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Formação</h3>
                  </div>
                  <ul className="space-y-2 ml-8 text-gray-600">
                    <li>
                      • Análise e Desenvolvimento de Sistemas – Unifor (Em
                      andamento)
                    </li>
                    <li>
                      • Mestrado em Engenharia Civil – Instituto Politécnico de
                      Bragança (2020)
                    </li>
                    <li>
                      • Graduação em Engenharia Civil – Unichristus (2020)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Habilidades Técnicas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white text-gray-900 p-3 rounded-lg shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
