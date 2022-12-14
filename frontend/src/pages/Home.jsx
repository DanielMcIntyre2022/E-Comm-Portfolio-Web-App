import Annoucements from "../components/Annoucements";
import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/SliderComponent";
import Products from "../components/Products";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
    <Annoucements/>
    <Navbar/>
    <SliderComponent/>
    <Catergories/>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home;