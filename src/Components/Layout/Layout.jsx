import Nav from "@/Components/Layout/Nav";
import Footer from "@/Components/Layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
