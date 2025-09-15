import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Only run this in the browser (not during SSR)
    if (typeof window !== 'undefined') {
      // Check if dark mode is enabled in localStorage
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      
      // Check system preference
      const systemPrefersDark = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setDarkMode(isDarkMode || (!('darkMode' in localStorage) && systemPrefersDark));
    }
  }, []);

  useEffect(() => {
    // Only run this after component has mounted
    if (!mounted) return;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
      
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, mounted]);

  return [darkMode, setDarkMode];
}