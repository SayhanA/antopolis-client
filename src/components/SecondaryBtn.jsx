import React from "react";

const SecondaryBtn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-nowrap md:px-[30px] px-[10.5px] md:py-[15px] py-[6.5px] rounded-full md:text-[25px] text-[7.78px] transition-colors cursor-pointer bg-[#2C2C2C] text-white`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
