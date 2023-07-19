import styles, { layout } from "../style"
import { feedback } from "../constants";
const Card = ({ content, name, title, img }) => (
  <div className={`${layout.sectionInfo} gap-8 pb-10 px-6 feature-card rounded-[1.25rem] flex-1 justify-between`}>
    <span className={`text-gradient text-[100px] h-[80px]`}>&ldquo; {" "}</span>
    <p className="text-white font-poppins text-[18px]">{content}</p>
    <div className="flex gap-6 flex-wrap">
      <img src={img} alt={`${img}`} className="w-12 h-12" />
      <div>
        <span className="block text-white text-[20px] font-poppins">{name}</span>
        <span className={`${styles.paragraph} text-[16px]`}>{title}</span>
      </div>
    </div>
  </div>
);

const Testmonials = () => 
  (
    <section id="clients" className={` ${styles.padding} relative `}>
      <div className={`flex justify-between gap-16 items-center flex-col md:flex-row`}>
        <h2 className={`${styles.heading2} flex-1`}>
          What people are saying about us
        </h2>
        <p className={`${styles.paragraph} flex-1 text-balance`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${layout.section} relative z-[1]`}>
        {
            feedback.map((feed) => 
                <Card key={feed.id} {...feed} />
            )
        }
      </div>
      <div className={`absolute w-[20%] h-[100%] bg-testmonials-gradient z-0 right-0 top-0`}></div>
    </section>
  );


export default Testmonials