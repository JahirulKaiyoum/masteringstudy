import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LearningDropDown.css"
import { LearningItems } from './LearningItems';

const LearningDropDown = (props) => {
    const [click, setClick] = useState(false);
    return (
        <>
      <ul
      onClick={props.onCloseMobileMenu}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {LearningItems.map((item, index) => {
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

export default LearningDropDown;