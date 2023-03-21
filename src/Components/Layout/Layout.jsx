import Nav from "@/Components/Layout/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
}
