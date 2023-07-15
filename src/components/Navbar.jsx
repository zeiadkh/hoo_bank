import styles  from '../style'
import {logo, close, menu} from "../assets"
import {navLinks} from '../constants'
import {useState} from 'react'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    return (
      <nav
        className={`w-full flex justify-between	${styles.paddingX} sticky z-[6]`}
      >
        <img src={logo} alt="logo" className="w-[82px] h-[23px]" />
        <ul className="hidden gap-4 font-poppins text-white sm:flex">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="hover:text-discount">
              <a href={`#${navLink.title}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden flex-col items-end fixed right-12 ">
          <button
            className="mb-4"
            type="button"
            title="toggle-navigation"
            onClick={() => setToggle((prev) => !prev)}
          >
            <img
              className=""
              src={toggle ? close : menu}
              alt={toggle ? "close-menu" : "open-menu"}
            />
          </button>

          {toggle && (
            <ul className="flex gap-4 font-poppins text-white flex-col bg-gray-gradient sidebar w-auto px-6 py-4 rounded-lg mt-4">
              {navLinks.map((navLink) => (
                <li key={navLink.id} className="hover:text-discount">
                  <a href={`#${navLink.title}}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    );}


export default Navbar