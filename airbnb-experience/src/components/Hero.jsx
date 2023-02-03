const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img
          src="src/assets/hero.svg"
          alt="hero-img"
          className=" mx-auto mt-6"
        />
      </div>
      <div className="hero-detail mt-6 pl-8">
        <h1 className="text-[36px] font-bold">Online Experiences</h1>
        <p className="text-[17px] max-w-[320px] leading-4 mt-3">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
