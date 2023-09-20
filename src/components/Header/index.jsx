import React from 'react'
import styles from './Header.module.css'
import AvBookslogo from "../../assets/images/Imagens/logo.png"
import Perfil from '../../assets/icons/perfil.png'  
import MenuImg from '../../assets/icons/menu.png'
import Carrinho from '../../assets/icons/carrinho.png'
import Lupa from '../../assets/icons/lupa.png'
const Header = () => {
  return (
     <header className={styles.header}>
       <div className={styles.caixaLogo}>
         <a href='/'>
            <img className={styles.logo} src={AvBookslogo}/>
         </a>
       </div>
       <div className={styles.caixaIcones3}>
               <img className={styles.iconMenu} src={MenuImg} alt="icone de menu"/>
               <div className={styles.titulosSite}>Categorias</div>
            </div>
         <div className={styles.quadrado}>
            <input className={styles.barraPesquisa} type="text"/>
            <a href='/Pesquisa'>
               <div className={styles.caixaLupa}>
                  <img className={styles.lupa} src={Lupa} alt="Icone de lupa"/>
               </div>
            </a>
         </div>
         <div className={styles.icons}>
            <div className={styles.caixaIcones1}>
               <a className={styles.links} href='/LoginCliente'>
                  <img className={styles.icon1} src={Perfil} alt="Icone de perfil do cliente"/>
                  <div className={styles.titulosSite}>Perfil</div>
               </a>
            </div>
            <div className={styles.caixaIcones2}>
               <img className={styles.icon2} src={Carrinho} alt="icone de carrinho do cliente"/>
               <div className={styles.titulosSite}>Carrinho</div>
            </div>
         </div>

         <div className={styles.caixaColor}>

         </div>
      </header>
  )
}

export default Header