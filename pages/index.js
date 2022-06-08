
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.css";
import CheckIcon from "@mui/icons-material/Check";
import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import StorageIcon from "@mui/icons-material/Storage";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

export default function Home() {
  return (
    <>
    
     
      <div className="h-screen scroll-smooth bg-herobg z-1">
        <div className={`p-0  h-screen bg-cover bg-bottom ${style.heroheader}`}>
          <section data-aos="fade-up" className="text-white body-font">
            <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center">
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="lg:flex-grow -mt-16 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:ml-24 md:text-left mb-16 md:mb-0 items-center text-center"
              >
                <h1 className="title-font sm:text-4xl text-4xl  md:text-5xl mt-20 mb-10 md:mt-0 md:mb-5 font-medium text-white">
                  Design & Development
                  <br className="lg:inline-block" />
                  Service Provider
                </h1>
                <p className="mb-8 text-2xl leading-relaxed md:text-lg">
                  Due to our experience and competency, we are a software
                  development company that serves a wide range of organization
                  and individuals to improve their business.
                </p>
                <div className="flex justify-center">
                  <Link href="/about">
                    <a className="inline-flex text-white outline border-0 py-1 px-8 hover:bg-white hover:text-secondary uppercase rounded text-lg">
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 md:mt-0">
                <Image
                  data-aos="zoom-out"
                  data-aos-delay="200"
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/img/hero.png"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* about us section */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-left mb-16 md:mb-0 md:ml-24 items-start " data-aos="fade-up">
            <div className="flex">
              <AutoAwesomeMotionIcon className="text-herobg" />
              <h5 className="ml-4 mb-4 text-herobg font-bold">About Us</h5>
            </div>
            <h1 className="text-dark title-font text-3xl sm:text-4xl text-1xl mb-4 font-bold text-gray-900">
              The best Software solution
              <br className="lg:inline-block" />
              with 10 years of experience
            </h1>
            <p className="mb-8 leading-relaxed md:text-1xl text-gray  first-letter ">
              Aetortech is a leading software development company that provides
              remote and IT management solutions for its clients in Ghana. We
              provide you with the best solution to help resolve your issues
              quickly
            </p>
            <div className="md:flex flex-wrap md:justify-start item-start">
              <p className="font-bold md:mr-20 mb-6">
                <CheckIcon className="text-herobg" /> 24/7 Support
              </p>
              <p className="font-bold md:mr-20 mb-6">
                <CheckIcon className="text-herobg" /> Professional Staff
              </p>
              <p className="font-bold mb-6">
                <CheckIcon className="text-herobg" /> Fair Prices
              </p>
            </div>
            <div className="flex justify-start">
              <Link href="/about">
                <a className="inline-flex hover:text-white outline border-0 py-1 px-8 hover:bg-herobg text-herobg uppercase rounded text-lg">
                  Read More
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2"  data-aos="zoom-in">
            <Image
              className=" object-center rounded"
              alt="about"
              src="/img/about.jpg"
              width={450}
              height={300}
            />
          </div>
        </div>
      </section>

      <div className="bg-herobg">
        <section
          className="text-white body-font"
          style={{ backgroundImage: "url(/img/bg-newsletter.png)" }}
        >
          <div className="container px-5 py-20 mx-auto flex items-center justify-between">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 md:ml-24">
              <h1 className="title-font font-bold text-3xl text-gray-900">
                Get To Know Project Estimate?
              </h1>
              <p className="leading-relaxed mt-4">
                T&C APPLY: Estimated budgets are subject to review after
                discussions. This could lead to decrement or increment in the
                project fee.
              </p>
              <div className="flex justify-start mt-6">
                <Link href="/estimate">
                  <a className="inline-flex text-white outline border-0 py-1 px-8 hover:bg-white hover:text-secondary capitalize rounded text-lg">
                    Get Estimate
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 static relative">
              <div className="absolute -top-10 left-0">
                <Image
                  className=" object-center rounded "
                  alt="about"
                  src="/img/newsletter.png"
                  width={450}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-600 body-font md:mt-32">
        <div className="container px-5 py-24 md:px-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl md:text-4xl font-bold title-font text-herobg uppercase mb-4">
              Services
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out shadow-2xl p-4 md:w-1/3 flex flex-col text-center items-center md:mr-10">
              <div className="shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <DesktopMacIcon className="w-10 h-10 text-red" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3 hover:text-herobg">
                  Graphics Design
                </h2>
                <p className="leading-relaxed text-base">
                  An aesthetically designs that will promote a good image of
                  your business and also provide adequate information
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out shadow-2xl p-4 md:w-1/3 flex flex-col text-center items-center md:mr-10">
              <div className="shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <LaptopIcon className="w-10 h-10 text-orange" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3 hover:text-herobg">
                  Web Application Development
                </h2>
                <p className="leading-relaxed text-base">
                  Custom web application just tailored for your business or
                  organization need alone bringing your customer closer
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out shadow-2xl p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <WebIcon className="w-10 h-10 text-lightblue" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3 hover:text-herobg">
                  Web-Design
                </h2>
                <p className="leading-relaxed text-base">
                  We Design Professional Websites That Makes You Gain
                  Credibility, Save Money And Time, Keep Your Customers Informed
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row md:justify-between sm:-m-4 -mx-4 -mb-10 md:mt-16 mt-14 md:space-y-0 space-y-6">
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out shadow-2xl p-4 md:w-1/3 flex flex-col text-center items-center md:mr-10">
              <div className="shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <LanguageIcon className="w-10 h-10 text-blue" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Networking
                </h2>
                <p className="leading-relaxed text-base">
                  Aetortech Undertakes Computer Networking Activities Of
                  Companies Ensuring Interconnection Of Computers
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out shadow-2xl p-4 md:w-1/3 flex flex-col text-center items-center md:mr-10">
              <div className="shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <StorageIcon className="w-10 h-10 text-green" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Database Administration
                </h2>
                <p className="leading-relaxed text-base">
                  We Undertake The Responsibility Of Managing And Administering
                  Database, Improving Organization Data Security
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hover:scale-175 transition delay-150 duration-300 ease-in-out shadow-2xl p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="shadow-2xl w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <PhoneIphoneIcon className="w-10 h-10 text-yellow" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                  Mobile App Development
                </h2>
                <p className="leading-relaxed text-base">
                  We build mobile applications for different platforms using
                  top-notch technologies and proven approaches.{" "}
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
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
}
