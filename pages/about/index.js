import style from "./about.module.css";

import Link from "next/link";
import Image from "next/image";

import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const about = () => {
  return (
    <>
      <div className="h-96 scroll-smooth bg-herobg z-1">
        <div className={`p-0  h-full bg-cover bg-bottom ${style.heroheader}`}>
          <div className="container flex flex-row justify-center mx-auto">
            <h2 className="pt-24 text-white text-5xl font-bold">About Us</h2>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-left mb-16 md:mb-0 md:ml-24 items-start">
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
            <p className="mb-8 leading-relaxed md:text-1xl text-gray  first-letter ">
              Our team of Developers is trained to handle any of the software or
              hardware issues with high efficiency and ease
            </p>
            <p className="mb-8 leading-relaxed md:text-1xl text-gray  first-letter ">
              We provide instant support to our client anywhere and at any time
              reducing your downtime so you can work anywhere any time, reducing
              your IT downtime so you increase your productivity
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
            
          </div>
          <div className="md:w-1/2">
            <Image
              className=" object-center rounded"
              alt="about"
              src="/img/about.jpg"
              width={450}
              height={300}
            />
            <div className="mt-5">
              <p className="mt-6 text-gray  first-letter">
                <CheckCircleOutlineIcon className="text-herobg  mr-1.5" />
                Respecting the diversity and giving the best of composition to our customers
              </p>

              <p className="mt-6 text-gray  first-letter">
                <CheckCircleOutlineIcon className="text-herobg  mr-1.5" />
                Committing to great product, service, and other initiatives that impact lives within and outside the organization.
              </p>

              <p className="mt-6 text-gray  first-letter">
                <CheckCircleOutlineIcon className="text-herobg  mr-1.5" />
                Pursuing new creative ideas that have the potential to change the world. Acting with honesty and honor without compromising the truth
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-herobg mb-40">
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
            <div className="md:w-1/2 relative">
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

       
     <section className="text-gray-600 body-font">
  <div className="container mx-auto flex md:px-24 px-5 py-5 md:py-24 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-4xl md:text-2xl mb-4 font-bold text-black md:text-left text-center underline underline-offset-8 ">You are welcome to aetortech official website.
        
      </h1>
      <p className="mb-6 leading-relaxed">A rear gem with special innovation to keep new trend of event in information and communication world.</p>

      <p className="mb-6 leading-relaxed">We Specialize in creating user friendly web architectures encompassing websites, web applications and many more with our focus on ensuring simplicity, clarity and effectiveness.</p>

      <p className="mb-6 leading-relaxed">With these blueprints in our mind, we work with your vision and goals to optimize your business/product through our thorough development process. Possibility is our driving force, flexibility is our pathway.</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src="/img/banner-img.png" width={450}
                  height={300} />
    </div>
  </div>
</section>

       
    </>
  );
};

export default about;
