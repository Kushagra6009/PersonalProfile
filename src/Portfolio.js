import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Portfolio.css';

const Portfolio = () => {
  const heroRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Hero animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.hero-content h1', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      })
      .from('.hero-content p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.7')
      .from('.hero-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.7')
      .from('.hero-stats .stat-item', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.5');

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.skill-item, .project-card, .experience-item');
          gsap.from(elements, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.15,
            ease: 'power3.out',
            onComplete: () => observer.unobserve(entry.target)
          });
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe sections
    if (skillsSectionRef.current) observer.observe(skillsSectionRef.current);
    if (projectsSectionRef.current) observer.observe(projectsSectionRef.current);
    if (experienceSectionRef.current) observer.observe(experienceSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 95, icon: '📜' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'CSS/SCSS', level: 92, icon: '🎨' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Git', level: 90, icon: '📦' },
    { name: 'AWS', level: 75, icon: '☁️' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: '📋',
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot powered by machine learning for customer support with natural language processing capabilities.',
      tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      image: '🤖',
      category: 'ai',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: '💪',
      category: 'mobile',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analytics with real-time charts, filtering, and export capabilities.',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: '📊',
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'Secure voting system built on blockchain technology ensuring transparency and immutability.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: '⛓️',
      category: 'blockchain',
      link: '#',
      github: '#'
    },
  ];

  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Full-Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications, mentoring junior developers, and implementing best practices.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      company: 'StartupXYZ',
      role: 'Full-Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications, collaborated with cross-functional teams, and contributed to product strategy.',
      achievements: [
        'Built 10+ production applications',
        'Reduced load time by 60%',
        'Implemented microservices architecture'
      ]
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2018 - 2020',
      description: 'Worked with various clients to build custom web solutions, e-commerce platforms, and responsive websites.',
      achievements: [
        'Delivered 50+ projects',
        'Maintained 98% client satisfaction',
        'Specialized in React and Node.js'
      ]
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>👋 Hello, I'm</span>
          </div>
          <h1>
            <span className="gradient-text">Full-Stack Developer</span>
            <br />
            & Creative Problem Solver
          </h1>
          <p>
            I build exceptional digital experiences through clean code, 
            innovative solutions, and attention to detail.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#projects')}>View My Work</a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleNavClick(e, '#contact')}>Get In Touch</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section" ref={skillsSectionRef}>
        <div className="section-container">
          <h2 className="section-title">
            <span className="section-number">01.</span>
            Skills & Technologies
          </h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" ref={projectsSectionRef}>
        <div className="section-container">
          <h2 className="section-title">
            <span className="section-number">02.</span>
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of my recent work and side projects
          </p>
          
          <div className="project-filters">
            <button 
              className={activeTab === 'all' ? 'active' : ''}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button 
              className={activeTab === 'web' ? 'active' : ''}
              onClick={() => setActiveTab('web')}
            >
              Web
            </button>
            <button 
              className={activeTab === 'mobile' ? 'active' : ''}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile
            </button>
            <button 
              className={activeTab === 'ai' ? 'active' : ''}
              onClick={() => setActiveTab('ai')}
            >
              AI/ML
            </button>
            <button 
              className={activeTab === 'blockchain' ? 'active' : ''}
              onClick={() => setActiveTab('blockchain')}
            >
              Blockchain
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-emoji">{project.image}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>📂</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section" ref={experienceSectionRef}>
        <div className="section-container">
          <h2 className="section-title">
            <span className="section-number">03.</span>
            Work Experience
          </h2>
          <p className="section-subtitle">
            My professional journey and career milestones
          </p>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-marker"></div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3>{exp.role}</h3>
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>✓ {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="section-number">04.</span>
            Get In Touch
          </h2>
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>&copy; 2024 Portfolio. Designed with ❤️</p>
      </footer>
    </div>
  );
};

export default Portfolio;

