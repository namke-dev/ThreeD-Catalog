import DisplayModelContext from "@/components/context/model-context";
import { LIST_FURNITURE } from "@/data/product_data";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [displayModel, setDisplayModel] = useState(LIST_FURNITURE[0]);
  return (
    <SessionProvider session={session}>
      <DisplayModelContext.Provider value={{ displayModel, setDisplayModel }}>
        <Component {...pageProps} />
      </DisplayModelContext.Provider>
    </SessionProvider>
  );
}
