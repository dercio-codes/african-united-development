import Banner from "../components/Banner";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Landing from "../components/Landing"
import Footer from "../components/Footer";

export default function Home() {
  const yellow = "#f7a02e";
  return (
    <main className="container">
      <Landing />
      <Banner />
      <AboutUs />
      <OurServices />
      <Portfolio />
      <Contact />
      <Footer/>
    </main>
  )
}
