import DisplayModelContext from "@/components/context/model-context";
import ThemeContext from "@/components/context/theme-context";
import { LIST_FURNITURE } from "@/data/product_data";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [displayModel, setDisplayModel] = useState(LIST_FURNITURE[0]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SessionProvider session={session}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <DisplayModelContext.Provider value={{ displayModel, setDisplayModel }}>
          <Component {...pageProps} />
          <GoogleTagManager gtmId="G-9VQ6L866ZV" />
        </DisplayModelContext.Provider>
      </ThemeContext.Provider>
    </SessionProvider>
  );
}
