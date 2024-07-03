import { FaQ } from "react-icons/fa6";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Care from "./components/Care";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import BottomBanner from "./components/BottomBanner";

function App() {
  return (
    <div className="bg-white">
      {/* navbar here */}
      <NavBar />

      {/* banner here  */}
      <Banner />

      {/* care here */}
      <Care />

      {/* about us here  */}
      <AboutUs />

      {/* service here  */}
      <Service />

      {/* testimonial here  */}
      <Testimonial />

      {/* faq here  */}
      <FaQ />

      {/* feature banner here  */}
      <BottomBanner />

      {/* footer here  */}
      <Footer />
    </div>
  );
}

export default App;
