import React from 'react'
import styles from './BotaoErrors.module.css'
import stats from "../../../assets/images/Imagens/perigo.png"

const BotaoErrors = () =>{
    return(
            
            <button className={styles.botao}>
            <img className={styles.logo} src={stats}/>
            <div className={styles.logotitulo}>Errors</div>
            </button>
    )    
}

export default BotaoErrors