import React from "react";
import styles from "./Acessibilidade.module.css"

const Acessibilidade =() => {
return (

    <div className={styles.barraAcessibilidade}>

        <div className={styles.caixaNavegacao}>
            <div className={styles.item}>Ir para o menu [1]</div>
            <div className={styles.item}>Ir para o contúdo [2]</div>
            <div className={styles.item}>Ir para o rodapé [3]</div>
        </div>

        <div className={styles.caixaFerramentas}>
            <div className={styles.itemFerramenta}>Acessibilidade</div>
            <div className={styles.itemFerramenta}>Contraste</div>
            <div className={styles.itemFerramenta}>A+</div>
            <div className={styles.itemFerramenta}>A-</div>
        </div>   




    </div>


   )

}

export default Acessibilidade