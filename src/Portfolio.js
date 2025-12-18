import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  // Default to "web" since all current projects are in this category
  const [activeTab, setActiveTab] = useState('web');

  useEffect(() => {
    // Fade in animations
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 75, color: '#F7DF1E' },
    { name: 'HTML', level: 90, color: '#007396' },
    { name: 'Node.js', level: 30, color: '#007396' },
    { name: 'CSS/SCSS', level: 92, color: '#1572B6' },
    { name: 'Tailwind CSS', level: 50, color: '#007396' },
    { name: 'Bootstrap', level: 80, color: '#007396' },
    { name: 'Material-UI', level: 80, color: '#007396' },
    { name: 'Git', level: 70, color: '#007396' },
  
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Learning Platform',
      description: 'Modern e-learning platform with course management, secure payments, and an admin dashboard for instructors.',
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      image: '🛒',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Student Management System',
      description: 'Student information system that helps college faculty manage students, attendance, and records in real time.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      category: 'web',
      image: '📋',
      link: 'https://student-information-system-zeta.vercel.app/',
      github: 'https://github.com/iips-summer-internship-2025/Student-Information-System'
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((project) => project.category === activeTab);

  const experiences = [
    {
      company: 'Internship at IIPS',
      role: 'Frontend Developer',
      period: 'May 2025 - July 2025',
      description: 'Worked on a student information system for a college, focusing on a clean and responsive frontend.',
      achievements: [
        'Developed key frontend screens for a Student Information System used by college faculty',
        'Implemented responsive layouts and components using React and Tailwind CSS',
        'Collaborated with the team on UI decisions to keep the experience simple and intuitive'
      ]
    },
  ];
  
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-new">
      <div className="layout-shell">
        {/* Side Rail Navigation */}
        <aside className="side-rail">
          <div className="side-brand">
            <div className="side-logo">KS</div>
            <div className="side-meta">
              <span className="side-name">Kushagra Singh Bais</span>
              <span className="side-role">Frontend Developer</span>
            </div>
          </div>

          <nav className="side-nav">
            <button onClick={(e) => handleNavClick(e, '#home')} className="side-nav-link">
              <span className="side-nav-dot" /> Home
            </button>
            <button onClick={(e) => handleNavClick(e, '#about')} className="side-nav-link">
              <span className="side-nav-dot" /> About
            </button>
            <button onClick={(e) => handleNavClick(e, '#skills')} className="side-nav-link">
              <span className="side-nav-dot" /> Skills
            </button>
            <button onClick={(e) => handleNavClick(e, '#projects')} className="side-nav-link">
              <span className="side-nav-dot" /> Projects
            </button>
            <button onClick={(e) => handleNavClick(e, '#experience')} className="side-nav-link">
              <span className="side-nav-dot" /> Experience
            </button>
            <button onClick={(e) => handleNavClick(e, '#contact')} className="side-nav-link">
              <span className="side-nav-dot" /> Contact
            </button>
          </nav>

          <div className="side-footer">
            <div className="side-location">Based in India</div>
            <div className="side-socials">
              <a href="https://github.com/Kushagra6009" target="_blank" rel="noopener noreferrer">
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/kushagra-singh-638175317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                IN
              </a>
              <a href="mailto:kushagrasingh6009@gmail.com" target="_blank" rel="noopener noreferrer">
                Mail
              </a>
            </div>
          </div>
        </aside>

        {/* Main Scroll Area */}
        <main className="content-rail">
          {/* Hero Section */}
          <section id="home" className="section-panel hero-panel">
            <div className="hero-inner">
              <div className="hero-text-new">
                <span className="hero-greeting">Hi, I'm</span>
                <h1 className="hero-name">
                  <span className="name-first">Kushagra Singh</span>
                  <span className="name-last">Bais</span>
                </h1>
                <h2 className="hero-title">I design motion‑rich experiences for the web.</h2>
                <p className="hero-description">
                  I'm a frontend-focused developer who loves crafting smooth, animated interfaces with React, modern CSS,
                  and clean, maintainable code. I enjoy turning ideas into polished products that feel fast, intuitive,
                  and visually satisfying.
                </p>
                <div className="hero-buttons-new">
                  <a
                    href="#projects"
                    className="btn-new btn-primary-new"
                    onClick={(e) => handleNavClick(e, '#projects')}
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="btn-new btn-outline-new"
                    onClick={(e) => handleNavClick(e, '#contact')}
                  >
                    Get In Touch
                  </a>
                </div>

                <div className="hero-stats-row">
                  <div className="hero-stat">
                    <span className="hero-stat-number">{projects.length}+</span>
                    <span className="hero-stat-label">Projects</span>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-number">{skills.length}</span>
                    <span className="hero-stat-label">Core Skills</span>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-number">2025</span>
                    <span className="hero-stat-label">Internship @ IIPS</span>
                  </div>
                </div>
              </div>

              <div className="hero-orbit">
                <div className="hero-orbit-card fade-in">
                  <div className="hero-orbit-title">Currently crafting</div>
                  <div className="hero-orbit-main">{projects[1]?.title}</div>
                  <p className="hero-orbit-desc">
                    {projects[1]?.description}
                  </p>
                  <div className="hero-orbit-tags">
                    {projects[1]?.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="hero-orbit-ring hero-orbit-ring-one" />
                <div className="hero-orbit-ring hero-orbit-ring-two" />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section-panel about-panel">
            <div className="about-grid">
              <div className="about-text-new fade-in">
                <h2 className="section-title-new">
                  <span className="title-number">01.</span>
                  About Me
                </h2>
                <p>
                  Hello! I'm a frontend developer who enjoys turning complex ideas into simple, beautiful interfaces.
                  I love experimenting with animations, micro-interactions, and modern UI patterns that make products
                  feel alive and engaging.
                </p>
                <p>
                  My focus is on writing clean, reusable code and building experiences that are fast, accessible,
                  and look great on any screen size.
                </p>
                <p>Here are a few of the technologies I've been working with recently:</p>
                <ul className="tech-list">
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>Java</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="about-image-new fade-in">
                <div className="image-wrapper">
                  <div className="image-placeholder">KS</div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section-panel skills-panel">
            <div className="container-new">
              <h2 className="section-title-new">
                <span className="title-number">02.</span>
                Skills & Expertise
              </h2>
              <div className="skills-grid-new">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card-new fade-in">
                    <div className="skill-header-new">
                      <h3>{skill.name}</h3>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-wrapper">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-panel projects-panel">
            <div className="container-new">
              <h2 className="section-title-new">
                <span className="title-number">03.</span>
                Selected Projects
              </h2>
              <div className="project-filters-new">
                {['all', 'web', 'mobile', 'ai', 'blockchain'].map((tab) => (
                  <button
                    key={tab}
                    className={activeTab === tab ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="projects-grid-new">
                {filteredProjects.length === 0 ? (
                  <p>No projects available for this category yet.</p>
                ) : (
                  filteredProjects.map((project) => (
                    <div key={project.id} className="project-card-new fade-in">
                      <div className="project-header-new">
                        <div className="project-icon">{project.image}</div>
                        <div className="project-links-new">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-icon"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-icon"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title-new">{project.title}</h3>
                      <p className="project-description-new">{project.description}</p>
                      <div className="project-tags-new">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="project-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section-panel experience-panel">
            <div className="container-new">
              <h2 className="section-title-new">
                <span className="title-number">04.</span>
                Where I've Worked
              </h2>
              <div className="experience-timeline-new">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item-new fade-in">
                    <div className="experience-header-new">
                      <h3>{exp.role}</h3>
                      <span className="experience-company-new">@{exp.company}</span>
                    </div>
                    <span className="experience-period-new">{exp.period}</span>
                    <ul className="experience-list-new">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-panel contact-panel">
            <div className="container-new">
              <h2 className="section-title-new contact-title">
                <span className="title-number">05.</span>
                Get In Touch
              </h2>
              <p className="contact-text-new">
                I'm currently looking for new opportunities and interesting collaborations. Whether you have a question
                about a project, want feedback on something you're building, or just want to say hi, my inbox is open.
              </p>
              <a href="mailto:kushagra6009@gmail.com" className="btn-new btn-primary-new contact-btn">
                Say Hello
              </a>
              <div className="social-links-new">
                <a
                  href="https://github.com/Kushagra6009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-new"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kushagra-singh-638175317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-new"
                >
                  LinkedIn
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link-new">
                  Twitter
                </a>
                <a
                  href="mailto:kushagrasingh6009@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-new"
                >
                  Email
                </a>
              </div>
            </div>
          </section>

          {/* Footer
          <footer className="footer-new">
            <div className="container-new">
              <p>Designed & Built by Kushagra Singh Bais</p>
              <p className="footer-year">© {new Date().getFullYear()}</p>
            </div>
          </footer> */}
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
