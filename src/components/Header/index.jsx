import React from 'react'
import styles from './Header.module.css'
import AvBookslogo from "../../assets/images/Imagens/logo.png"
import Perfil from '../../assets/icons/perfil.png'  
import Menu from '../../components/Botoes/BotaoMenu'
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
       <div className={styles.caixaIcone1}>
               <Menu></Menu>
               <div className={styles.tituloCategoria}>Categorias</div> 
         </div>
         <div className={styles.quadrado}>
            <input className={styles.barraPesquisa} type="text" placeholder="Pesquisa..."/>
            <a href='/Pesquisa'>
               <div className={styles.caixaLupa}>
                  <img className={styles.lupa} src={Lupa} alt="Icone de lupa"/>
               </div>
            </a>
         </div>
         <div className={styles.icons}>
            <div className={styles.caixaIcone2}>
               <a className={styles.links} href='/LoginCliente'>
                  <img className={styles.icon2} src={Perfil} alt="Icone de perfil do cliente"/>
                  <div className={styles.tituloPerfil}>Perfil</div>
               </a>
            </div>
            <div className={styles.caixaIcone3}>
               <a className={styles.links} href='/Carrinho'>
                  <img className={styles.icon3} src={Carrinho} alt="icone de carrinho do cliente"/>
                  <div className={styles.tituloCarrinho}>Carrinho</div>
               </a>
            </div>
         </div>

         <div className={styles.caixaColor}>

         </div>
      </header>
  )
}

export default Header