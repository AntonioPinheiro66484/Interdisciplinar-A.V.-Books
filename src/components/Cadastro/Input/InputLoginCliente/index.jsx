import React from 'react'
import styles from './InputLoginCliente.module.css'
import AvBookslogo from '../../../../assets/images/Imagens/logo.png'
import BotaoLogin from '../../../Botoes/BotaoLogin'
function InputLoginCliente() {
  return (
    <div className={styles.caixa}>
      <div className={styles.caixaLogo}>
         <img className={styles.logo} src={AvBookslogo}/>
         <div className={styles.tituloLogoSite}>A.V. Books</div>
         <div className={styles.texto}>Faça login e comece a ler!</div>
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
    
          <div className={styles.caixaInput}>
            <div className={styles.inputcheck}>
              <input type="checkbox"/>
              <label>Lembre-me por 30 dias</label>
            </div>
          </div>
    <BotaoLogin></BotaoLogin>
    <div className={styles.caixaAjuda}>
      <div className={styles.textoAjuda}>Esqueceu sua senha ?</div>
      <a  className={styles.textoAjuda} href='/Cadastro'>
        <div >Não possui conta ? Crie uma agora!</div>
      </a>
    </div>
    </div>
  )
}

export default InputLoginCliente