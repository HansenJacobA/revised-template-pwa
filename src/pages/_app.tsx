import "../styles/globals.css";
import { useEffect } from "react";
import { theme } from "../styles/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import initiateServiceWorkerFromClient from "../utilities/serviceWorker";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      typeof window !== "undefined"
    ) {
      initiateServiceWorkerFromClient();
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
