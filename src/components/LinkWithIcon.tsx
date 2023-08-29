import type { NavLink } from '../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkWithIcon = (props: NavLink): JSX.Element => {
  return (
    <li>
      <a
        href={props.id}
        className="hover-line relative 
                flex cursor-pointer items-center gap-2 py-2 transition duration-300 hover:text-gray-950 hover:dark:text-white"
      >
        <FontAwesomeIcon icon={props.icon} className="text-xl" />
        {props.text}
      </a>
    </li>
  );
};
export default LinkWithIcon;
