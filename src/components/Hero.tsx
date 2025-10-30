"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "@/config/particlesConfig";
import Image from "next/image";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />

      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="absolute inset-0 w-full h-full"
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda: textos */}
          <div>
            {/* Avatar no mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:hidden"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Felipe Macedo Gomes"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Felipe Macedo Gomes
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-semibold text-indigo-400 mb-6"
            >
              Desenvolvedor
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-gray-300"
            >
              Transformando ideias em experiências digitais impactantes
            </motion.p>
          </div>

          {/* Coluna direita: imagem grande no desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl" />
              <Image
                src="/images/profile.jpeg"
                alt="Felipe Macedo Gomes"
                width={384}
                height={384}
                className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover shadow-2xl ring-2 ring-white/10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
