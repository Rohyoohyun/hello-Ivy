import styles from '@/shared/css/Navbar.module.css';
import { IoMoon, IoSunny } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
   {/*
  const [language, setLanguage] = useState<'KO' | 'EN'>('KO');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'KO' ? 'EN' : 'KO'));
  };
  
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode); // 선택사항
  }; */}

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* 왼쪽: 로고 */}
        <div className={styles.left}>
          <a href="/" className={styles.brand}>
            <img src="/logo.svg" alt="MyImage" className={styles.image} />
          </a>
        </div>

        {/* 가운데: 메뉴 */}
        <div className={styles.center}>
          <nav className={styles.navbarNav}>
            <ul className={styles.navLinks}>
              <li><a href="/" className={styles.navItem}>Home</a></li>
              <li><a href="/about" className={styles.navItem}>About Me</a></li>
              <li><a href="/project" className={styles.navItem}>Project</a></li>
              <li><a href="/learning" className={styles.navItem}>Learning</a></li>
            </ul>
          </nav>
        </div>

        {/* 오른쪽: 언어 / 테마 토글(내용보류) */}
        <div className={styles.right}>
          {/*
          <button onClick={toggleLanguage} className={styles.languageMode}>
            {language}
          </button>
          
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {isDarkMode ? <IoSunny className={styles.icon} /> : <IoMoon className={styles.icon} />}
          </button>
          */}
        </div>
      </div>
    </div>
  );
}
