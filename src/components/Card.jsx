import React from 'react'
import Button from './Button';
import styles, {layout} from '../style'
import { card } from '../assets';

const Card = () => {
  return (
    <section
      id="product"
      className={`${layout.section} ${styles.padding} gap-12`}
    >
      <div className={`flex-1 flex flex-col gap-6`}>
        <h2 className={`${styles.heading2} `}>
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} `}>
          WArcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={`${card}`} alt="" />
      </div>
    </section>
  );
}

export default Card