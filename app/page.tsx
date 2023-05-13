import Image from "next/image";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Ourpillar from "./components/Ourpillar";
import Games from "./components/Games";
import Music from "./components/Music";
import Film from "./components/Film";
import Latest from "./components/Latest";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Menu />
      <Product />
      <Ourpillar />
      <Games />
      <Music />
      <Film />
      <Latest />
    </main>
  );
}
