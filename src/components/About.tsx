"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const skills = [
    {
      name: "JavaScript (ES6+)",
      icon: "🟨",
      color: "from-yellow-400 to-orange-500",
    },
    { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-800 to-gray-900" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
    { name: "React Native", icon: "📱", color: "from-purple-500 to-pink-500" },
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "🎨", color: "from-blue-400 to-purple-500" },
    { name: "Tailwind CSS", icon: "💨", color: "from-teal-400 to-cyan-500" },
    { name: "Git", icon: "🔧", color: "from-gray-600 to-gray-700" },
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-16"
          >
            Sobre Mim
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  Fortaleza – CE
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-8 text-lg leading-relaxed"
              >
                Desenvolvedor Front-End com background em Engenharia Civil,
                Mestrado pelo Instituto Politécnico de Bragança e atualmente
                cursando Análise e Desenvolvimento de Sistemas. Desde 2022 atuo
                com desenvolvimento web e mobile, buscando contribuir com
                projetos inovadores e impactantes.
              </motion.p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                      <BriefcaseIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Experiência
                    </h3>
                  </div>
                  <p className="text-gray-700 ml-12 text-lg">
                    Desenvolvimento web e mobile desde 2022, com foco em React,
                    Next.js, React Native e Node.js.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                      <AcademicCapIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Formação
                    </h3>
                  </div>
                  <ul className="space-y-3 ml-12 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>
                        Análise e Desenvolvimento de Sistemas – Unifor (Em
                        andamento)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>
                        Mestrado em Engenharia Civil – Instituto Politécnico de
                        Bragança (2020)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>
                        Graduação em Engenharia Civil – Unichristus (2020)
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Habilidades Técnicas
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-r ${skill.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-2xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: index * 0.2,
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="font-semibold text-sm group-hover:text-lg transition-all duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">
                    Sempre aprendendo novas tecnologias!
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
