import Link from "next/link";

import style from "./contact.module.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

const contact = () => {
  return (
    <>
      <div className="h-96 scroll-smooth bg-herobg z-1">
        <div className={`p-0  h-full bg-cover bg-bottom ${style.heroheader}`}>
          <div className="container flex flex-row justify-center mx-auto">
            <h2 className="pt-24 text-white text-5xl font-bold">Contact</h2>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
          <h5 className="sm:text-3xl text-2xl md:text-lg font-bold title-font mb-4 text-gray-900">
              <AutoAwesomeMotionIcon className="text-herobg" />  Contact Us
            </h5>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base uppercase">
              send us message
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="firstname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="lastname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/*  */}
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/*  */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex ml-0 md:mx-auto hover:text-white outline border-0 py-1 px-8 hover:bg-herobg text-herobg uppercase rounded text-lg">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <Link
                  href="mailto:aetortech@gmail.com"
                  className="text-indigo-500"
                >
                  aetortech@gmail.com
                </Link>
                <p className="leading-normal my-5">
                  Akakpo Avenue.
                  <br />
                  Fiave, Ho-Volta Ghana
                </p>
                <p className="leading-normal my-5">
                  0248141505
                  <br />
                  0550919147
                </p>
                <span className="inline-flex">
                  <Link href="/" className="ml-4 text-gray-500">
                    <FacebookOutlinedIcon className="cursor-pointer w-10 h-10 text-lightblue" />
                  </Link>
                  <Link href="/" className="ml-4 text-gray-500">
                    <TwitterIcon className="cursor-pointer w-10 h-10 text-herobg" />
                  </Link>
                  <Link href="/" className="ml-4 text-gray-500">
                    <InstagramIcon className="cursor-pointer w-10 h-10 text-red" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
