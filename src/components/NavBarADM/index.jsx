import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './NavBarADM.module.css'
import MenuImg from '../../assets/icons/menu.png'
import cancelImg from '../../assets/icons/fechar.png'
import { fas } from  '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const NavBarADM = () => {
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
              <li className={styles.item}><a  className={styles.link} href="#">Livros</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">Clientes</a></li>
              <li className={styles.item}><a  className={styles.link} href="#">Fornecedores</a>  </li>
              <li className={styles.item}><a  className={styles.link} href="#">Pedidos</a></li>
            </ul>
      </nav>
                 
      
   

  )
}

export default NavBarADM