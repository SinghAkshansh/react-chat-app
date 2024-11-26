const Navbar = () => {
  return (
    <header className="border-b bg-white font-['Roboto_Mono'] min-h-[60px] px-10 py-3 relative tracking-wide relative z-50">
      <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[15px] text-[#000000] block"
              >
                Home
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] text-[#000000] lg:hover:fill-[#007bff] block"
              >
                Pages
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] text-[#000000] lg:hover:fill-[#007bff] block"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] text-[#000000] block"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] text-[#000000] block"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] text-[#000000] block"
              >
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] text-[#000000] block"
              >
                Source
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-8">
          <button
            type="button"
            className="py-3.5 px-7 text-sm tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
          <button
            type="button"
            className="py-3.5 px-7 text-sm tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
