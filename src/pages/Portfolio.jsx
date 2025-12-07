import React, { useState, useEffect } from 'react';
import { Github, Calendar, Linkedin, Mail, Moon, Sun, FileCode, Layout, Coffee, Zap, GitBranch, Cloud, Monitor, Brain, AlertCircle, Code, Database, Layers, Award, GraduationCap, MapPin, ExternalLink, Terminal, Sparkles, Cpu, Globe, Briefcase, ChevronDown, Users, Server, Smartphone, CheckCircle, Send } from 'lucide-react';

import { Cpu as CpuIcon } from 'lucide-react';
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Full-Stack Developer & AI Enthusiast";

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
      }, 80);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setTimeout(() => setIsTyping(false), 2500);
    } else if (!isTyping && typedText.length > 0) {
      const timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIsTyping(true), 1000);
    }
  }, [typedText, isTyping]);

  // Programming Languages with Icons
  const programmingLanguages = [
    { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500', icon: <FileCode size={20} /> },
    { name: 'CSS3', level: 85, color: 'from-blue-500 to-cyan-500', icon: <Layout size={20} /> },
    { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-orange-500', icon: <Code size={20} /> },
    { name: 'C', level: 75, color: 'from-blue-600 to-blue-800', icon: <CpuIcon size={20} /> },
    { name: 'Java', level: 70, color: 'from-red-600 to-orange-600', icon: <Coffee size={20} /> },
    { name: 'Node.js', level: 78, color: 'from-green-500 to-emerald-500', icon: <Server size={20} /> }
  ];

  // Tech Stack with Icons
  const techStack = {
    frontend: [
      { name: 'HTML5', icon: <FileCode size={20} /> },
      { name: 'CSS3', icon: <Layout size={20} /> },
      { name: 'JavaScript', icon: <Code size={20} /> },
      { name: 'Tailwind CSS', icon: <Sparkles size={20} /> },
      { name: 'React', icon: <Cpu size={20} /> }
    ],
    backend: [
      { name: 'Node.js', icon: <Server size={20} /> },
      { name: 'Express.js', icon: <Zap size={20} /> },
      { name: 'Postman', icon: <Send size={20} /> }
    ],
    tools: [
      { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
      { name: 'Vercel', icon: <Cloud size={20} /> },
      { name: 'Render', icon: <Zap size={20} /> },
      { name: 'VS Code', icon: <Monitor size={20} /> }
    ]
  };

  // Certifications
  const certifications = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      issuer: 'Moringa School',
      date: '2024',
      description: 'Comprehensive certification in Artificial Intelligence, Machine Learning, and Deep Learning concepts',
      icon: <Brain size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      issuer: 'Moringa School',
      date: '2023',
      description: 'Complete web development certification covering frontend and backend technologies',
      icon: <Layers size={24} />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: 'Campus Marketplace',
      description: 'Second-hand marketplace for university students with real-time chat and payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      gradient: 'from-blue-600 to-purple-600',
      status: 'Live',
      github: 'https://github.com/Geeksjayjay388/campus-marketplace',
      live: 'https://campus-market.vercel.app',
      placeholder: true
    },
    {
      id: 2,
      title: 'AI-Powered Study Assistant',
      description: 'Intelligent study tool using AI to generate summaries and practice questions',
      tech: ['React', 'Python', 'OpenAI API', 'FastAPI'],
      gradient: 'from-green-600 to-teal-600',
      status: 'In Progress',
      github: '#',
      live: '#',
      placeholder: true
    },
    {
      id: 3,
      title: 'Portfolio Website v3',
      description: 'Modern portfolio with animations, dark mode, and interactive elements',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-pink-600 to-rose-600',
      status: 'Live',
      github: 'https://github.com/Geeksjayjay388/portfolio',
      live: 'https://jacobsihul.vercel.app',
      placeholder: false
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, ${darkMode ? '#374151' : '#9CA3AF'} 1px, transparent 1px),
                            linear-gradient(to bottom, ${darkMode ? '#374151' : '#9CA3AF'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? (darkMode ? 'bg-gray-900/95 backdrop-blur-xl shadow-xl' : 'bg-white/95 backdrop-blur-xl shadow-xl') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-xl shadow-lg transition-transform hover:scale-105`}>
                  JS
                </div>
              </div>
              <div>
                <span className="text-xl font-bold">Jacob Sihul</span>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Software Engineer</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'languages', label: 'Languages' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 hover:text-blue-500 ${activeSection === item.id ? 'text-blue-500' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <CheckCircle size={16} className="text-green-500" />
              <span className="text-sm font-medium">Open to Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                Jacob Sihul
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold min-h-[3.5rem] flex items-center">
              <Terminal className="text-green-500 mr-3" size={28} />
              <span className="font-mono">{typedText}</span>
              <span className="w-0.5 h-8 bg-blue-500 animate-pulse ml-2" />
            </div>

            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl leading-relaxed`}>
              A passionate Computer Science student at UEAB, specializing in full-stack web development 
              and AI. I build scalable solutions that solve real-world problems.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-blue-500" />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={20} className="text-purple-500" />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>UEAB Computer Science</span>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              <a 
                href="https://github.com/Geeksjayjay388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all hover:scale-105 shadow-xl font-semibold"
              >
                <Github size={22} />
                View GitHub
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all hover:scale-105 border-2 ${darkMode ? 'border-gray-700 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} font-semibold`}
              >
                <Mail size={22} />
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative z-10">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              {/* Photo Container */}
              <div className={`relative rounded-3xl overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'} shadow-2xl`}>
                <div className="aspect-square relative">
                  {/* Replace this with your actual photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl font-bold shadow-2xl">
                        JS
                      </div>
                      <p className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Jacob Sihul
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Full-Stack Developer
                      </p>
                      {/* Instructions */}
                      <div className="mt-6 p-4 rounded-lg bg-black/20 backdrop-blur-sm">
                        <p className="text-xs text-gray-300">
                          Replace with: <code className="block mt-1 bg-black/30 p-2 rounded">&lt;img src="/your-photo.jpg" className="w-full h-full object-cover" /&gt;</code>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                  <Code size={20} className="text-white" />
                  <span className="text-white font-semibold">Developer</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <Brain size={20} className="text-white" />
                  <span className="text-white font-semibold">AI Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        >
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors`}>
            Explore My Skills
          </span>
          <ChevronDown size={32} className="text-blue-500 animate-bounce" />
        </button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, items], idx) => (
              <div 
                key={category}
                className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl p-8 backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all duration-500 shadow-xl hover:shadow-2xl`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl ${
                    idx === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                    idx === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                    'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    {idx === 0 ? <Layout size={28} className="text-white" /> :
                     idx === 1 ? <Server size={28} className="text-white" /> :
                     <Code size={28} className="text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold">{category}</h3>
                </div>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700/20 transition-colors">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section id="languages" className={`py-32 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Programming Languages
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              My proficiency in various programming languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div 
                key={index}
                className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl p-6 backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all duration-500 shadow-xl hover:shadow-2xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${lang.color}`}>
                      {lang.icon}
                    </div>
                    <h3 className="text-xl font-bold">{lang.name}</h3>
                  </div>
                  <span className={`text-lg font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {lang.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className={`h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${lang.color} transition-all duration-1000`}
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
                
                {/* Skill Level Indicator */}
                <div className="flex justify-between mt-2 text-sm">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Beginner</span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Intermediate</span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Advanced</span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              My recent work and projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all duration-500 shadow-xl hover:shadow-2xl`}
              >
                {/* Project Image/Placeholder */}
                <div className={`h-48 relative bg-gradient-to-br ${project.gradient}`}>
                  {project.placeholder ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Globe size={48} className="text-white/50 mx-auto mb-4" />
                        <p className="text-white/80 font-medium">Project Preview</p>
                        <p className="text-white/60 text-sm mt-2">Add screenshots here</p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code size={48} className="text-white/50" />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 rounded-xl text-center font-medium transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Github size={18} />
                        Code
                      </div>
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 rounded-xl text-center font-medium bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 transition-all`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <ExternalLink size={18} />
                        Live Demo
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className={`inline-block p-4 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <AlertCircle size={16} className="inline mr-2" />
                More projects coming soon! Currently working on AI and web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-32 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Validating skills through recognized programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className={`group ${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl p-8 backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all duration-500 shadow-xl hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color}`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{cert.title}</h3>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                  {cert.description}
                </p>
                
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Skills gained: {cert.title.includes('AI') ? 'AI, ML, Deep Learning' : 'Full-Stack Development'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Looking for a developer or have an interesting project? Let's connect!
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <a 
              href="mailto:jacobsihul@example.com"
              className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all hover:scale-105 shadow-xl"
            >
              <Mail size={24} />
              <div className="text-left">
                <div className="text-sm opacity-80">Email Me</div>
                <div className="font-semibold">jacobsihul@example.com</div>
              </div>
            </a>
            
            <a 
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 px-8 py-4 rounded-xl transition-all hover:scale-105 border-2 ${darkMode ? 'border-gray-700 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}
            >
              <Calendar size={24} className="text-blue-500" />
              <div className="text-left">
                <div className="text-sm opacity-80">Schedule a Call</div>
                <div className="font-semibold">Book a Meeting</div>
              </div>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
            </div>
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-3xl font-bold text-green-500 mb-2">6</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Languages</div>
            </div>
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-3xl font-bold text-purple-500 mb-2">2</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certifications</div>
            </div>
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-3xl font-bold text-pink-500 mb-2">2+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t py-12`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-lg">
                JS
              </div>
              <div>
                <p className="font-bold text-lg">Jacob Sihul</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Full-Stack Developer • AI Enthusiast • UEAB Student
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" 
                 className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-blue-900/30' : 'bg-gray-200 hover:bg-blue-100'}`}>
                <Linkedin size={20} className="text-blue-500" />
              </a>
              <a href="https://github.com/Geeksjayjay388" target="_blank" rel="noopener noreferrer"
                 className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Github size={20} />
              </a>
              <a href="mailto:jacobsihul@example.com"
                 className={`p-3 rounded-xl transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-red-900/30' : 'bg-gray-200 hover:bg-red-100'}`}>
                <Mail size={20} className="text-red-500" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} Jacob Sihul
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-500'} mt-1`}>
                Built with React, Tailwind CSS, and passion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}