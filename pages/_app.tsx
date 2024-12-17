'use client'

import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Image from 'next/image';
import styles from '../Layouts/MainLayout.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script id="linkedIn">
        {`
          _linkedin_partner_id = 6683602;
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script id="linkedIn-tracking">
          {`
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
      </Script>
      <noscript>
        <Image width={100} 
        height={100} className={styles.hide} alt="" src="https://px.ads.linkedin.com/collect/?pid=6683602&fmt=gif" />
      </noscript>
    </>
  )
}

export default MyApp
