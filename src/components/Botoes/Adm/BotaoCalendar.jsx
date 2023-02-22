import React from 'react'
import styles from './BotaoCalendar.module.css'
import stats from "../../../assets/images/Imagens/date.png"

const BotaoCalendar = () =>{
    return(
            
            <button className={styles.botao}>
            <img className={styles.logo} src={stats}/>
            <div className={styles.logotitulo}>Calendar</div>
            </button>
    )    
}

export default BotaoCalendar