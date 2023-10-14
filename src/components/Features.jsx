import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";

const Features = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="max-w-[82.5rem] gap-8 py-12 mx-auto flex  items-center justify-between">
        <div>
          <img className="mb-4" src={icon1} alt="" />
          <h3 className="font-rancho text-4xl mb-2">Awesome Aroma</h3>
          <p className="font-raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img className="mb-4" src={icon2} alt="" />
          <h3 className="font-rancho text-4xl mb-2">High Quality</h3>
          <p className="font-raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img className="mb-4" src={icon3} alt="" />
          <h3 className="font-rancho text-4xl mb-2">Pure Grades</h3>
          <p className="font-raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
        <div>
          <img className="mb-4" src={icon4} alt="" />
          <h3 className="font-rancho text-4xl mb-2">Proper Roasting</h3>
          <p className="font-raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
