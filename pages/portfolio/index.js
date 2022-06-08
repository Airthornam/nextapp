import Link from "next/link";
import Image from "next/image";

import style from "./portfolio.module.css";

import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

const portfolio = () => {
  return (
    <>
      <div className="h-96 scroll-smooth bg-herobg z-1">
        <div className={`p-0  h-full bg-cover bg-bottom ${style.heroheader}`}>
          <div className="container flex flex-row justify-center mx-auto">
            <h2 className="pt-24 text-white text-5xl font-bold">Portfolio</h2>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 md:px-24 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h5 className="sm:text-3xl text-2xl md:text-lg font-bold title-font mb-4 text-gray-900">
              <AutoAwesomeMotionIcon className="text-herobg" /> Our Project
            </h5>
            <h1 className="lg:w-2/3 mx-auto font-medium md:font-bold text-3xl leading-relaxed ">
              Recently Launched Projects
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between sm:-m-4 -mx-4 -mb-10 md:mt-16 mt-14 md:space-y-0 space-y-6 m-24">
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out p-4 md:w-1/3 flex flex-col text-center items-center md:mr-10">
              <Image
                alt=""
                className="object-center object-rounded"
                src="/img/happy.jpg"
                width={700}
                height={600}
              />
            </div>
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out p-4 md:w-1/3 flex flex-col text-center items-center md:mr-10">
              <Image
                alt=""
                className="object-center object-rounded"
                src="/img/techtribe.jpg"
                width={700}
                height={600}
              />
            </div>

            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out  p-4 md:w-1/3 flex flex-col text-center items-center">
              <Image
                alt=""
                className="object-center object-rounded"
                src="/img/hepss.jpg"
                width={700}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default portfolio;
