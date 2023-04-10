import "@/styles/globals.sass";
import "@/Components/Layout/Layout.sass";
import "@/pages/Home.sass";
import "@/Components/Layout/Nav.sass";
import "@/Components/Layout/Footer.sass";
import "@/Components/UI/Button/Button.sass";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
