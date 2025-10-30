"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaRocket,
  FaCircleCheck,
  FaCircleXmark,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [categories, setCategories] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Abrindo seu e-mail..." });

    const to = "femacedogomes@gmail.com";
    const subject = `Novo contato do portfólio - ${formData.name}`;
    const selectedCategories = categories.length
      ? `\n\nCategorias: ${categories.join(", ")}`
      : "";
    const body = `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nIdeia/Descrição:\n${formData.message}${selectedCategories}`;

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoUrl;
      setStatus({
        type: "success",
        message: "Pronto para enviar no seu e-mail.",
      });
      setFormData({ name: "", email: "", message: "" });
      setCategories([]);
    } catch {
      setStatus({ type: "error", message: "Não foi possível abrir o e-mail." });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleCategory = (value: string) => {
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A855F7' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
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
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Coluna 1: Texto simples */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-7xl pt-10 font-bold pb-10 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Vamos criar algo incrível juntos.
            </motion.p>

            {/* Coluna 2: Email, ícones e formulário */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <a
                  href="mailto:femacedogomes@gmail.com"
                  className="inline-flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition-colors"
                >
                  <FaEnvelope />
                  femacedogomes@gmail.com
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/femacedogomes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 hover:text-black transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/felipemacedogomes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome e E-mail na mesma linha */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Descrição da sua ideia
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                {/* Categorias */}
                <div>
                  <p className="block text-sm font-semibold text-gray-700 mb-3">
                    Categorias
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Site",
                      "E-commerce",
                      "App Mobile",
                      "App Web",
                      "Identidade de Marca",
                      "Animação 3D",
                      "Estratégia de Marca & Consultoria",
                      "Outro",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 bg-white/50 hover:border-purple-300 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                          checked={categories.includes(label)}
                          onChange={() => toggleCategory(label)}
                        />
                        <span className="text-gray-800 text-sm font-medium">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 font-semibold text-lg shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status.type === "loading" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Preparando e-mail...
                      </>
                    ) : (
                      <>
                        Enviar
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaRocket />
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-xl text-center font-medium ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {status.type === "success" ? (
                        <>
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5 }}
                          >
                            <FaCircleCheck />
                          </motion.span>
                          {status.message}
                        </>
                      ) : (
                        <>
                          <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <FaCircleXmark />
                          </motion.span>
                          {status.message}
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
