import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';
import './Header.css';

const themes = [
  { id: 'dark', label: 'Dark', icon: <FiMoon /> },
  { id: 'light', label: 'Light', icon: <FiSun /> },
  { id: 'midnight', label: 'Midnight', icon: <FiMoon /> },
  { id: 'sunset', label: 'Sunset', icon: <FiSun /> },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={`header ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <img src="/assets/icons/logo.png" alt="ARCS Logo" className="logo-img" />
          <span className="logo-text">ARCS</span>
        </a>
        
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#ar-showcase">AR</a>
          <a href="#studio">3D Studio</a>
          <a href="#architecture">Architecture</a>
          <a href="#techstack">Tech</a>
        </nav>
        
        <div className="header-actions">
          <div className="theme-switcher">
            <button 
              className="theme-toggle-btn" 
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              aria-label="Switch theme"
            >
              {themes.find(t => t.id === theme)?.icon}
              <FiChevronDown className={`chevron ${showThemeMenu ? 'open' : ''}`} />
            </button>
            {showThemeMenu && (
              <div className="theme-menu glass">
                {themes.map(t => (
                  <button
                    key={t.id}
                    className={`theme-option ${theme === t.id ? 'active' : ''}`}
                    onClick={() => { setTheme(t.id); setShowThemeMenu(false); }}
                  >
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="#get-started" className="btn btn-primary btn-small">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
