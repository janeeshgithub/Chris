
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 text-white mt-auto">
      <div className="flex flex-col items-center mb-2">
        <a
          href="https://www.linkedin.com/in/chris-2oo4"
          target="_blank"
          rel="noopener noreferrer"
          className="relative border hover:border-purple-600 duration-300 group cursor-pointer text-purple-50 overflow-hidden h-10 w-32 rounded-md bg-purple-800 p-1 flex justify-center items-center font-bold"
        >
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-300 ease-in-out bg-purple-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-20 h-20 rounded-full group-hover:scale-150 transition-all duration-300 ease-in-out bg-purple-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-300 ease-in-out bg-purple-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-12 h-12 rounded-full group-hover:scale-150 transition-all duration-300 ease-in-out bg-purple-600 delay-150 group-hover:delay-200"></div>
          <p className="z-10 text-xs">Discover</p>
        </a>
      </div>
      <div className="text-center text-sm p-2">
        ❤❤ CHRISTOPHER A ❤❤
        <br />
        Let's Connect
        <br />
        Let's Grow
      </div>
    </div>
  );
};

export default Footer;
