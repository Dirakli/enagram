function Inputs() {
  return (
    <div className="w-full">
      <textarea
        placeholder="დაიწყე წერა..."
        className="w-full bg-[#F0F7FF] rounded-[8px] p-3 min-h-[190px] text-[#383A4899] focus:outline-none focus:ring-0 text-[14px] leading-[22px] tracking-[0px] resize-none"
      />
      <div className="w-full flex justify-center py-4">
        <img src="arrows.svg" alt="arrows icon" />
      </div>
      <textarea
        placeholder="დაიწყე წერა..."
        className="w-full bg-[#F0F7FF] rounded-[8px] p-3 min-h-[190px] text-[#383A4899] focus:outline-none focus:ring-0 text-[14px] leading-[22px] tracking-[0px] resize-none"
      />
    </div>
  );
}

export default Inputs;
