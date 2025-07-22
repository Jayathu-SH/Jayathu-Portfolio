import { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaServer,
  FaDatabase,
  FaGlobe,
  FaStar,
  FaCalendarAlt,
  FaArrowRight,
  FaDownload,
  FaEye
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { GiBrain } from 'react-icons/gi';
import { MdSmartphone } from 'react-icons/md';
import jaye from './assets/jaye.jpg'

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 95, icon: <FaCode className="w-5 h-5" /> },
    { name: 'Node.js', level: 90, icon: <FaServer className="w-5 h-5" /> },
    { name: 'Python', level: 88, icon: <FaCode className="w-5 h-5" /> },
    { name: 'AI/ML', level: 85, icon: <GiBrain className="w-5 h-5" /> },
    { name: 'MongoDB', level: 82, icon: <FaDatabase className="w-5 h-5" /> },
    { name: 'React Native', level: 80, icon: <MdSmartphone className="w-5 h-5" /> }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'Full-stack e-commerce solution with ML-based recommendation engine and real-time analytics.',
      tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Task Management App',
      description: 'Intelligent task manager with AI-driven priority suggestions and team collaboration features.',
      tech: ['React Native', 'Firebase', 'OpenAI API'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Scalable chat app with WebSocket integration and AI-powered message moderation.',
      tech: ['Vue.js', 'Socket.io', 'Express', 'Redis'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data analysis with machine learning insights.',
      tech: ['D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading development of AI-integrated web applications and mentoring junior developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description: 'Developed scalable web applications and implemented AI/ML solutions for client projects.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2020 - 2021',
      description: 'Built responsive web applications and contributed to mobile app development.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="block">Hello, I'm</span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    Jayathu Sanka
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300">
                  Full Stack Developer & AI Enthusiast
                </p>
                <p className="text-lg text-gray-400 max-w-lg">
                  Crafting innovative digital experiences with cutting-edge technology. 
                  Passionate about building scalable applications and exploring the frontiers of artificial intelligence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <FaDownload className="w-5 h-5" />
                    Download Resume
                </button>
                <button className="border border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
                  <FaEye className="w-5 h-5" />
                    View Work
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 absolute -top-10 -left-10"></div>
                <div className="w-72 h-72 bg-gradient-to-br from-gray-800 to-purple-900 rounded-full flex items-center justify-center relative overflow-hidden border-4 border-purple-500/30">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full overflow-hidden relative">
                    <img src={jaye} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with expertise in modern web technologies and artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 4 years of experience in full-stack development, I specialize in creating 
                robust, scalable applications that solve real-world problems. My journey began with 
                traditional web development and has evolved to include cutting-edge AI technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about staying at the forefront of technology, constantly learning new 
                frameworks and exploring innovative solutions. My goal is to bridge the gap between 
                complex technical capabilities and intuitive user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <FaCode className="w-5 h-5 text-purple-400" />
                  <span>Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <GiBrain className="w-5 h-5 text-purple-400" />
                  <span>AI/ML Integration</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <FaGlobe className="w-5 h-5 text-purple-400" />
                  <span>Cloud Architecture</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                  <div className="text-8xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">
              Expertise across the full technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="text-purple-400">{skill.icon}</div>
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-purple-400 ml-auto">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Vue.js', 'Node.js', 'Django'].map((tech) => (
              <div key={tech} className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-gray-300">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">
              Showcasing my latest work and innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FaStar className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-6xl">🎨</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <FaGithub className="w-5 h-5" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <FiExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-400">
              My professional journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="text-purple-400 font-semibold mb-2">{exp.company}</div>
                      <div className="text-gray-500 text-sm mb-3">{exp.period}</div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-purple-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">shjayathusanka@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">+9474 137 70 70</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400">Akuressa, Sri Lanka</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/Jayathu-SH" className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/jayathu-sanka" className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors resize-none"
              ></textarea>
              <button
                type="button"
                onClick={() => alert('Message sent! (Demo only)')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
            <p className="mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;