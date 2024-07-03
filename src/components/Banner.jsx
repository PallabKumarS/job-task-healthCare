import banner from "../assets/Rectangle 5.png";

import bannerBG from "../assets/image_bg.png";
const Banner = () => {
  return (
    <section className="mx-4 relative my-8">
      <div className="">
        {/* <div className="">
          <img src={bannerBG} className="w-full" alt="banner" />
        </div>
        <div className="">
          <img src={bannerBG} className="w-full " alt="banner" />
        </div> */}
        <div className=" lg:mx-48">
          <img src={banner} className="w-full mb-8" alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
