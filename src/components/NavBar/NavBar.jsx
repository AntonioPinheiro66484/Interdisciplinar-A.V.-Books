import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './NavBar.module.css'
import MenuImg from '../../assets/icons/menu.png'
import { fas } from  '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const NavBar = () => {
  const[isMobile, setIsMobile]=useState(false);

  return (

      <nav className={styles.navBar}>
        <div className={styles.caixaBotaoMobile}>
            <button className={styles.mobile}
              onClick={()=> setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <img className={styles.imgBotaoMobile} src={MenuImg}/>
               ):(
                <img className={styles.imgBotaoMobile} src={MenuImg}/>
               )}
            </button>
        </div>
            <ul className={isMobile ? styles.navLinksMobile : styles.navLinks}
              onClick={()=>setIsMobile(false)}
            >
              <li className={styles.item}><a  className={styles.link} href="#">Best Sellers</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">E-Books</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">Lançamentos</a>  </li>
              <li className={styles.item}><a  className={styles.link} href="#">Romances</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">Infantis</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">Mangás</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">HQ's</a></li>
            </ul>
      </nav>
                 
      
   

  )
}

export default NavBar