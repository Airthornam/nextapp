import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
   <>
    
  <footer style={{backgroundImage: 'url(/img/footer.png)'}} className=" text-white body-font bg-herobg h-auto md:h-96">
  <div className="container px-0 md:px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row  flex-wrap flex-col">
    <div className="md:ml-24 w-80 flex-shrink-0 md:mx-0 mx-auto text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-2xl uppercase">aetor-tech</span>
      </a>
      <p className="mt-2 text-center text-white text-2xl md:text-lg md:text-left">Aetortech is a leading software development company that provides remote and IT management solutions for its clients in Ghana</p>
    </div>
    <div className="flex-grow flex flex-col md:flex-row md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS_</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/">
            <a className="">Home</a>
            </Link>
          </li>
          <li>
          <Link href="/">
            <a className="">About</a>
            </Link>
          </li>
          <li>
          <Link href="/">
            <a className="">Services</a>
            </Link>
          </li>
          <li>
          <Link href="/">
            <a className="">Portfolio</a>
            </Link>
          </li>
          <li>
          <Link href="/">
            <a className="">Contact</a>
            </Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">GET IN TOUCH_</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">GET IN TOUCH_</h2>
        <div>
          <p> Akakpo Avenue</p>
          <p>Fiave, Ho-Volta Ghana</p>
          <p> <span className="font-bold">Phone:</span>0550919147</p>
          <p> <span className="font-bold">Email:</span>aetortech@gmail.com</p>
        </div>
      </div> 
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto -mt-6 pb-32 md:pb-0 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear() }  aetortech company —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">aetortech@gmail.com</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    
   </>
  );
};

export default Footer;
