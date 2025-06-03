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
} from 'lucide-react';
import kaarthiPhoto from './Mypic.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window width for responsive menu
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll to update active section and visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'experience',
        'projects',
        'skills',
        'education',
        'contact',
      ];
      const scrollPosition = window.scrollY + 120; // offset so section becomes active a bit earlier

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Handle visibility for animations
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
    handleScroll(); // Initial check
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
      backgroundColor: '#0f0f23',
      color: '#e2e8f0',
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
    },

    // Navigation styles
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(59, 7, 100, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(147, 51, 234, 0.3)',
      transition: 'all 0.3s ease',
      height: '60px',
    },

    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },

    navLogo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#c4b5fd',
      textDecoration: 'none',
    },

    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexDirection: windowWidth < 768 ? 'column' : 'row',
      backgroundColor:
        windowWidth < 768 ? 'rgba(59, 7, 100, 0.95)' : 'transparent',
      position: windowWidth < 768 ? 'absolute' : 'static',
      top: windowWidth < 768 ? '60px' : 'auto',
      right: windowWidth < 768 ? '0' : 'auto',
      width: windowWidth < 768 ? '100%' : 'auto',
      alignItems: windowWidth < 768 ? 'flex-start' : 'center',
      padding: windowWidth < 768 ? '1rem 2rem' : '0',
      boxShadow:
        windowWidth < 768 && mobileMenuOpen
          ? '0 4px 12px rgba(0, 0, 0, 0.3)'
          : 'none',
    },

    navLink: {
      color: '#c4b5fd',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s ease, transform 0.2s ease',
      cursor: 'pointer',
      padding: windowWidth < 768 ? '0.75rem 0' : '0.5rem 0',
      position: 'relative',
      width: windowWidth < 768 ? '100%' : 'auto',
    },

    navLinkActive: {
      color: '#a855f7',
    },

    mobileMenuButton: {
      background: 'none',
      border: 'none',
      color: '#c4b5fd',
      cursor: 'pointer',
      display: windowWidth < 768 ? 'block' : 'none',
      padding: '0.5rem',
    },

    // Hero section styles
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(135deg, #581c87 0%, #6b21a8 25%, #7c3aed 50%, #8b5cf6 75%, #a855f7 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px', // offset for fixed nav
    },

    heroContent: {
      textAlign: 'center',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 2rem',
      marginTop: '40px', // lower image and content a bit from navbar
      animation: 'fadeInUp 1s ease-out',
    },

    heroPhoto: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      margin: '0 auto 2rem',
      border: '4px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)',
      overflow: 'hidden',
      position: 'relative',
      background:
        'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(147, 51, 234, 0.3))',
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
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: '800',
      background:
        'linear-gradient(45deg, #f3e8ff, #e9d5ff, #d8b4fe)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      marginBottom: '1rem',
      textShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
    },

    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      color: '#c4b5fd',
      marginBottom: '1rem',
      fontWeight: '300',
    },

    heroDescription: {
      fontSize: '1.2rem',
      color: '#d8b4fe',
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
      color: '#d8b4fe',
      transition: 'all 0.3s ease',
      padding: '0.5rem',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
    },

    ctaButton: {
      padding: '1rem 2rem',
      backgroundColor: 'rgba(147, 51, 234, 0.8)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },

    // Section styles
    section: {
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      scrollMarginTop: '100px',
    },

    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '4rem',
      color: '#a855f7',
      position: 'relative',
    },

    // Card styles
    card: {
      backgroundColor: 'rgba(30, 27, 75, 0.6)',
      border: '1px solid rgba(147, 51, 234, 0.3)',
      borderRadius: '16px',
      padding: '2rem',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden',
    },

    // About photo styles
    aboutPhoto: {
      width: '300px',
      height: '400px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)',
      border: '2px solid rgba(147, 51, 234, 0.3)',
      background:
        'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.2))',
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

    // Grid styles
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

    // Animation classes
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

    // Background variations
    bgPrimary: {
      backgroundColor: '#0f0f23',
    },

    bgSecondary: {
      backgroundColor: 'rgba(59, 7, 100, 0.1)',
    },

    // Text styles
    textPrimary: {
      color: '#e2e8f0',
    },

    textSecondary: {
      color: '#94a3b8',
    },

    textAccent: {
      color: '#a855f7',
    },
  };

  // CSS string for keyframes and hover effects
  const cssString = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
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
      box-shadow: 0 25px 50px rgba(168, 85, 247, 0.4);
    }

    .card-hover:hover {
      transform: translateY(-8px);
      border-color: rgba(147, 51, 234, 0.6);
      box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2);
    }

    .social-hover:hover {
      transform: translateY(-3px) scale(1.1);
      color: #a855f7;
      background: rgba(168, 85, 247, 0.2);
    }

    .cta-hover:hover {
      background: rgba(147, 51, 234, 1);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
    }

    .nav-hover {
      position: relative;
      transition: all 0.3s ease;
    }

    .nav-hover:hover {
      color: #a855f7 !important;
      transform: translateY(-2px);
    }

    .nav-hover::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: #a855f7;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .nav-hover:hover::after {
      width: 100%;
    }

    .project-tag {
      background: rgba(147, 51, 234, 0.5);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .skill-icon {
      transition: all 0.3s ease;
    }

    .skill-card:hover .skill-icon {
      transform: scale(1.1);
      color: #a855f7;
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

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <a href="#hero" style={styles.navLogo}>
            Kaarthikeyan AV
          </a>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            style={styles.mobileMenuButton}
            aria-label="Toggle navigation menu"
          >
            <Menu size={28} />
          </button>
          {(windowWidth >= 768 || mobileMenuOpen) && (
            <div style={styles.navLinks} className="nav-links">
              {[
                'About',
                'Experience',
                'Projects',
                'Skills',
                'Education',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item.toLowerCase()
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

      {/* Hero Section */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <div
            style={styles.heroPhoto}
            className="photo-hover hero-photo"
          >
            <img
              src={kaarthiPhoto}
              alt="Kaarthikeyan AV"
              style={styles.heroPhotoImg}
            />
          </div>
          <h1 style={styles.heroTitle}>Kaarthikeyan AV</h1>
          <p style={styles.heroSubtitle}>
            MSc Decision & Computing Sciences
          </p>
          <p style={styles.heroDescription}>
            Passionate about bridging technology to bring innovative
            solutions to real-world problems
          </p>
          <div style={styles.socialLinks}>
            <a
              href="https://github.com/karthikeyanav2003"
              style={styles.socialLink}
              className="social-hover"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-venkat-2219aa277"
              style={styles.socialLink}
              className="social-hover"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:karthikeyanav2003@gmail.com"
              style={styles.socialLink}
              className="social-hover"
            >
              <Mail size={28} />
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

      {/* About Section */}
      <section
        id="about"
        style={{ ...styles.section, ...styles.bgPrimary }}
      >
        <div
          style={{
            ...styles.fadeIn,
            ...(isVisible.about ? styles.fadeInVisible : {}),
          }}
        >
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div
            style={{
              ...styles.grid,
              ...styles.gridTwoCol,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                ...styles.slideInLeft,
                ...(isVisible.about ? styles.slideInLeftVisible : {}),
              }}
            >
              <p
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '2rem',
                  ...styles.textPrimary,
                }}
              >
                I am a dedicated technology enthusiast pursuing MSc in
                Decision & Computing Sciences at Coimbatore Institute of
                Technology. My passion lies in leveraging cutting-edge
                technologies to develop innovative solutions that address
                complex real-world challenges.
              </p>
              <p
                style={{
                  fontSize: '1.2rem',
                  ...styles.textSecondary,
                }}
              >
                With hands-on experience in full-stack development and a
                strong foundation in algorithmic problem-solving, I specialize
                in creating scalable applications that make a meaningful impact
                across various domains.
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
              <h3
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '2rem',
                  ...styles.textAccent,
                }}
              >
                Quick Facts
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <MapPin color="#a855f7" size={20} />
                  <span>Erode, India</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <Phone color="#a855f7" size={20} />
                  <span>+91 9976345609</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <Mail color="#a855f7" size={20} />
                  <span>karthikeyanav2003@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        style={{ ...styles.section, ...styles.bgSecondary }}
      >
        <div
          style={{
            ...styles.fadeIn,
            ...(isVisible.experience ? styles.fadeInVisible : {}),
          }}
        >
          <h2 style={styles.sectionTitle}>Professional Experience</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <div style={styles.card} className="card-hover">
              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    ...styles.textAccent,
                  }}
                >
                  Fullstack Developer Intern
                </h3>
                <p style={{ fontSize: '1.3rem', ...styles.textPrimary }}>
                  Prediscan Med Tech
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  ...styles.textSecondary,
                }}
              >
                <p>
                  • Developed and deployed a comprehensive chronic disease
                  detection platform using Streamlit, enhancing diagnostic
                  accessibility for over 200+ test cases with 30% reduction in
                  user interaction time during clinical trials.
                </p>
                <p>
                  • Engineered a robust diabetic retinopathy detection platform
                  utilizing both Flask and Django frameworks, enabling flexible
                  deployment modes and achieving over 95% model inference
                  accuracy across various preprocessed inputs.
                </p>
                <p>
                  • Refactored and optimized existing project architecture,
                  resulting in 40% improvement in model response time and 25%
                  boost in UI responsiveness, significantly enhancing real-time
                  usability for healthcare professionals.
                </p>
              </div>
            </div>

            <div style={{ ...styles.grid, ...styles.gridTwoCol }}>
              <div style={styles.card} className="card-hover">
                <h3
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    ...styles.textAccent,
                  }}
                >
                  Event Coordinator
                </h3>
                <p
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    ...styles.textPrimary,
                  }}
                >
                  403 Strats Club
                </p>
                <p style={styles.textSecondary}>
                  Supervised technology events, managed gaming stations, and
                  conducted technical assessment rounds, ensuring seamless
                  execution of club activities.
                </p>
              </div>

              <div style={styles.card} className="card-hover">
                <h3
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    ...styles.textAccent,
                  }}
                >
                  Office Bearer & Editor
                </h3>
                <p
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    ...styles.textPrimary,
                  }}
                >
                  Women Empowerment Cell
                </p>
                <p style={styles.textSecondary}>
                  Orchestrated awareness-building events, coordinated
                  self-defense classes, and served as editor for diverse media
                  materials including posters, videos, and promotional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{ ...styles.section, ...styles.bgPrimary }}
      >
        <div
          style={{
            ...styles.fadeIn,
            ...(isVisible.projects ? styles.fadeInVisible : {}),
          }}
        >
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={{ ...styles.grid, ...styles.gridThreeCol }}>
            <div style={styles.card} className="card-hover">
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  ...styles.textAccent,
                }}
              >
                Power Exchange Simulation
              </h3>
              <p
                style={{
                  ...styles.textSecondary,
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                }}
              >
                Peer-to-peer energy trading simulator supporting 1,000+
                households with 85% local trade utilization, featuring advanced
                algorithms and real-time processing.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  ...styles.textSecondary,
                  marginBottom: '1.5rem',
                }}
              >
                <p>• Merge Sort agent ranking (O(n log n))</p>
                <p>• Greedy Two-Pointer Matching (O(n))</p>
                <p>• Dynamic Programming benefit allocation</p>
                <p>• SHA-256 hashing for privacy</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span className="project-tag">Algorithms</span>
                <ExternalLink
                  color="#a855f7"
                  size={20}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div style={styles.card} className="card-hover">
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  ...styles.textAccent,
                }}
              >
                Bus Tracking System
              </h3>
              <p
                style={{
                  ...styles.textSecondary,
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                }}
              >
                Dynamic MERN stack application revolutionizing urban
                transportation with real-time route monitoring and transparent
                fare information.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  ...styles.textSecondary,
                  marginBottom: '1.5rem',
                }}
              >
                <p>• MongoDB, Express, React, Node.js</p>
                <p>• Real-time route data integration</p>
                <p>• Netlify & Render deployment</p>
                <p>• User-friendly interface design</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span className="project-tag">Full Stack</span>
                <ExternalLink
                  color="#a855f7"
                  size={20}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div style={styles.card} className="card-hover">
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  ...styles.textAccent,
                }}
              >
                Image Editor
              </h3>
              <p
                style={{
                  ...styles.textSecondary,
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                }}
              >
                Python Kivy-based application enabling effortless image
                manipulation through an intuitive interface with 10-minute
                average session efficiency.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  ...styles.textSecondary,
                  marginBottom: '1.5rem',
                }}
              >
                <p>• Python Kivy framework</p>
                <p>• Crop, resize, filter features</p>
                <p>• User-friendly interface</p>
                <p>• Creative visual transformation</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span className="project-tag">Python</span>
                <ExternalLink
                  color="#a855f7"
                  size={20}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{ ...styles.section, ...styles.bgSecondary }}
      >
        <div
          style={{
            ...styles.fadeIn,
            ...(isVisible.skills ? styles.fadeInVisible : {}),
          }}
        >
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div
            style={{
              ...styles.grid,
              ...styles.gridFourCol,
              marginBottom: '4rem',
            }}
          >
            <div
              style={{ ...styles.card, textAlign: 'center' }}
              className="card-hover skill-card"
            >
              <Code
                className="skill-icon"
                color="#a855f7"
                size={48}
                style={{ marginBottom: '1rem' }}
              />
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '1.5rem',
                  ...styles.textAccent,
                }}
              >
                Languages & Frameworks
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  ...styles.textSecondary,
                }}
              >
                <p>Python</p>
                <p>React</p>
                <p>Django</p>
                <p>Flask</p>
                <p>Streamlit</p>
                <p>JavaScript</p>
              </div>
            </div>

            <div
              style={{ ...styles.card, textAlign: 'center' }}
              className="card-hover skill-card"
            >
              <Database
                className="skill-icon"
                color="#a855f7"
                size={48}
                style={{ marginBottom: '1rem' }}
              />
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '1.5rem',
                  ...styles.textAccent,
                }}
              >
                Databases
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  ...styles.textSecondary,
                }}
              >
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>Oracle</p>
              </div>
            </div>

            <div
              style={{ ...styles.card, textAlign: 'center' }}
              className="card-hover skill-card"
            >
              <Globe
                className="skill-icon"
                color="#a855f7"
                size={48}
                style={{ marginBottom: '1rem' }}
              />
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '1.5rem',
                  ...styles.textAccent,
                }}
              >
                Web Technologies
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  ...styles.textSecondary,
                }}
              >
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
              </div>
            </div>

            <div
              style={{ ...styles.card, textAlign: 'center' }}
              className="card-hover skill-card"
            >
              <Smartphone
                className="skill-icon"
                color="#a855f7"
                size={48}
                style={{ marginBottom: '1rem' }}
              />
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '1.5rem',
                  ...styles.textAccent,
                }}
              >
                Tools & Analytics
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  ...styles.textSecondary,
                }}
              >
                <p>Power BI</p>
                <p>Excel</p>
                <p>Git</p>
              </div>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                marginBottom: '2rem',
                ...styles.textAccent,
              }}
            >
              Areas of Interest
            </h3>
            <div style={{ ...styles.grid, ...styles.gridFourCol }}>
              <div
                style={{
                  ...styles.card,
                  textAlign: 'center',
                  background: 'rgba(147, 51, 234, 0.3)',
                  border: '1px solid rgba(147, 51, 234, 0.4)',
                }}
              >
                <p
                  style={{
                    ...styles.textPrimary,
                    fontWeight: '500',
                  }}
                >
                  Web Development
                </p>
              </div>
              <div
                style={{
                  ...styles.card,
                  textAlign: 'center',
                  background: 'rgba(147, 51, 234, 0.3)',
                  border: '1px solid rgba(147, 51, 234, 0.4)',
                }}
              >
                <p
                  style={{
                    ...styles.textPrimary,
                    fontWeight: '500',
                  }}
                >
                  Data Science & Analytics
                </p>
              </div>
              <div
                style={{
                  ...styles.card,
                  textAlign: 'center',
                  background: 'rgba(147, 51, 234, 0.3)',
                  border: '1px solid rgba(147, 51, 234, 0.4)',
                }}
              >
                <p
                  style={{
                    ...styles.textPrimary,
                    fontWeight: '500',
                  }}
                >
                  Cloud Computing
                </p>
              </div>
              <div
                style={{
                  ...styles.card,
                  textAlign: 'center',
                  background: 'rgba(147, 51, 234, 0.3)',
                  border: '1px solid rgba(147, 51, 234, 0.4)',
                }}
              >
                <p
                  style={{
                    ...styles.textPrimary,
                    fontWeight: '500',
                  }}
                >
                  App Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        style={{ ...styles.section, ...styles.bgPrimary }}
      >
        <div
          style={{
            ...styles.fadeIn,
            ...(isVisible.education ? styles.fadeInVisible : {}),
          }}
        >
          <h2 style={styles.sectionTitle}>Education</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={styles.card} className="card-hover">
              <h3
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '0.5rem',
                  ...styles.textAccent,
                }}
              >
                MSc Decision & Computing Sciences (Integrated)
              </h3>
              <p
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '2rem',
                  ...styles.textPrimary,
                }}
              >
                Coimbatore Institute of Technology, Coimbatore
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  ...styles.textSecondary,
                }}
              >
                <p>
                  <strong>Duration:</strong> 2021 - 2026
                </p>
                <p>
                  <strong>CGPA:</strong> 7.37/10 (Until 7th Semester)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ ...styles.section, ...styles.bgSecondary }}
      >
        <div
          style={{
            ...styles.fadeIn,
            ...(isVisible.contact ? styles.fadeInVisible : {}),
          }}
        >
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', ...styles.textSecondary, marginBottom: '3rem' }}>
              I'm always interested in discussing new opportunities and innovative projects.
              Let's connect and explore how we can work together to create meaningful solutions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem' }}>
              <a
                href="mailto:karthikeyanav2003@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  ...styles.textAccent,
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                }}
                className="social-hover"
              >
                <Mail size={24} />
                <span>karthikeyanav2003@gmail.com</span>
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <a
                href="https://github.com/karthikeyanav2003"
                style={{
                  ...styles.socialLink,
                  backgroundColor: 'rgba(147, 51, 234, 0.8)',
                  padding: '1rem',
                  borderRadius: '50%',
                }}
                className="social-hover"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-venkat-2219aa277"
                style={{
                  ...styles.socialLink,
                  backgroundColor: 'rgba(147, 51, 234, 0.8)',
                  padding: '1rem',
                  borderRadius: '50%',
                }}
                className="social-hover"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: '#3b0764', padding: '2rem', textAlign: 'center' }}
      >
        <p style={{ color: '#c4b5fd', margin: 0 }}>© 2025 Kaarthikeyan AV. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
