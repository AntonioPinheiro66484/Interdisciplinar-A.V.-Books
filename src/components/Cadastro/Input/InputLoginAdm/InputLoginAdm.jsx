import React from 'react'
import styles from './InputLoginAdm.module.css'
import AvBookslogo from '../../../../assets/images/Imagens/logo.png'
function InputLoginAdm() {
  return (
    <div className={styles.caixa}>
      <div className={styles.caixaLogo}>
         <img className={styles.logo} src={AvBookslogo}/>
         <div className={styles.titulosLogoSite}>A.V. Books</div>
         <div className={styles.texto}>Login de Administração</div>
       </div>
    <div className={styles.inputs}>
            <div className={styles.campoTexto}>
                <label class={styles.label}>Digite seu endereço de e-mail</label>
                <input className={styles.input} type="email" placeholder="johndoe@example.com"></input>
            </div>

            <div className={styles.campoTexto}>
                <label class={styles.label}>Digite sua senha</label>
                <input className={styles.input} type="password" placeholder="***************"></input>
            </div>
    </div>
    </div>
  )
}

export default InputLoginAdm