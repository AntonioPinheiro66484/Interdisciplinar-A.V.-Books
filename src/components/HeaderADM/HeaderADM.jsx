import React from 'react'
import styles from './HeaderADM.module.css'
import AvBookslogo from "../../assets/images/Imagens/logo.png"
const HeaderADM = () => {
  return (
     <header className={styles.header}>
       <div className={styles.caixaLogo}>
         <img className={styles.logo} src={AvBookslogo}/>
         <div className={styles.titulosLogoSite}>A.V. Books</div>
       </div>
       <div className={styles.quadrado}>
         Administração
         </div>
      </header>
  )
}

export default HeaderADM