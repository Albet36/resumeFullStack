import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { ContextoProvider } from "../appContext";
import Modal from "react-modal";
import store from "../redux/store";
import { Provider } from 'react-redux';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener("touchstart", function () {}, false);
    smoothscroll.polyfill();
    Modal.setAppElement("#__next");
    return () => {
      document.removeEventListener("touchstart", function () {}, false);
    };
  }, []);
  return (
    <ContextoProvider>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <meta name="author" content="Francisco Pantoja" />
        </Head>

       <Provider store={store}>
       <Component {...pageProps} />
       </Provider>
      </>
    </ContextoProvider>
  );
}

export default MyApp;
