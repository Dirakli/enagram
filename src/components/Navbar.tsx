const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-col flex-1 bg-[#132450]">
      <ul className="flex flex-col py-6">
        <li className="w-full cursor-pointer bg-white">
          <div className="overflow-hidden rounded-br-[10px] w-full">
            <div
              className="flex py-[18px]  pl-6 bg-[#132450] w-full items-center
                  transition-colors border-0"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <img src="abc.svg" alt="abc logo" />
              </div>
              <span className="text-white  same-font text-sm font-normal">
                მართლმწერი
              </span>
            </div>
          </div>
        </li>

        <li className="flex cursor-pointer ml-[12.8px] items-center px-3 py-[14px] rounded-l-3xl bg-white text-[#132450] -mr-4 pr-8">
          <div className="w-6 h-6 flex items-censtify-center mr-3">
            <img src="lan-blue.svg" alt="language logo" />
          </div>
          <span className="compare text-[#132450] text-sm  font-normal">
            ტექსტის შედარება
          </span>
        </li>

        <li className="w-full cursor-pointer bg-white">
          <div className="overflow-hidden rounded-tr-[10px] w-full">
            <div className="flex pl-6 items-center transition-colors py-[18px]  bg-[#132450]">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <img src="mic.svg" alt="microphone logo" />
              </div>
              <span className="text-white text-sm font-normal same-font">
                ხმა
              </span>
              <img
                className="ml-1"
                src="arrow-right.svg"
                alt="right arrow logo"
              />
              <span className="text-white ml-1 text-sm font-normal same-font">
                ტექსტი
              </span>
            </div>
          </div>
        </li>

        <li
          className="flex pl-6 cursor-pointer
         items-center mt-[10px] px-3 py-2 rounded-lg transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <img src="voice.svg" alt="voice logo" />
          </div>
          <span className="text-white text-sm font-normal same-font">
            ტექსტი
          </span>
          <img className="ml-1" src="arrow-right.svg" alt="arrow right logo" />
          <span className="ml-1 text-white text-sm font-normal same-font">
            ხმა
          </span>
        </li>

        <li className="flex cursor-pointer mt-[20px] pl-6 items-center px-3 py-2 rounded-lg  transition-colors">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <img src="pdf.svg" alt="pdf logo" />
          </div>
          <span className="text-white text-sm font-normal same-font">
            PDF კონვერტაცია
          </span>
        </li>
      </ul>

      <div className="h-12 mt-[394px]  flex items-center pl-[14px] border-t border-white/10">
        <div className="flex items-center">
          <img src="letter.svg" alt="letter logo" />{" "}
          <span className="text-white whitespace-nowrap text-sm ml-[5px] font-normal same-font">
            თამარ ონიანი
          </span>
          <div>
            <img
              className="ml-[66px] cursor-pointer"
              src="dots-menu.svg"
              alt="dots icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
