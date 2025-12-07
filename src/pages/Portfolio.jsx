import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, Code, Database, Layers, Award, GraduationCap, MapPin, ExternalLink, Terminal, Sparkles, Cpu, Globe, Briefcase, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Software Engineer";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setTimeout(() => setIsTyping(false), 2000);
    } else if (!isTyping && typedText.length > 0) {
      const timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIsTyping(true), 500);
    }
  }, [typedText, isTyping]);

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
      { name: 'React.js', level: 85, color: 'from-cyan-500 to-blue-500' },
      { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-emerald-500' }
    ],
    backend: [
      { name: 'Node.js', level: 82, color: 'from-green-500 to-emerald-500' },
      { name: 'PHP', level: 78, color: 'from-purple-500 to-indigo-500' }
    ],
    languages: [
      { name: 'C', level: 75, color: 'from-blue-600 to-blue-800' },
      { name: 'Java', level: 80, color: 'from-red-600 to-orange-600' },
      { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
      { name: 'PHP', level: 78, color: 'from-purple-500 to-indigo-500' }
    ]
  };

  const projects = [
    {
      title: 'Portfolio Showcase',
      description: 'A collection of modern web applications featuring responsive designs and interactive UIs',
      tech: ['React', 'Tailwind', 'JavaScript'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Full-Stack Applications',
      description: 'Complete web solutions with backend integration and database management',
      tech: ['Node.js', 'PHP', 'MySQL'],
      gradient: 'from-green-600 to-teal-600'
    },
    {
      title: 'UI/UX Experiments',
      description: 'Creative frontend projects exploring modern design patterns and animations',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-pink-600 to-rose-600'
    }
  ];

  const experience = [
    {
      title: 'Self-Taught Developer',
      period: '2020 - Present',
      description: 'Building diverse web applications and continuously learning new technologies',
      icon: <Code size={24} />
    },
    {
      title: 'Full-Stack Journey',
      period: '2022 - Present',
      description: 'Mastered both frontend and backend development with modern frameworks',
      icon: <Layers size={24} />
    },
    {
      title: 'Computer Science Student',
      period: '2023 - Present',
      description: 'Pursuing formal education at University of Eastern Africa, Baraton',
      icon: <GraduationCap size={24} />
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated cursor follower */}
      <div 
        className="fixed w-6 h-6 rounded-full border-2 border-blue-500 pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        .glow-effect {
          animation: glow 2s infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrollY > 50 ? (darkMode ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg' : 'bg-white/95 backdrop-blur-xl shadow-lg') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-xl shadow-lg transition-transform hover:scale-110 ${scrollY > 50 ? 'rotate-0' : 'rotate-12'}`}>
                  JS
                </div>
              </div>
              <span className="text-xl font-bold ml-2">Jacob Sihul</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Skills', 'Projects', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative font-medium transition-colors hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Sparkles size={16} className="text-blue-500" />
              <span className="text-sm">Available for opportunities</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Jacob Sihul
              </span>
            </h1>
            
            <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold min-h-[3rem]">
              <Terminal className="text-green-500" size={28} />
              <span>{typedText}</span>
              <span className="w-0.5 h-8 bg-blue-500 animate-pulse" />
            </div>

            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl`}>
              Crafting exceptional digital experiences from concept to deployment. 
              Passionate about clean code, modern design, and innovative solutions.
            </p>

            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-blue-500" />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Nairobi, Kenya</span>
              <GraduationCap size={20} className="text-purple-500 ml-4" />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>UEAB Student</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/Geeksjayjay388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <Github size={20} />
                View Projects
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:jacob@example.com"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <Mail size={20} />
                Contact
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Linkedin size={20} className="text-blue-500" />
              </a>
              <a href="https://github.com/Geeksjayjay388" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Github size={20} />
              </a>
              <a href="mailto:jacob@example.com" className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Mail size={20} className="text-red-500" />
              </a>
            </div>
          </div>

          {/* Right side - Image placeholder with cool effect */}
          <div className="relative z-10">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Image container */}
              <div className={`relative rounded-3xl overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'} shadow-2xl`}>
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                  {/* Placeholder for your photo - replace with <img src="your-photo.jpg" alt="Jacob Sihul" className="w-full h-full object-cover" /> */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-5xl font-bold">
                      JS
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Add your photo here
                    </p>
                    <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Replace the placeholder div with your image
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-pulse">
                <Code className="text-blue-500" size={32} />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-500/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                <Cpu className="text-purple-500" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-500" />
        </button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Technologies I've mastered on my journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl p-8 backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all hover:scale-105 shadow-xl`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                  <Layers size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl p-8 backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-purple-500 transition-all hover:scale-105 shadow-xl`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                  <Database size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl p-8 backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-green-500 transition-all hover:scale-105 shadow-xl`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl">
                  <Code size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore my portfolio on GitHub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all hover:scale-105 shadow-xl`}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <Globe size={80} className="text-white/20 absolute" />
                  <Code size={60} className="text-white z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://github.com/Geeksjayjay388" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Github size={24} />
              View All Projects on GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              From beginner to full-stack developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} hidden md:block`} />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-6 shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all`}>
                      <div className="flex items-center gap-3 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <h3 className="text-xl font-bold flex-1">{exp.title}</h3>
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                              {exp.icon}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                              {exp.icon}
                            </div>
                            <h3 className="text-xl font-bold flex-1">{exp.title}</h3>
                          </>
                        )}
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                        {exp.period}
                      </p>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t py-12`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">
                JS
              </div>
              <div>
                <p className="font-bold">Jacob Sihul</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Software Engineer • Kenya
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Linkedin size={20} className="text-blue-500" />
              </a>
              <a href="https://github.com/Geeksjayjay388" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Github size={20} />
              </a>
              <a href="mailto:jacob@example.com" className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Mail size={20} className="text-red-500" />
              </a>
            </div>

            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              © 2024 Jacob Sihul. Crafted with passion and code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}