import style from "./services.module.css";
import Image from 'next/image'

import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import StorageIcon from "@mui/icons-material/Storage";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import CalculateIcon from '@mui/icons-material/Calculate';
import ScaleIcon from '@mui/icons-material/Scale';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const services = () => {
  return (
    <>
      <div className="h-96 scroll-smooth bg-herobg z-1">
        <div className={`p-0  h-full bg-cover bg-bottom ${style.heroheader}`}>
          <div className="container flex flex-row justify-center mx-auto">
            <h2 className="pt-24 text-white text-5xl font-bold">Services</h2>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font md:mt-32">
        <div className="container px-5 py-24 md:px-24 mx-auto">
          <div className="text-center mb-20">
            <h5 className="ml-4 mb-4 text-herobg font-bold">
              <AutoAwesomeMotionIcon className="text-herobg" /> &nbsp; Our
              Services
            </h5>
            <h1 className="sm:text-3xl text-2xl md:text-4xl font-bold title-font text-herobg capitalize mb-4">
              What Solutions We Provide
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container md:px-24 px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-herobg">
              Why choose us?
            </h1>
            <p className="lg:w-1/2 text-1xl w-full leading-relaxed text-black underline underline-offset-8 mb-3">
              We have got enough reasons why you should choose us for your
              project
            </p>

            <p className="lg:w-1/2 w-full leading-relaxed text-gray">
              Are you thinking of why you should choose Aetortech? We have
              gained enough experience to cater to your various requirements.
              Some of the key reasons for you to choose us for your services
              include
            </p>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo inline-flex items-center justify-center text-white relative z-10">
                    <CalculateIcon className="w-10 h-10 text-red" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-lg text-gray mb-1 tracking-wider">
                  High Accuracy services
                  </h2>
                  <p className="leading-relaxed">
                  We have a strict quality monitoring process in place, which ensures that every issue is professionally delth with and resolved with the same seriousness and care
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <ScaleIcon className="w-10 h-10 text-scaleicons" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-lg text-gray mb-1 tracking-wider">
                  Scalability
                  </h2>
                  <p className="leading-relaxed">
                  Whether your business is small or large, we can support you anytime and anywhere
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <SecurityOutlinedIcon className="w-10 h-10 text-lightblue" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-lg text-gray mb-1 tracking-wider">
                  Data Security
                  </h2>
                  <p className="leading-relaxed">
                  Because we greatly value the security of your confidential data, we take necessary precautions to prevent breach and loss of data under all circumstances. All our agents are professionals who sign Non- Disclosure agreements giving you peace of mind
                  </p>
                </div>
              </div>
            </div>
            <Image
              className="md:w-1/2  rounded-lg md:mt-0 mt-12"
              src="/img/details-2-office-team-work.svg"
              alt="step"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default services;
