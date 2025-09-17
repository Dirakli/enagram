import React from "react";

interface ComparisonProps {
  isActive: boolean;
}

const Comparison: React.FC<ComparisonProps> = ({ isActive }) => {
  return (
    <div className="w-full flex mt-8 justify-center">
      <button
        className={`w-[142px] cursor-pointer rounded-md flex justify-center items-center h-[48px] ${
          isActive ? "bg-[#4571E4]" : "bg-[#383A4899]"
        }`}
      >
        <p className="text-sm leading-7 text-center align-middle text-[#FFFFFF]">
          შედარება
        </p>
      </button>
    </div>
  );
};

export default Comparison;
