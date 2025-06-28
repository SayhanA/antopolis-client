import React from 'react'

const SectionHeader = ({children, className=''}) => {
  return (
    <h2 className={`md:text-[55px] text-[30px] font-bold leading-[120%] text-[#1F1F1F] ${className}`} >{children}</h2>
  )
}

export default SectionHeader