import {clients} from '../constants'
import styles,{ layout } from '../style'
const Clients = () => {
  return (
    <div className={`${layout.section} gap-[6.25rem] ${styles.paddingX} mb-8 mt-[-6rem]`}>
      {clients.map((client, index) => (
        <div key={index} className={`${layout.sectionImg} `}>
          <img
            
            src={client.logo}
            alt={client.logo}
            key={client.id}
          />
        </div>
      ))}
    </div>
  );
}

export default Clients