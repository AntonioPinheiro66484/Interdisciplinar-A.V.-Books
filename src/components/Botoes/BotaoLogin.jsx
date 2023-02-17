import React from 'react'
import styles from './BotaoLogin.module.css'

const BotaoLogin = () =>{
    return( <div className={styles.caixa}>
                <button className={styles.botao}>Entrar na Plataforma</button>
            </div>
    )    
}

export default BotaoLogin