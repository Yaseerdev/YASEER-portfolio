import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/analytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T8S7BTJPMP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T8S7BTJPMP');
</script>

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
