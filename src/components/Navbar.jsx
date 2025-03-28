import logo from "../assets/myLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mohithkuruba/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/m6hith" target="_blank">
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/kurubamohith/?utm_source=ig_web_button_share_sheet"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
