import React, {useState} from 'react';
import styles from './NavBar.module.css'
import MenuImg from '../../assets/icons/menu.png'
import cancelImg from '../../assets/icons/fechar.png'


const NavBar = () => {
  const[isMobile, setIsMobile]=useState(false);

  return (

      <nav className={styles.navBar}>
        <div className={styles.caixaBotaoMobile}>
            <button className={styles.mobile}
              onClick={()=> setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <img className={styles.imgBotaoMobile} src={cancelImg}/>
               ):(
                <img className={styles.imgBotaoMobile} src={MenuImg}/>
               )}
            </button>
        </div>

            <ul className={isMobile ? styles.navLinksMobile : styles.navLinks}
              onClick={()=>setIsMobile(false)}
            >

              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">Best Sellers</a></li>
              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">E-Books</a></li>
              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">Lançamentos</a>  </li>
              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">Romances</a></li>
              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">Infantis</a></li>
              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">Mangás</a></li>
              <li className={styles.item}><a  className={styles.link} href="/Pesquisa">HQ's</a></li>
            </ul>
      </nav>
                 
      
   

  )
}

export default NavBar