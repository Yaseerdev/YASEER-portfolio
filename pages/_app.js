import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from '../lib/analytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T8S7BTJPMP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T8S7BTJPMP', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Your App */}
      <Component {...pageProps} />
    </>
  );
}
