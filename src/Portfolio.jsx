import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Menu,
  Download
} from 'lucide-react';
import kaarthiPhoto from './Mypic.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'experience',
        'club-activities',
        'projects',
        'skills',
        'education',
        'contact',
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
            break;
          }
        }
      }

      const contactElement = document.getElementById('contact');
      if (
        contactElement &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 50
      ) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport =
            rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible((prev) => ({
            ...prev,
            [section]: isInViewport,
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const styles = {
    body: {
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: '#121212',
      color: '#ffffff',
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(18, 18, 18, 0.95)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(147, 51, 234, 0.2)',
      transition: 'all 0.3s ease',
      height: '64px',
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
    navLogo: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#ffffff',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexDirection: windowWidth < 768 ? 'column' : 'row',
      backgroundColor:
        windowWidth < 768 ? 'rgba(18, 18, 18, 0.95)' : 'transparent',
      position: windowWidth < 768 ? 'absolute' : 'static',
      top: windowWidth < 768 ? '64px' : 'auto',
      right: windowWidth < 768 ? '0' : 'auto',
      width: windowWidth < 768 ? '100%' : 'auto',
      alignItems: windowWidth < 768 ? 'flex-start' : 'center',
      padding: windowWidth < 768 ? '1rem 2rem' : '0',
      boxShadow:
        windowWidth < 768 && mobileMenuOpen
          ? '0 4px 12px rgba(0, 0, 0, 0.4)'
          : 'none',
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: 500,
      transition: 'color 0.3s ease, transform 0.2s ease',
      cursor: 'pointer',
      padding: windowWidth < 768 ? '0.75rem 0' : '0.5rem 0',
      position: 'relative',
      width: windowWidth < 768 ? '100%' : 'auto',
    },
    navLinkActive: {
      color: '#8b5cf6',
    },
    mobileMenuButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      display: windowWidth < 768 ? 'block' : 'none',
      padding: '0.5rem',
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 25%, #3b0764 50%, #5b21b6 75%, #8b5cf6 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '64px',
    },
    heroContent: {
      textAlign: 'center',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 2rem',
      marginTop: '2rem',
      animation: 'fadeInUp 1s ease-out',
    },
    heroPhoto: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      margin: '0 auto 2rem',
      border: '4px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
      overflow: 'hidden',
      position: 'relative',
      background:
        'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(147, 51, 234, 0.3))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroPhotoImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 800,
      background: 'linear-gradient(45deg, #ffffff, #f3e8ff, #d8b4fe)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      marginBottom: '1rem',
      textShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      color: '#ffffff',
      marginBottom: '1rem',
      fontWeight: 400,
    },
    heroDescription: {
      fontSize: '1.2rem',
      color: '#d1d5db',
      marginBottom: '3rem',
      maxWidth: '600px',
      margin: '0 auto 3rem',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '3rem',
    },
    socialLink: {
      color: '#ffffff',
      transition: 'all 0.3s ease',
      padding: '0.5rem',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
    },
    ctaButton: {
      padding: '1rem 2rem',
      backgroundColor: '#8b5cf6',
      color: '#ffffff',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    section: {
      padding: '6rem 2rem',
      maxWidth: '1280px',
      margin: '0 auto',
      scrollMarginTop: '100px',
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '4rem',
      color: '#8b5cf6',
      position: 'relative',
    },
    card: {
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      border: '1px solid rgba(147, 51, 234, 0.2)',
      borderRadius: '16px',
      padding: '2rem',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(12px)',
      position: 'relative',
      overflow: 'hidden',
    },
    aboutPhoto: {
      width: '300px',
      height: '400px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
      border: '2px solid rgba(147, 51, 234, 0.2)',
      background:
        'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(147, 51, 234, 0.2))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    aboutPhotoImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    grid: {
      display: 'grid',
      gap: '2rem',
    },
    gridTwoCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    },
    gridThreeCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    },
    gridFourCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    fadeIn: {
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease',
    },
    fadeInVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    slideInLeft: {
      opacity: 0,
      transform: 'translateX(-50px)',
      transition: 'all 0.8s ease',
    },
    slideInLeftVisible: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    slideInRight: {
      opacity: 0,
      transform: 'translateX(50px)',
      transition: 'all 0.8s ease',
    },
    slideInRightVisible: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    bgPrimary: {
      backgroundColor: '#121212',
    },
    bgSecondary: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
    },
    textPrimary: {
      color: '#ffffff',
    },
    textSecondary: {
      color: '#d1d5db',
    },
    textAccent: {
      color: '#8b5cf6',
    },
  };

  const cssString = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .photo-hover {
      transition: all 0.4s ease;
    }

    .photo-hover:hover {
      transform: scale(1.05);
      box-shadow: 0 25px 50px rgba(139, 92, 246, 0.4);
    }

    .card-hover:hover {
      transform: translateY(-8px);
      border-color: rgba(147, 51, 234, 0.6);
      box-shadow: 0 20px 40px rgba(147, 51, 234, 0.3);
    }

    .social-hover:hover {
      transform: translateY(-3px) scale(1.1);
      color: #8b5cf6;
      background: rgba(139, 92, 246, 0.2);
    }

    .cta-hover:hover {
      background: #7c3aed;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
    }

    .nav-hover {
      position: relative;
      transition: all 0.3s ease;
    }

    .nav-hover:hover {
      color: #8b5cf6 !important;
      transform: translateY(-2px);
    }

    .nav-hover::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: #8b5cf6;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .nav-hover:hover::after {
      width: 100%;
    }

    .project-tag {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(147, 51, 234, 0.6));
      color: #ffffff;
      padding: 0.3rem 0.9rem;
      borderRadius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      display: inline-block;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s ease;
    }

    .project-tag:hover {
      transform: scale(1.05);
    }

    .skill-icon {
      transition: all 0.3s ease;
    }

    .skill-card:hover .skill-icon {
      transform: scale(1.1);
      color: #8b5cf6;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 3rem !important;
      }
      .grid {
        grid-template-columns: 1fr !important;
      }

      .hero-photo {
        width: 150px !important;
        height: 150px !important;
      }

      .about-photo {
        width: 250px !important;
        height: 320px !important;
        margin: 0 auto !important;
      }
    }
  `;

  return (
    <div style={styles.body}>
      <style>{cssString}</style>

      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <a href="#hero" style={styles.navLogo}>
            Kaarthikeyan AV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={styles.mobileMenuButton}
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>
          {(windowWidth >= 768 || mobileMenuOpen) && (
            <div style={styles.navLinks} className="nav-links">
              {[
                'About',
                'Experience',
                'Club Activities',
                'Projects',
                'Skills',
                'Education',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item.toLowerCase().replace(' ', '-')
                      ? styles.navLinkActive
                      : {}),
                  }}
                  className="nav-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroPhoto} className="photo-hover">
            <img src={kaarthiPhoto} alt="Kaarthikeyan AV" style={styles.heroPhotoImg} />
          </div>
          <h1 style={styles.heroTitle}>Kaarthikeyan AV</h1>
          <p style={styles.heroSubtitle}>MSc Decision & Computing Sciences</p>
          <p style={styles.heroDescription}>
            Passionate about bridging technology to bring innovative solutions to real-world problems.
          </p>
          <div style={styles.socialLinks}>
            <a
              href="https://github.com/karthikeyanav2003"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              className="social-hover"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaarthikeyan-a-v-2219aa277"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              className="social-hover"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:karthikeyanav2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              className="social-hover"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            style={styles.ctaButton}
            className="cta-hover"
          >
            Explore My Work
          </button>
        </div>
      </section>

      <section id="about" style={{ ...styles.section, ...styles.bgPrimary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible.about ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={{ ...styles.grid, ...styles.gridTwoCol, alignItems: 'center' }}>
            <div style={{ ...styles.slideInLeft, ...(isVisible.about ? styles.slideInLeftVisible : {}) }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', ...styles.textPrimary }}>
                Dedicated technology enthusiast pursuing an MSc in Decision & Computing Sciences at Coimbatore Institute of Technology, focusing on innovative solutions for complex challenges.
              </p>
              <p style={{ fontSize: '1rem', ...styles.textSecondary }}>
                Experienced in full-stack development with a strong foundation in algorithmic problem-solving, specializing in scalable applications that drive impact across various domains.
              </p>
            </div>
            <div
              style={{
                ...styles.card,
                ...styles.slideInRight,
                ...(isVisible.about ? styles.slideInRightVisible : {}),
              }}
              className="card-hover"
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', ...styles.textAccent }}>
                Want to See My Resume?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin color="#8b5cf6" size={20} />
                  <span>Erode, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone color="#8b5cf6" size={20} />
                  <span>+91 9976345609</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail color="#8b5cf6" size={20} />
                  <span>karthikeyanav2003@gmail.com</span>
                </div>
                <a
                  href="/resume.pdf"
                  download="Kaarthikeyan_AV_Resume.pdf"
                  style={{
                    ...styles.ctaButton,
                    marginTop: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    justifyContent: 'center',
                  }}
                  className="cta-hover"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" style={{ ...styles.section, ...styles.bgSecondary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible.experience ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>Professional Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={styles.card} className="card-hover">
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', ...styles.textAccent }}>
                  Fullstack Developer Intern
                </h3>
                <p style={{ fontSize: '1.3rem', ...styles.textPrimary }}>
                  Prediscan Med Tech
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...styles.textSecondary }}>
                <p>· Web platform for chronic disease detection, enhancing accessibility for healthcare professionals.</p>
                <p>· Early detection system, improving patient outcomes and medical workflows.</p>
                <p>· Diabetic retinopathy detection tool, ensuring accurate diagnosis of vision issues.</p>
                <p>· Automated screening solution, accelerating diagnosis for at-risk patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="club-activities" style={{ ...styles.section, ...styles.bgPrimary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible['club-activities'] ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>Club Activities</h2>
          <div style={{ ...styles.grid, ...styles.gridTwoCol }}>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', ...styles.textAccent }}>
                Event Coordinator
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', ...styles.textPrimary }}>
                403 Strats Club
              </p>
              <p style={styles.textSecondary}>
                Supervised technology events, managed gaming stations, and conducted technical assessment rounds, ensuring seamless execution of club activities.
              </p>
            </div>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', ...styles.textAccent }}>
                Office Bearer & Editor
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', ...styles.textPrimary }}>
                Women Empowerment Cell
              </p>
              <p style={styles.textSecondary}>
                Orchestrated awareness-building events, coordinated self-defense classes, and edited diverse media materials, including posters, videos, and promotional content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{ ...styles.section, ...styles.bgPrimary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible.projects ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={{ ...styles.grid, ...styles.gridThreeCol }}>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', ...styles.textAccent }}>
                Power Exchange Simulation
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...styles.textSecondary, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <p>· Peer-to-peer energy trading simulator, enabling secure and efficient energy exchange.</p>
                <p>· Decentralized energy distribution system, promoting sustainable market practices.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="project-tag">Merge Sort</span>
                <span className="project-tag">Two-Pointer Matching</span>
                <span className="project-tag">Dynamic Programming</span>
                <span className="project-tag">SHA-256</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <a
                  href="https://github.com/karthikeyanav2003/Smart-Grid-Simulation"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ExternalLink color="#8b5cf6" size={20} style={{ cursor: 'pointer' }} />
                </a>
              </div>
            </div>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', ...styles.textAccent }}>
                Bus Tracking System
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...styles.textSecondary, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <p>· Real-time bus tracking application, providing location and fare transparency.</p>
                <p>· Public transport solution, improving reliability and user convenience.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <a
                  href="https://github.com/karthikeyanav2003/Bus-Tracking-System-MERN"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ExternalLink color="#8b5cf6" size={20} style={{ cursor: 'pointer' }} />
                </a>
              </div>
            </div>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', ...styles.textAccent }}>
                Image Editor
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...styles.textSecondary, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <p>· Cross-platform image editing application, supporting cropping, resizing, and filtering.</p>
                <p>· User-friendly tool, streamlining efficient image processing tasks.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="project-tag">Python</span>
                <span className="project-tag">Kivy</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <a
                  href="https://github.com/karthikeyanav2003/Image-Editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ExternalLink color="#8b5cf6" size={20} style={{ cursor: 'pointer' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" style={{ ...styles.section, ...styles.bgSecondary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible.skills ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={{ ...styles.grid, ...styles.gridFourCol, marginBottom: '4rem' }}>
            <div style={{ ...styles.card, textAlign: 'center' }} className="card-hover skill-card">
              <Code className="skill-icon" color="#ffffff" size={50} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', ...styles.textAccent }}>
                Languages & Frameworks
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', ...styles.textSecondary }}>
                <p>Python</p>
                <p>React</p>
                <p>Django</p>
                <p>Flask</p>
                <p>Streamlit</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div style={{ ...styles.card, textAlign: 'center' }} className="card-hover skill-card">
              <Database className="skill-icon" color="#ffffff" size={50} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', ...styles.textAccent }}>
                Databases
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', ...styles.textSecondary }}>
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>Oracle</p>
              </div>
            </div>
            <div style={{ ...styles.card, textAlign: 'center' }} className="card-hover skill-card">
              <Globe className="skill-icon" color="#ffffff" size={50} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', ...styles.textAccent }}>
                Web Technologies
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', ...styles.textSecondary }}>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
              </div>
            </div>
            <div style={{ ...styles.card, textAlign: 'center' }} className="card-hover skill-card">
              <Smartphone className="skill-icon" color="#ffffff" size={50} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', ...styles.textAccent }}>
                Tools & Analytics
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', ...styles.textSecondary }}>
                <p>Power BI</p>
                <p>Excel</p>
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" style={{ ...styles.section, ...styles.bgPrimary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible.education ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>Education</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', ...styles.textAccent }}>
                MSc Decision & Computing Sciences (Integrated)
              </h3>
              <p style={{ fontSize: '1.3rem', marginBottom: '2rem', ...styles.textPrimary }}>
                Coimbatore Institute of Technology, India
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', ...styles.textSecondary }}>
                <p><strong>Duration:</strong> 2020 - 2025</p>
                <p><strong>CGPA:</strong> 7.38/10</p>
              </div>
            </div>
            <div style={styles.card} className="card-hover">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', ...styles.textAccent }}>
                Higher Secondary School
              </h3>
              <p style={{ fontSize: '1.3rem', marginBottom: '2rem', ...styles.textPrimary }}>
                Bharathi Vidhya Bhavan, Erode, India
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', ...styles.textSecondary }}>
                <p><strong>Year of Completion:</strong> 2020</p>
                <p><strong>Percentage:</strong> 92%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ ...styles.section, ...styles.bgSecondary }}>
        <div style={{ ...styles.fadeIn, ...(isVisible.contact ? styles.fadeInVisible : {}) }}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', ...styles.textSecondary, marginBottom: '3rem' }}>
              Always open to discussing new opportunities and innovative projects. Connect to explore collaborative solutions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem' }}>
              <a
                href="mailto:karthikeyanav2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', ...styles.textAccent, textDecoration: 'none', fontSize: '1.1rem' }}
                className="social-hover"
              >
                <Mail size={24} />
                <span>karthikeyanav2003@gmail.com</span>
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <a
                href="https://github.com/karthikeyanav2003"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.socialLink, backgroundColor: '#8b5cf6', padding: '1rem', borderRadius: '50%' }}
                className="social-hover"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kaarthikeyan-a-v-2219aa277"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.socialLink, backgroundColor: '#8b5cf6', padding: '1rem', borderRadius: '50%' }}
                className="social-hover"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#1f2937', padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#ffffff', margin: 0 }}>© 2025 Kaarthikeyan AV. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
