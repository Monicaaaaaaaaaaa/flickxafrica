import React from 'react'
import { Helmet } from 'react-helmet-async'
import { config } from '../config/env'

const SEO = ({ 
  title,
  description,
  name,
  type,
  image,
  url,
  keywords = [],
  noindex = false,
  structuredData = null
}) => {
  const siteTitle = title ? `${title} | ${config.app.name}` : config.app.name
  const siteDescription = description || config.app.description
  const siteUrl = url || window.location.href
  const siteImage = image || `${window.location.origin}/og-image.jpg`

  const defaultKeywords = [
    'flickx africa',
    'african cinema',
    'creative skills',
    'film production',
    'storytelling',
    'creative education',
    'african creators',
    'film academy',
    'creative learning',
    'african stories'
  ]

  const allKeywords = [...keywords, ...defaultKeywords].join(', ')

  const jsonLd = structuredData || {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.app.name,
    description: siteDescription,
    url: window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    sameAs: [
      // Add social media URLs here
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English']
    }
  }

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={config.app.name} />
      <link rel="canonical" href={siteUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={config.app.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content="@flickxafrica" />

      {/* Additional meta tags */}
      <meta name="theme-color" content="#0057A0" />
      <meta name="msapplication-TileColor" content="#0057A0" />
      <meta name="application-name" content={config.app.name} />
      <meta name="apple-mobile-web-app-title" content={config.app.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.flickxafrica.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Analytics */}
      {config.analytics.enabled && config.analytics.gaTrackingId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaTrackingId}`}></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.analytics.gaTrackingId}', {
                page_title: '${siteTitle}',
                page_location: '${siteUrl}'
              });
            `}
          </script>
        </>
      )}

      {/* Hotjar */}
      {config.analytics.enabled && config.analytics.hotjarId && (
        <>
          <script>
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${config.analytics.hotjarId},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </script>
        </>
      )}
    </Helmet>
  )
}

export default SEO
