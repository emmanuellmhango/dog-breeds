import { NavLink } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import './NavBar.css';

const NavBar = ({ page, routeTo }) => {
  return (
    <ul className="nav-header">
      <li>{routeTo === 0 ?
        (
          <>
            <FaChevronLeft />
            <span className="arrow-back">
              2015
            </span>
          </>
        ) : (
          <NavLink to="/" className="back-link">
            <FaChevronLeft />
            <span className="arrow-back">
              2015
            </span>
          </NavLink>
        )
      }
      </li>
      <li className="nav-title">
        {page}
      </li>
      <li className="icons">
        <FaMicrophone />
      </li>
      <li className="icons-last">
        <RiSettings5Fill />
      </li>
    </ul>
  );
};

export default NavBar;