import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import './NavBar.css';

const NavBar = ({ page, routeTo }) => (
    <ul className="nav-header">
      <li>
        {
          routeTo === 0
            ? (
              <>
                <FaChevronLeft />
                <span className="arrow-back">
                  2015
                </span>
              </>
            ) : (
              <NavLink to="/dog-breeds" className="back-link">
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

NavBar.propTypes = {
  page: PropTypes.string.isRequired,
  routeTo: PropTypes.string.isRequired,
};

export default NavBar;
