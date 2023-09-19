import type { NavLink } from "../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollToSection } from "../../utils/utils";

const LinkWithIcon = ({ icon, id, text, toggleDropDownMenu }: NavLink) => {
  const onLinkClick = () => {
    scrollToSection(id);
    if (toggleDropDownMenu) {
      toggleDropDownMenu();
    }
  };

  return (
    <li>
      <a
        onClick={onLinkClick}
        className="hover-line relative 
                flex cursor-pointer items-center gap-2 py-2 transition duration-300 hover:text-gray-950 hover:dark:text-white"
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
        {text}
      </a>
    </li>
  );
};

export default LinkWithIcon;
