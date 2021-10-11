import React from 'react';
import '../styles/globals.css'

/* https://thecodinganalyst.github.io/knowledgebase/create-a-new-nextjs-site-with-typescript-materialui-and-cypress/
  In order to make it work, the server-side generated css need to be removed, and injected to the client side. 
  For nextjs, we can enable this by removing the server side injected css from the custom App, and inject it in the custom Document. */
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp
