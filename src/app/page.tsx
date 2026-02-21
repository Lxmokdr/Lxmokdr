"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { FaReact, FaFire, FaPython, FaCuttlefish } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs, SiAdobeillustrator, SiAdobeaftereffects, SiMysql, SiLatex, } from 'react-icons/si';
import { SiAdobepremierepro } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from 'react';


import SkillsCarousel from './components/SkillsCarousel';
import ExperienceCarousel from './components/ExperienceCarousel';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'who-am-i', 'technologies', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white min-h-screen font-sans">
      {/* Clean Professional Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 w-full bg-blue-950/80 backdrop-blur-md  px-6 py-4 flex justify-between items-center z-50"
        style={{ y }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo/Brand */}
        <div className="flex items-center flex-shrink-0">
          <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            KOUDRI Lamia
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex w-full justify-center">
          <ul className="flex space-x-8 text-slate-300 text-sm font-medium">
            {[
              { name: 'Home', link: '#home', id: 'home' },
              { name: 'About', link: '#who-am-i', id: 'who-am-i' },
              { name: 'Skills', link: '#technologies', id: 'technologies' },
              { name: 'Experience', link: '#experience', id: 'experience' },
              { name: 'Education', link: '#education', id: 'education' },
              { name: 'Contact', link: '#contact', id: 'contact' }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`hover:text-orange-400 transition-colors duration-200 relative ${activeSection === item.id ? 'text-orange-400' : ''
                    }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Media Icons */}
        <div className="hidden lg:flex space-x-4 flex-shrink-0">
          <a
            href="https://github.com/Lxmokdr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/lamia-koudri-054130297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="mailto:lamia.koudri@g.enp.edu.dz"
            className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col space-y-1 p-2 flex-shrink-0"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-80 bg-blue-950/95 backdrop-blur-md border-l border-blue-700/50 z-50 lg:hidden transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-white">
              Menu
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <span className="w-6 h-0.5 bg-white rotate-45 translate-y-0.5"></span>
              <span className="w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5"></span>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-4 mb-8">
            {[
              { name: 'Home', link: '#home', id: 'home' },
              { name: 'About', link: '#who-am-i', id: 'who-am-i' },
              { name: 'Skills', link: '#technologies', id: 'technologies' },
              { name: 'Experience', link: '#experience', id: 'experience' },
              { name: 'Education', link: '#education', id: 'education' },
              { name: 'Contact', link: '#contact', id: 'contact' }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`block py-3 px-4 text-base transition-colors duration-200 ${activeSection === item.id
                    ? 'text-orange-400 bg-blue-900 border-l-4 border-orange-400'
                    : 'text-blue-200 hover:text-orange-400 hover:bg-blue-900'
                    }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Media Icons */}
          <div className="border-t border-blue-800 pt-6">
            <h3 className="text-blue-300 text-sm font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Lxmokdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                <FaGithub className="text-black text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/lamia-koudri-054130297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                <FaLinkedin className="text-black text-lg" />
              </a>
              <a
                href="mailto:lamia.koudri@g.enp.edu.dz"
                className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                <FaEnvelope className="text-black text-lg" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>


      {/* Clean Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center py-32 px-8 min-h-screen pt-24">
        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KOUDRI Lamia
          </motion.h1>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Data Science & AI Engineer', 2000,
                'Web Developer', 2000,
                'UI/UX Designer', 2000,
                'Video Editor', 2000,
                'Creative Animator', 2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-slate-300 font-medium"
            />
          </motion.div>

          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative digital solutions through data science,
            artificial intelligence, and modern web technologies.
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
<section id="who-am-i" className="py-20 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6">
          About Me
        </h2>

        <p className="text-lg text-blue-200 leading-relaxed mb-6">
          I am a Data Science & Artificial Intelligence engineering student at the 
          National Polytechnic School of Algiers (ENP), specializing in intelligent systems, 
          hybrid NLP architectures, and scalable software design.
        </p>

        <p className="text-blue-300 leading-relaxed mb-6">
          My work focuses on designing secure and explainable AI systems — including 
          neuro-symbolic NLP agents, RAG-based document retrieval solutions, and 
          structured knowledge extraction pipelines for institutional environments 
          such as banking and air traffic control systems.
        </p>

        <p className="text-blue-300 leading-relaxed">
          Beyond AI, I build full-stack and cross-platform applications using 
          Next.js, Flutter, and Firebase, applying Clean Architecture principles, 
          role-based access control, and scalable database modeling to deliver 
          reliable, production-ready digital solutions.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/assets/certificate.jpeg"
          alt="Certificate"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>



      {/* Skills Section */}
      <section id="technologies" className="py-20 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative z-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Here are the tools and technologies I work with to bring ideas to life
            </p>
          </div>

          <SkillsCarousel />
        </div>
      </section>

      {/* Experience Section */}

      <section id="experience" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">Experience</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              A journey through my professional experiences and personal projects
            </p>
          </div>

          <ExperienceCarousel />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">Education</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              My academic journey in engineering and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                degree: "Engineering Degree",
                field: "Data Science & Artificial Intelligence",
                institution: "École Nationale Polytechnique (ENP) Algiers",
                period: "2022 - 2025",
                status: "In Progress",
                description: "Comprehensive engineering program focusing on machine learning, data analysis, and AI applications in real-world scenarios.",
                highlights: [
                  "BDD (Bases de Données)",
                  "Probabilités et Statistiques",
                  "Méthodes de Programmation Avancées",
                  "Traitement Numérique du Signal",
                  "Système d'Exploitation",
                  "Théorie de l'Information",
                  "Interface Homme Machine",
                  "Gestion de Projets"
                ]
              },
              {
                degree: "Preparatory Class",
                field: "Mathematics & Physics",
                institution: "École Nationale Polytechnique (ENP) Algiers",
                period: "2020 - 2022",
                status: "Completed",
                description: "Intensive two-year preparatory program covering advanced mathematics, physics, and engineering sciences.",
                highlights: [
                  "Physique",
                  "Chimie",
                  "Analyse",
                  "Électricité",
                  "Électronique",
                  "Algèbre",
                  "Informatique (Programmation, BDD, Graph Theory)",
                  "Mécanique des Fluides",
                  "Résistance des Matériaux",
                  "Mécanique Rationnelle"
                ]
              }
            ].map((edu, i) => (
              <div
                key={i}
                className=" border-2 border-blue-600 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-orange-400 hover:shadow-orange-500/10 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 font-medium text-lg mb-1">{edu.field}</p>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-100 text-sm font-medium block">{edu.period}</span>
                    <span className={`mt-1 px-2 py-1 rounded-full text-xs font-medium ${edu.status === 'Completed'
                      ? 'bg-orange-900/50 text-orange-300 border border-orange-700'
                      : 'bg-yellow-900/50 text-yellow-300 border border-yellow-700'
                      }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 mb-4 leading-relaxed text-sm">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-gray-300 text-sm font-medium mb-2">
                    {edu.status === 'Completed' ? 'Cours suivis:' : 'Cours principaux:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="bg-blue-600 text-blue-100 px-3 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">Get In Touch</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Ready to collaborate or have a project in mind? Let&apos;s discuss how we can work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className=" border-2 border-blue-600 p-8 rounded-lg shadow-sm hover:border-orange-400 hover:shadow-orange-500/10 transition-all duration-200">
                <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                  Let&apos;s Connect
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-blue-200 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-100 text-sm">Email</p>
                      <a
                        href="mailto:lamia.koudri@g.enp.edu.dz"
                        className="text-sky-700 hover:text-blue-800 transition-colors"
                      >
                        lamia.koudri@g.enp.edu.dz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-blue-200 text-xl">📞</span>
                    </div>
                    <div>
                      <p className="text-gray-100 text-sm">Phone</p>
                      <p className="text-sky-700 hover:text-blue-800 transition-colors">+213 553307623</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <FaLinkedin className="text-blue-200 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-100 text-sm">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/lamia-koudri-054130297"
                        className="text-sky-700 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/lamia-koudri
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <FaGithub className="text-blue-200 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-100 text-sm">GitHub</p>
                      <a
                        href="https://github.com/Lxmokdr"
                        className="text-sky-700 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/Lxmokdr
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Quick Response</h4>
                <p className="text-blue-200 text-sm">
                  I typically respond within 24 hours. For urgent matters, feel free to call directly!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className=" border-2 border-blue-600 p-8 rounded-lg shadow-sm hover:border-orange-400 hover:shadow-orange-500/10 transition-all duration-200">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-200 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-200 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-slate-900 to-blue-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                KOUDRI Lamia
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Data Science & AI Engineer passionate about creating innovative digital solutions that make a difference.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', link: '#home' },
                  { name: 'About', link: '#who-am-i' },
                  { name: 'Skills', link: '#technologies' },
                  { name: 'Experience', link: '#experience' },
                  { name: 'Education', link: '#education' },
                  { name: 'Contact', link: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-blue-200 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Lxmokdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaGithub className="text-white text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lamia-koudri-054130297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaLinkedin className="text-white text-lg" />
                </a>
                <a
                  href="mailto:lamia.koudri@g.enp.edu.dz"
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaEnvelope className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              © 2024 KOUDRI Lamia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
