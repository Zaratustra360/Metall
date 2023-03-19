import { Roboto } from "@next/font/google";
import Layout from "@/Components/Layout/Layout";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <Layout>
        <h1>Хуйня</h1>
      </Layout>
    </div>
  );
}
