import Image from "next/image";
import Header from "./components /Header";
import Hero from "./components /Hero";
import About from "./components /About ";
import Services from "./components /Services";
import WorkProcess from "./components /WorkProcess";
import Experience from "./components /Skills";
import Portfolio from "./components /Portfolio";
import Footer from "./components /Footer ";
import Contact from "./components /Contact";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About />
      <Services />
      <WorkProcess />
      <Experience />
      <Portfolio />
      <Contact/>
      <Footer/>
    </div>
  );
}
