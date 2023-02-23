import React from 'react'
import styles from './InputPedido.module.css'
function InputPedido() {
  return (
    <div className={styles.inputs}>
    <div className={styles.caixa}>
        <div className={styles.campoTexto}>
            <label class={styles.label}>Cpf</label>
            <input className={styles.input} type="text" placeholder="Digite o seu CPF..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Quantidade</label>
            <input className={styles.input} type="number" placeholder="Digite a quantidade..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Data da Compra</label>
            <input className={styles.input} type="text" placeholder="Digite a data da compra..."></input>
        </div>
    </div>
    </div>
  )
}

export default InputPedido