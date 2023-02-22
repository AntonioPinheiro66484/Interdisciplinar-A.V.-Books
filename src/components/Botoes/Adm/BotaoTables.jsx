import React from 'react'
import styles from './BotaoTables.module.css'
import stats from "../../../assets/images/Imagens/table.png"

const BotaoTables = () =>{
    return(
            
            <button className={styles.botao}>
            <img className={styles.logo} src={stats}/>
            <div className={styles.logotitulo}>Tables</div>
            </button>
    )    
}

export default BotaoTables