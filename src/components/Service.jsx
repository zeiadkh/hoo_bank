import styles, { layout } from '../style'
import Button from './Button'
const Service = () => {
  return (
    <section
      className={`flex md:flex-row flex-col m-auto lg:mx-16 bg-black-gradient-2 justify-between items-center rounded-[28px] text-center sm:text-left gap-8 md:py-6 md:px-20 py-6 px-8`}
    >
      <div className="flex-1">
        <h2 className={`${styles.heading2} leading-tight `}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} text-balance`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
}

export default Service