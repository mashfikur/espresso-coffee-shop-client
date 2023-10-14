const Banner = () => {
  return (
    <div className="banner-bg min-h-[90vh] flex flex-col items-center justify-center">
      <div className="text-white max-w-[82.5rem] flex mx-auto justify-between  ">
        <div className="flex-1"></div>
        <div className="flex-1">
          <h3 className="font-rancho text-5xl mb-4">
            Would you like a Cup of Delicious Coffee?
          </h3>
          <p className="font-raleway mb-8">
            {"It's"} coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="font-rancho hover:rounded-full duration-100 ease-in-out text-xl px-6 text-black rounded-md py-2 bg-[#E3B577] ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
