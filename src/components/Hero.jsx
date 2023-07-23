import { discount} from "../assets"
import styles, { layout } from "../style";
import Stat from "./Stat";
import GetStarted from "./GetStarted";
import { stats } from "../constants";


const Hero = () => {
  return (
    <section id="home" className={`${styles.padding} font-poppins relative`}>
      <div className={`flex ${layout.section} gap-16`}>
        <div className="flex-1">
          <div className="flex bg-discount-gradient gap-3 w-fit px-4 rounded-lg py-1 items-center">
            <img
              src={discount}
              alt="discount-logo"
              className="max-w-[100%] h-auto"
              loading="lazy"
            ></img>
            <p className="text-discount">
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>
          <h1 className="text-white text-[48px] sm:text-[74px] lg:w-max">
            The Next
            <br /> <span className="text-gradient">Generation</span>
            <br /> Payment Method.
          </h1>
          <p className="font-abel text-discount md:w-8/12 w-full">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div
          className={`${styles.flexCenter} lg:absolute left-[40%] top-[20%]`}
        >
          <GetStarted />
        </div>
        <div className="sm:mr-[-8rem] mr-[-3rem] ">
          <img
            loading="lazy"
            className="block z-[5] relative w-[100%] h-auto"
            src={
              "https://ik.imagekit.io/3e6idanej/robot.png?updatedAt=1689616134527"
            }
            alt="robot"
          />
          <div className="absolute z-[0] w-[20%] h-[40%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[20%] h-[65%] rounded-full white__gradient bottom-0" />
          <div className="absolute z-[0] w-[20%] h-[50%] right-20 bottom-[50%] blue__gradient" />
        </div>
      </div>

      <div className={` sm:justify-between ${layout.section} items-center`}>
        {stats.map(stat => <Stat key={stat.id} {...stat}/>
          
        )}
      </div>
      <div
        className={`absolute w-[10%] h-[50%] bg-hero-gradient z-0 left-0 top-[0]`}
      ></div>
    </section>
  );
}

export default Hero