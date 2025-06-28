import React from "react";

const PrimaryButton = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`md:px-[30px] px-[10.5px] md:py-[15px] py-[6.5px] rounded-full md:text-[25px] text-[7.78px] transition-colors cursor-pointer ${
        isActive
          ? "bg-[#2C2C2C] text-white"
          : "bg-white border border-[#BABABA] hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
