import React from "react";
import styles from './Formulario.module.css'

const Formulario = ()=>{
    return(<div className={styles.caixa}>
            <div className={styles.formulario}>
                <h3 className={styles.titulo}> Cadastre-se </h3>
                <h4 className={styles.titulo}> Endereço </h4>
            </div>
        </div>
    )
}

export default Formulario