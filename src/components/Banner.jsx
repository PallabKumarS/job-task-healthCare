import banner from "../assets/Rectangle 5.png";
// import bannerBG from "../assets/image_bg.png";

const Banner = () => {
  return (
    <section className="mx-4 my-24">
      <div className=" lg:mx-48">
        <img src={banner} className="w-full mb-8" alt="banner" />
      </div>
    </section>
  );
};

export default Banner;
