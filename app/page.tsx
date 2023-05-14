import Image from "next/image";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Ourpillar from "./components/Ourpillar";
import Games from "./components/Games";
import Music from "./components/Music";
import Film from "./components/Film";
import Latest from "./components/Latest";
import LatestNews from "./components/LatestNews";
import Events from "./components/Events";
import Joinus from "./components/Joinus";
import Footer from "./components/Footer";
import Claim from "./components/Claim";
import AttentionGrabber from "./components/Attention";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Menu />
      <AttentionGrabber />
      {/* <Claim /> */}
      <Product />
      <Ourpillar />
      <Games />
      <Music />
      <Film />
      <Latest />
      {/* <LatestNews /> */}
      <Events />
      <Joinus />
      <Footer />
    </main>
  );
}
