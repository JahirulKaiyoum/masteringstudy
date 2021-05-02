import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import "./Navbar.css";
import AboutDropDown from "./AboutDropDown";
import LearningDropDown from "./LearningDropDown";
import CoursesDropDown from "./CoursesDropDown";
import shoppingCart from "../../Icons/shopping-bag-solid.svg";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";

const Navbar = () => {
  const { signedInUser,setSignedInUser } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropDownTwo, setDropDownTwo] = useState(false);
  const [dropDownThree, setDropDownThree] = useState(false);
  const [dropDownFour, setDropDownFour] = useState(false);
  const { cart } = useContext(CartContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };
  const onMouseEnterAboutItem = () => {
    if (window.innerWidth < 960) {
      setDropDownTwo(false);
    } else {
      setDropDownTwo(true);
    }
  };
  const onMouseLeaveAboutItem = () => {
    if (window.innerWidth < 960) {
      setDropDownTwo(false);
    } else {
      setDropDownTwo(false);
    }
  };

  const extendElementTow = () => {
    dropDownTwo ? setDropDownTwo(false) : setDropDownTwo(true);
  };

  const onMouseEnterLearningItem = () => {
    if (window.innerWidth < 960) {
      setDropDownThree(false);
    } else {
      setDropDownThree(true);
    }
  };

  const onMouseLeaveLearningItem = () => {
    if (window.innerWidth < 960) {
      setDropDownThree(false);
    } else {
      setDropDownThree(false);
    }
  };

  const extendElementThree = () => {
    dropDownThree ? setDropDownThree(false) : setDropDownThree(true);
  };
  const onMouseCourseItem = () => {
    if (window.innerWidth < 960) {
      setDropDownFour(false);
    } else {
      setDropDownFour(true);
    }
  };

  const onMouseLeaveCourseItem = () => {
    if (window.innerWidth < 960) {
      setDropDownFour(false);
    } else {
      setDropDownFour(false);
    }
  };

  const extendElementFour = () => {
    dropDownFour ? setDropDownFour(false) : setDropDownFour(true);
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MasteringStudy
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={extendElement}
          >
            <Link to="/#" className="nav-links">
              Teaching <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <DropDown onCloseMobileMenu={closeMobileMenu} />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnterAboutItem}
            onMouseLeave={onMouseLeaveAboutItem}
            onClick={extendElementTow}
          >
            <Link to="/#" className="nav-links">
              About <i className="fas fa-caret-down" />
            </Link>
            {dropDownTwo && (
              <AboutDropDown onCloseMobileMenu={closeMobileMenu} />
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnterLearningItem}
            onMouseLeave={onMouseLeaveLearningItem}
            onClick={extendElementThree}
          >
            <Link to="/#" className="nav-links">
              Learning <i className="fas fa-caret-down" />
            </Link>
            {dropDownThree && (
              <LearningDropDown onCloseMobileMenu={closeMobileMenu} />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseCourseItem}
            onMouseLeave={onMouseLeaveCourseItem}
            onClick={extendElementFour}
          >
            <Link to="/#" className="nav-links">
              Courses & Qualifications <i className="fas fa-caret-down" />
            </Link>
            {dropDownFour && (
              <CoursesDropDown onCloseMobileMenu={closeMobileMenu} />
            )}
          </li>
          {!signedInUser.email && (
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SignUp / SignIN
              </Link>
            </li>
          )}

          {signedInUser.email && (
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={()=>setSignedInUser({})}
              >
                Log out
              </Link>
            </li>
          )}
          <li className="nav-item">
            <span className="cart-amount">{cart.length}</span>
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              <img src={shoppingCart} className="cart" alt="" width="18" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
