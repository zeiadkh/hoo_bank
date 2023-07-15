// import React from 'react'
import {robot, discount} from "../assets"
import styles, { layout } from "../style";
import {stats} from "../constants"
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`${styles.padding} font-poppins `}>
      <div className={`flex ${layout.section} gap-16`}>
        <div className="flex-1">
          <div className="flex bg-discount-gradient gap-3 w-fit px-4 rounded-lg py-1 items-center">
            <img src={discount} alt="discount-logo"></img>
            <p className="text-discount">
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>
          <h1 className="text-white text-[48px] sm:text-[74px]">
            The Next
            <br /> <span className="text-gradient">Generation</span>
            <br /> Payment Method.
          </h1>
          <p className="font-abel text-discount w-8/12">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <GetStarted />
        <div className="sm:mr-[-8rem] mr-[-3rem] basis-1/2">
          <img
            className="block relative z-[5] w-[100%] h-[100%]"
            src={robot}
            alt="robot"
          />
          <div className="absolute z-[0] w-[30%] h-[40%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[40%] h-[65%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[30%] h-[100%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

      <div className={` sm:justify-between ${layout.section} items-center`}>
        {stats.map((stat) => {
          return (
            <div
              key={stat.id}
              className="flex gap-6 items-center flex-1 w-[270px] "
            >
              <strong className="text-white sm:text-[42px] text-[32px] ">
                {stat.value}
              </strong>
              <span className="text-gradient lg:relative">{stat.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero