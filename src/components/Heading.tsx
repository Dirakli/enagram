function Heading() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-x-[9px] md:gap-x-[11px]">
        <img src="/logo.svg" alt="Logo" />
        <img src="/enagram.svg" alt="enagram text" />
      </div>

      <img src="/burger.svg" alt="burger bar" />
    </div>
  );
}

export default Heading;
