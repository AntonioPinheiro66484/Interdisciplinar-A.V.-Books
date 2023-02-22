import React from 'react'
import styles from './BotaoForms.module.css'
import stats from "../../../assets/images/Imagens/exam.png"

const BotaoForms = () =>{
    return(
            
            <button className={styles.botao}>
            <img className={styles.logo} src={stats}/>
            <div className={styles.logotitulo}>Forms</div>
            </button>
    )    
}

export default BotaoForms