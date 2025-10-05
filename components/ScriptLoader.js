// components/ScriptLoader.js
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-R6JDPM6RT3";

export default function ScriptLoader() {
  const router = useRouter();

  // Track pageviews on route change
  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (process.env.NODE_ENV !== "production") {
    return null; // Don’t load analytics in dev
  }

  return (
    <>
      {/* Google Analytics */}
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      /> */}
      <Script
        async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      {/* <Script id="ga-init" strategy="afterInteractive"> */}
      <Script id="ga-init" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Google Ads */}
      {/* <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=abc123"
        crossOrigin="anonymous"
      /> */}
    </>
  );
}
