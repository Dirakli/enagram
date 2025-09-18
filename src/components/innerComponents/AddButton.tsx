import React from "react";

interface AddButtonProps {
  isActive: boolean;
  onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`w-full md:w-[150px] md:mt-0 mt-4 cursor-pointer rounded-md flex justify-center items-center h-[48px] gap-1 ${
        isActive ? "bg-[#4571E4]" : "bg-[#383A4899] cursor-not-allowed"
      }`}
    >
      <img src="/add.svg" alt="add image" />
      <p className=" text-sm leading-7 text-center align-middle text-[#FFFFFF]">
        ახლის გახსნა
      </p>
    </button>
  );
};

export default AddButton;
