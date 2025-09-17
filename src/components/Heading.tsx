function Heading() {
  return (
    <div className="w-full">
      <div className="flex py-[12px] px-5 md:px-[33px] bg-[#132450] w-full justify-between">
        <div className="flex cursor-pointer gap-x-[9px] md:gap-x-[11px]">
          <img src="/logo.svg" alt="Logo" />
          <img src="/enagram.svg" alt="enagram text" />
        </div>

        <img className="cursor-pointer" src="/burger.svg" alt="burger bar" />
      </div>
      <div className="flex cursor-pointer border-b-1 border-b-[#EDEDED] w-full py-[18px] px-5 md:px-[33px]">
        <img src="/lan.svg" alt="language logo" />
        <p className="font-bold text-[#132450] text-[12px] leading-[20px] tracking-[0] pl-[4px]">
          ტექსტის შედარება
        </p>
        <img className="pl-[4px] " src="/more.svg" alt="more logo" />
      </div>
    </div>
  );
}

export default Heading;
