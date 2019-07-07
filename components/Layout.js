import React from "react";
import Head from "next/head";
import "../styles/index.css";

export const Layout = props => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
        />
        <meta charSet="utf-8" />
        {props.description && (
          <meta name="description" content={props.description} />
        )}
       

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="NewbieTech" />
        <meta property="og:url" content="https://newbietech.io" />
        <meta
          property="og:image"
          content="https://newbietech.io/static/favicons/favicon-196x196.png/"
        />
        <meta property="og:image:width" content="196" />
        <meta property="og:image:height" content="196" />
        <meta
          property="og:description"
          content="Facilitated and hands on creative tech explorations.
          For beginners."
        />
       
        
        <link rel="apple-touch-icon" sizes="180x180" href="../static/favicons/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="../static/favicons/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="../static/favicons/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#2b5797"/>
<meta name="theme-color" content="#ffffff"/>
      </Head>
      <div className="antialiased">{props.children}</div>

      <style jsx global>
        {`
          body,
          html {
            scroll-behavior: smooth;
          }

          
        `}
      </style>
    </React.Fragment>
  );
};
