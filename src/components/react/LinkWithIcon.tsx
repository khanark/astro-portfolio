import type { NavLink } from "../../constants/constants";
import { scrollToSection } from "../../utils/utils";

const LinkWithIcon = ({ iconName, id, text, toggleDropDownMenu }: NavLink) => {
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
        <i className={`fa-solid ${iconName}`}></i>
        {text}
      </a>
    </li>
  );
};

export default LinkWithIcon;
