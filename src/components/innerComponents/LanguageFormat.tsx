function LanguageFormat() {
  return (
    <div className="flex flex-col md:flex-row">
      <button className="flex py-[9px] md:w-[155px] cursor-pointer pl-[14px] pr-[6px] border-1 border-[#E0E0E0] rounded-[8px] justify-between items-center">
        <p className="text-[#383A48] text-[14px] leading-[22px] tracking-[0] text-center align-middle">
          ქართული
        </p>
        <img
          className="pl-[4px] cursor-pointer"
          src="/more.svg"
          alt="more logo"
        />
      </button>
      <label className="flex md:ml-6 cursor-pointer md:items-center md:mt-0 mt-[17px]">
        <input type="checkbox" className="hidden peer" />

        <div className="w-5 h-5 border-2 border-[#E0E0E0] rounded peer-checked:border-blue-500 peer-checked:bg-blue-500"></div>

        <span className="text-[#383A48] ml-2 text-[14px] leading-[22px] tracking-[0] text-center align-middle">
          ფორმატის შენარჩუნება
        </span>
      </label>
    </div>
  );
}

export default LanguageFormat;
