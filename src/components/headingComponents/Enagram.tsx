import BurgerMenu from "./BurgerMenu";

const Enagram = () => {
  return (
    <div className="flex  py-[12px] px-5 md:px-[30px] lg:px-6 bg-[#132450] w-full justify-between">
      <div className="flex items-center lg:h-[44px] cursor-pointer gap-x-[9px] md:gap-x-[11px]">
        <img className="lg:w-[42.65px] " src="/logo.svg" alt="Logo" />
        <img
          className="lg:h-[7.5px] lg:w-[56.3px]"
          src="/enagram.svg"
          alt="enagram text"
        />
      </div>

      <BurgerMenu />
    </div>
  );
};

export default Enagram;
