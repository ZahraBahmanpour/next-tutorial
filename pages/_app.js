import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
