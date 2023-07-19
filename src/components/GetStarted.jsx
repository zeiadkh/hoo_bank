import styles from '../style'
import {BsBoxArrowUpRight} from 'react-icons/bs'

const GetStarted = () => {
  return (
    <>
      <div className={`p-8 border started-text rounded-[50%] w-[140px] h-[140px]  ${styles.flexCenter} flex-col cursor-pointer`}>
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