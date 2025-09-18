function Heading({ className }: { className?: string }) {
  return (
    <div
      className={`w-full lg:bg-[#132450] flex-none lg:h-screen ${className}`}
    >
      <div className="hidden lg:flex mr-[27px] mt-3 justify-end">
        <img src="left-arrows.svg" alt="arrow left" />
      </div>

      <div className="flex py-[12px] px-5 md:px-[30px] lg:px-6 bg-[#132450] w-full justify-between">
        <div className="flex cursor-pointer gap-x-[9px] md:gap-x-[11px]">
          <img src="/logo.svg" alt="Logo" />
          <img src="/enagram.svg" alt="enagram text" />
        </div>

        <img
          className="lg:hidden cursor-pointer"
          src="/burger.svg"
          alt="burger bar"
        />
      </div>

      <div className="flex items-center cursor-pointer lg:border-none border-b-1 border-b-[#EDEDED] w-full py-[18px] px-5 md:px-[33px]">
        <img
          className="w-4 h-4 md:w-6 md:h-6"
          src="/lan.svg"
          alt="language logo"
        />
        <p className="font-bold text-[#132450] md:text-base text-xs leading-[20px] tracking-[0] pl-[4px]">
          ტექსტის შედარება
        </p>
        <img className="pl-[4px]" src="/more.svg" alt="more logo" />
      </div>
    </div>
  );
}

export default Heading;
