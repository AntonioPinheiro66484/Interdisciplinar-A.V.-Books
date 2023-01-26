import React from "react";
import styles from "./input.module.css"

const Input =()=>{
    return(
        <div className="inputs">
            <input className={styles.input} type="text"> nome </input>
            <input className={styles.input} type="text"> cpf </input>
            <input className={styles.input} type="email"> email </input>
            <input className={styles.input} type="password"> senha </input>
            <input className={styles.input} type="text"> cep </input>
            <input className={styles.input} type="text"> estado </input>
            <input className={styles.input} type="text"> cidade </input>
            <input className={styles.input} type="text"> bairro </input>
            <input className={styles.input} type="text"> rua </input>
            <input className={styles.inputComplemento} type="number"> numero </input>
            <input className={styles.inputComplemento} type="text"> complemento </input>
        </div>
        )
    
}

export default Input