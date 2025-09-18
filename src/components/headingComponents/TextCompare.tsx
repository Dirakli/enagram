const TextCompare = () => {
  return (
    <div className="flex lg:hidden items-center cursor-pointer lg:border-none border-b-1 border-b-[#EDEDED] w-full py-[18px] px-5 md:px-[33px]">
      <img
        className="w-4 h-4 md:w-6 md:h-6"
        src="/lan.svg"
        alt="language logo"
      />
      <p className="compare font-bold text-[#132450] md:text-base text-xs leading-[20px] tracking-[0] pl-[4px]">
        ტექსტის შედარება
      </p>
      <img className="pl-[4px]" src="/more.svg" alt="more logo" />
    </div>
  );
};

export default TextCompare;
