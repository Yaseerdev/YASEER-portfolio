// Add this at the top of your pages/index.js file
import { useState, useEffect } from 'react';

// import useDarkMode from '../components/useDarkMode';
import useDarkMode from '../components/usedarkMode';
// import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
export default function Home() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        
        
        <Head>
          <title>Yaseer Dauda - Portfolio</title>
          <meta name="description" content="Professional portfolio showcasing my work and skills" />
          <meta property="og:title" content="Yaseerdev" />
          <meta property="og:description" content="Professional portfolio showcasing my work and skills" />
          <meta property="og:image" content="/images/projects/profile.jpg" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="Yaseerdev" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>

        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
