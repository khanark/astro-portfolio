import type { NavLink } from "../../constants/constants";
import { style } from "../../constants/style";
import { scrollToSection } from "../../utils/utils";

const LinkWithIcon = ({
  iconName,
  id,
  text,
  toggleDropDownMenu,
  type = "section",
  path,
}: NavLink) => {
  const onLinkClick = () => {
    if (!id) return;
    scrollToSection(id);
    if (toggleDropDownMenu) {
      toggleDropDownMenu();
    }
  };

  const types: { [key: string]: JSX.Element } = {
    section: (
      <a
        onClick={onLinkClick}
        className={`${style.textSecondary} hover-line relative
                flex cursor-pointer items-center gap-2 py-2 transition duration-300 hover:text-gray-950 hover:dark:text-white`}
      >
        <i className={`fa-solid ${iconName}`}></i>
        {text}
      </a>
    ),
    "anchor-link": (
      <a
        href={path}
        className={`${style.textSecondary} hover-line relative
                flex cursor-pointer items-center gap-2 py-2 transition duration-300 hover:text-gray-950 hover:dark:text-white`}
      >
        <i className={`fa-solid ${iconName}`}></i>
        {text}
      </a>
    ),
  };

  return types[type];
};

export default LinkWithIcon;
