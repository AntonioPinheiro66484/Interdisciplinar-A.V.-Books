import React from 'react'
import styles from './BotaoDashboard.module.css'
import stats from "../../../assets/images/Imagens/dashboard.png"

const BotaoDashboard = () =>{
    return(
            
            <button className={styles.botao}>
            <img className={styles.logo} src={stats}/>
            <div className={styles.logotitulo}>Dashboard</div>
            </button>
    )    
}

export default BotaoDashboard