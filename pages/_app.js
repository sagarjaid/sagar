import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-N447S94TC5`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N447S94TC5');
          `}
          />
          <Component {...pageProps} />
        </>
    
}
