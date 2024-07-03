import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Care from "./components/Care";
import NavBar from "./components/NavBar";
import Service from "./components/Service";

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
    </div>
  );
}

export default App;
