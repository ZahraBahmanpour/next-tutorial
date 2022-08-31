import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Salam</title>
      </Head>
      <Header /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
