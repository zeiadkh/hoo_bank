import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`text-pimary text-[18px] bg-blue-gradient px-6 py-2 w-fit rounded-[8px] font-medium ${styles}`}>
        Get Started
    </button>
  )
}

export default Button