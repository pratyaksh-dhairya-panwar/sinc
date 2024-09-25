import Image from "next/image";
import Header from "./header";
import Herosection from "./herosection";
import Horizontal from "./lscroll";
import Rscroll from "./rscroll";
import Aboutus from "./aboutus";
import Newsletter from "./newsletter";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary">
      {/* <Header /> */}
      <Herosection />
      <Horizontal />
      <Rscroll />
      <Aboutus />
    </main>
  );
}
