import { footerLinks, socialMedia } from "../constants"
import { logo } from "../assets"
import styles,{layout} from "../style"

const Footer = () => {
  return (
    <footer className={` ${styles.paddingX} `}>
      <div
        className={`flex sm:pt-20 pt-8 justify-between gap-12 border-b border-[#3F3E45] flex-wrap flex-col md:flex-row pb-6 `}
      >
        <div className="flex-[2]">
          <img
            src={logo}
            alt="logo"
            className="max-w-[100%]"
            loading="lazy"
          />
          <p className={`${styles.paragraph} mt-8`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((list, index) => (
          <div key={index} className="flex-1">
            <h4 className="text-white font-medium text-[18px] mb-6">
              {list.title}
            </h4>
            <ul>
              {list.links.map((link) => (
                <li
                  key={link.name}
                  className={`font-poppins text-dimWhite text-[16px] leading-6 mb-3`}
                >
                  <a href={`${link.link}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-4 items-center flex-wrap gap-6">
        <p className="font-apple text-[18px] text-dimWhite">
          Copyright &copy; 2023 HooBank. All Rights Reserved.
        </p>
        <ul className="flex justify-center gap-4">
          {socialMedia.map((app) => (
            <li key={app.id}>
              <a href={app.link} rel="noreferrer" target="_blank">
                <img
                  src={app.icon}
                  alt={`${app.id}`}
                  loading="lazy"
                  className="max-w-[100%] h-auto"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer