import banner from "../assets/Rectangle 5.png";
import banner2 from "../assets/Group 19.png";

const Banner = () => {
  return (
    <div className="mx-48 my-8">
      <img src={banner} className="w-full mb-8" alt="banner" />
      <img src={banner2} className="w-full mb-8" alt="banner" />
    </div>
  );
};

export default Banner;
