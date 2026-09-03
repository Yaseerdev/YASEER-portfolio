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
  <title>Founder & Full-Stack Developer | Yaseer Dauda</title>
  <meta name="description" content="I partner with startups and content creators to architect high-performance web platforms that turn bold ideas into scalable, predictable revenue." />
  
  <meta property="og:title" content="Founder & Full-Stack Developer | Yaseer Dauda" />
  <meta property="og:description" content="I build modern websites, business platforms, and custom digital solutions that help businesses and creators turn their ideas into products people can actually use." />
  <meta property="og:image" content="/images/projects/profile.jpg" />
  <meta property="og:url" content="https://yaseer.xyz" />
  
  <meta name="twitter:card" content="summary_large_image" />
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
