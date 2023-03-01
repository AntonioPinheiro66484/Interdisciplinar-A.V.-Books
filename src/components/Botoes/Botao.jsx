import React from 'react'
import styles from './Botao.module.css'

const Botao = () =>{
    return(
        <a href='/DetalhesProduto'>
            <button className={styles.botao}>Ler mais</button>
        </a>
    )    
}

export default Botao