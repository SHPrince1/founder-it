import React from 'react';
import style from '../styles/top-nav.module.css'
import Logo from '../assets/logo.png'

const TopNav = () => {
  return (
    
      <div className={style.container}>
        <div className={style.contentDiv}>

        <div className={style.imgDiv}>
          <a href='/'>
           <img src={Logo} alt=''  size={5}/>
          </a>
        </div>
        <div className={style.order}>
            <a href='/'>Order Now</a>
        </div>
        </div>
      </div>
    
  );
}

export default TopNav;
