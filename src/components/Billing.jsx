import styles,{layout} from "../style";
import {bill, apple, google} from "../assets";
const Billing = () => {
  return (
    <section  className={`${layout.sectionReverse} ${styles.padding} gap-12 relative`}>
      <div className={`${layout.sectionImg}`}>
        <img src={bill} alt="bill" />
      </div>

      <div className={`flex-1 flex flex-col gap-6`}>
        <h2 className={`${styles.heading2} `}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mb-10`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex xs:flex-row gap-8 flex-col ">
          <img
            src={apple}
            alt="apple"
            aria-roledescription="download-apps tore"
            className="cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            aria-roledescription="download-google play"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className={`absolute w-[20%] h-[100%] bg-control-gradient z-0 left-0 top-0`}></div>
    </section>
  );
}

export default Billing