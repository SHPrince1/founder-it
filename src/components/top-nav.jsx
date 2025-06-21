import React from 'react';
import style from '../styles/top-nav.module.css'

const TopNav = () => {
  return (
    
      <div className={style.container}>
        <div>
            <h6>LOGO</h6>
        </div>
        <div className={style.order}>
            <a href='/'>Order Now</a>
        </div>
      </div>
    
  );
}

export default TopNav;
