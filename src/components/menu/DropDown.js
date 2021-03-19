import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import "./DropDown.css"

const DropDown = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
      <ul
      onClick={props.onCloseMobileMenu}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
    );
};

export default DropDown;