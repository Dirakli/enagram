import React from "react";

interface InputsProps {
  value1: string;
  value2: string;
  onChange1: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChange2: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({
  value1,
  value2,
  onChange1,
  onChange2,
}) => {
  return (
    <div className="w-full mt-6 flex flex-col md:flex-row">
      <textarea
        placeholder="დაიწყე წერა..."
        value={value1}
        onChange={onChange1}
        className="w-full bg-[#F0F7FF] rounded-[8px] p-3 min-h-[190px] md:h-[432px] text-[#383A48] placeholder:text-[#383A4899] focus:outline-none focus:ring-0 text-[14px] leading-[22px] tracking-[0px] resize-none"
      />
      <div className="w-full md:w-[52px] md:mx-2.5 flex justify-center py-4">
        <img
          src="arrows.svg"
          alt="arrows icon"
          className="transform md:rotate-90 md:w-8"
        />
      </div>
      <textarea
        placeholder="დაიწყე წერა..."
        value={value2}
        onChange={onChange2}
        className="w-full bg-[#F0F7FF] rounded-[8px] p-3 min-h-[190px] md:h-[432px] text-[#383A48] placeholder:text-[#383A4899] focus:outline-none focus:ring-0 text-[14px] leading-[22px] tracking-[0px] resize-none"
      />
    </div>
  );
};

export default Inputs;
