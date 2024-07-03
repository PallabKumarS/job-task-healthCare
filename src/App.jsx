import Banner from "./components/Banner";
import Care from "./components/Care";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-white">
      {/* navbar here */}
      <NavBar />

      {/* banner here  */}
      <Banner />

      {/* care here */}
      <Care />
    </div>
  );
}

export default App;
