import React from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'

const GetStarted = () => {
  return (
    <>
      <div className="p-8 started-text border rounded-full w-[140px] h-[140px] flex items-center justify-center flex-col self-end cursor-pointer">
        <p className='flex gap-2'>
          Get{" "}
          <span>
            <BsBoxArrowUpRight color="white" size={16} />
          </span>
        </p>
        Started
      </div>
    </>
  );
}

export default GetStarted