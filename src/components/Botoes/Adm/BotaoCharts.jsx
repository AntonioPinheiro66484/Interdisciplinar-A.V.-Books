import React from 'react'
import styles from './BotaoCharts.module.css'
import stats from "../../../assets/images/Imagens/stats.png"

const BotaoCharts = () =>{
    return(
            
            <button className={styles.botao}>
            <img className={styles.logo} src={stats}/>
            <div className={styles.logotitulo}>Charts</div>
            </button>
    )    
}

export default BotaoCharts