import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";

import type { Session } from "next-auth"
import { lightTheme } from "../themes";
import { CartProvider, UiProvider, AuthProvider } from "../context";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>)  {
  return (
    <SessionProvider session={session}>
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <AuthProvider  >
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
    </SessionProvider>
  );
}
