import { Link } from "react-router-dom";
import footerLogo from "../assets/images/more/logo1.png";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="footerBg">
        <div className="max-w-[82.5rem] mx-auto pt-24 pb-12">
          <div>
            <img className="w-[4.65rem] mb-7" src={footerLogo} alt="" />
          </div>
          <div className="  gap-36  items-center flex justify-between">
            <div className="space-y-8 flex-1 ">
              <h3 className="font-rancho text-5xl drop-shadow-2xl ">
                Espresso Emporium
              </h3>
              <p className="font-raleway text-xl">
                Always ready to be your friend. Come & Contact with us to share
                your <br /> memorable moments, to share with your best
                companion.
              </p>
              <div className="flex items-center gap-5 text-2xl">
                <Link>
                  <BsFacebook></BsFacebook>
                </Link>
                <Link>
                  <BsTwitter></BsTwitter>
                </Link>
                <Link>
                  <BsInstagram></BsInstagram>
                </Link>
                <Link>
                  <BsLinkedin></BsLinkedin>
                </Link>
              </div>
              <h3 className="font-rancho text-5xl">Get in Touch</h3>
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-4 text-xl font-raleway">
                  {" "}
                  <BsFillTelephoneFill></BsFillTelephoneFill> +88 01533 333 333
                </p>
                <p className="flex items-center gap-4 text-xl font-raleway">
                  {" "}
                  <IoMdMail></IoMdMail> info@gmail.com
                </p>
                <p className="flex items-center gap-4 text-xl font-raleway">
                  {" "}
                  <MdLocationPin></MdLocationPin> 72, Wall street, King Road,
                  Dhaka
                </p>
              </div>
            </div>

            <div className=" flex-1">
              <h3 className="font-rancho mb-8 text-5xl drop-shadow-2xl ">
                Connect With Us
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  className="p-3 w-[85%] mb-4 font-raleway rounded-md focus:outline-none hover:drop-shadow-2xl border-2 border-transparent hover:border-2 hover:border-yellow-700"
                  placeholder="Name"
                  type="text"
                  name="name"
                />
                <br />
                <input
                  className="p-3 w-[85%] mb-4 font-raleway rounded-md focus:outline-none hover:drop-shadow-2xl border-2 border-transparent hover:border-2 hover:border-yellow-700"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                <br />
                <textarea
                  placeholder="Message"
                  name="message"
                  cols="30"
                  rows="5"
                  className="resize-none p-3 w-[85%] mb-4 font-raleway rounded-md focus:outline-none hover:drop-shadow-2xl border-2 border-transparent hover:border-2 hover:border-yellow-700"
                ></textarea>
                <br />
                <button className="font-rancho text-xl rounded-full border-2 border-black py-2 px-4 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="navBg">
          <h3 className="text-center py-3 text-white font-rancho text-xl">
            Copyright Espresso Emporium ! All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
