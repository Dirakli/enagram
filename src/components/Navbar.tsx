function Navbar() {
  return (
    <nav className="hidden lg:flex pl-6 mt-[51px]">
      <ul>
        <li className="flex">
          <img src="abc.svg" alt="abc logo" />
          <span className="font-normal ml-[9px] text-[14px] text-[#FFFFFF] leading-[20px] tracking-[0] align-middle">
            მართლწერა
          </span>
        </li>
        <li className="flex bg-amber-50">
          <img src="lan-blue.svg" alt="language logo blue" />
          <span className="font-normal ml-[9px] text-[14px] text-[#132450] leading-[20px] tracking-[0] align-middle">
            ტექსტის შედარება
          </span>
        </li>
        <li className="flex">
          <img src="mic.svg" alt="mic logo" />
          <span className="font-normal ml-[9px] text-[14px] text-[#FFFFFF] leading-[20px] tracking-[0] align-middle">
            ხმა
          </span>
          <img src="arrow-right.svg" alt="arrow right logo" />
          <span className="font-normal ml-[9px] text-[14px] text-[#FFFFFF] leading-[20px] tracking-[0] align-middle">
            ტექსტი
          </span>
        </li>

        <li className="flex">
          <img src="voice.svg" alt="voice logo" />
          <span className="font-normal ml-[9px] text-[14px] text-[#FFFFFF] leading-[20px] tracking-[0] align-middle">
            ტექსტი
          </span>
          <img src="arrow-right.svg" alt="arrow right logo" />
          <span className="font-normal ml-[9px] text-[14px] text-[#FFFFFF] leading-[20px] tracking-[0] align-middle">
            ხმა
          </span>
        </li>

        <li className="flex">
          <img src="pdf.svg" alt="pdf logo" />
          <span className="font-normal ml-[9px] text-[14px] text-[#FFFFFF] leading-[20px] tracking-[0] align-middle">
            PDF კონვერტაცია
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
