import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
