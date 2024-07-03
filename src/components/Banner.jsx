import banner from "../assets/Rectangle 5.png";
import bannerBG from "../assets/image_bg.png";

const Banner = () => {
  return (
    <section className="mx-4 relative my-24">
      <div className="">
        {/* <div className="flex">
          <img src={bannerBG} className="w-full" alt="banner" />
        </div>
        <div className="">
          <img src={bannerBG} className="w-full " alt="banner" />
        </div> */}
      </div>
      <div className=" lg:mx-48">
        <img src={banner} className="w-full mb-8" alt="banner" />
      </div>
    </section>
  );
};

export default Banner;
