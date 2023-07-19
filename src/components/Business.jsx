import { features } from "../constants"
import styles,{layout} from "../style"
import Button from "./Button";

const Feature = ({ icon, title, content, index }) => (
  <div className={`flex gap-8 items-center text-white ${index < features.length - 1 ?"mb-6" :'' } feature-card p-4 rounded-[18px] sm:flex-row flex-col`}>
    <div className="icon p-4 rounded-full bg-dimBlue ">
      <img src={icon} alt={`${icon}`} />
    </div>
    <div className="content">
      <h3 className="font-semibold text-[18px]">{title}</h3>
      <p className="text-dimWhite">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section} ${styles.padding} gap-12`}>
      <div className={`flex-1 flex flex-col gap-6`}>
        <h2 className={`${styles.heading2} `}>
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} `}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className={`flex-1 flex flex-col`}>
        {features.map((feature, index) => (
          <Feature
            key={feature.id}
            {...feature}
            index= {index} 
          />
        ))}
      </div>
    </section>
  );
}

export default Business