import DisplayModelContext from "@/components/context/model-context";
import ThemeContext from "@/components/context/theme-context";
import { LIST_FURNITURE } from "@/data/product_data";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [displayModel, setDisplayModel] = useState(LIST_FURNITURE[0]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SessionProvider session={session}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9VQ6L866ZV"
        ></script>
        <script>
          dangerouslySetInnerHTML=
          {{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date()); 
              gtag('config', 'G-9VQ6L866ZV');
            `,
          }}
        </script>
      </Head>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <DisplayModelContext.Provider value={{ displayModel, setDisplayModel }}>
          <Component {...pageProps} />
        </DisplayModelContext.Provider>
      </ThemeContext.Provider>
    </SessionProvider>
  );
}
