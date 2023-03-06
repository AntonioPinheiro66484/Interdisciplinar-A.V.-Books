import React from "react";
import styles from "./InputEndereco.module.css"

const InputEndereco =()=>{
    return(
        <div className={styles.inputs}>
            <div className={styles.caixa}>
                <div className={styles.campoTextoEndereço}>
                    <label class={styles.label}>Cep</label>
                    <input className={styles.input} type="text" placeholder="Digite o seu CEP..."></input>
                </div>

                <div className={styles.campoTextoEndereço}>
                    <label class={styles.label}>Estado</label>
                    <input className={styles.input} type="text" placeholder="Selecione o Estado"></input>
                </div>

                <div className={styles.campoTextoEndereço}>
                    <label class={styles.label}>Cidade</label>
                    <input className={styles.input} type="text" placeholder="Em qual cidade você mora ?"></input>
                </div>

                <div className={styles.campoTextoEndereço}>
                    <label class={styles.label}>Bairro</label>
                    <input className={styles.input} type="text" placeholder="Em qual bairro você mora ?"></input>
                </div>

                <div className={styles.campoTextoEndereço}>
                    <label class={styles.label}>Rua</label>
                    <input className={styles.input} type="text" placeholder="Em qual rua você mora ?"></input>
                </div>
            <div className={styles.caixaCampoComplemento}>
                <div className={styles.campoTextoComplemento}>
                    <label class={styles.label}>Numero</label>
                    <input className={styles.input} type="numero" placeholder="N°"></input>
                </div>

                <div className={styles.campoTextoComplemento}>
                    <label class={styles.label}>Complemento</label>
                    <input className={styles.input} type="text" placeholder="Complemento"></input>
                </div>
            </div>
            </div>
        </div>
    )
}

export default InputEndereco