import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './NavBar.module.css'
import MenuImg from '../../assets/icons/menu.png'

const NavBar = () => {
  return (
  
      <nav className={styles.navBar}>
        <div className={styles.caixabotaomenu}>
            <div className={styles.botao}>
              <i src={MenuImg}></i>
            </div>
         
        </div>
            <ul className={styles.paiItems}>
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