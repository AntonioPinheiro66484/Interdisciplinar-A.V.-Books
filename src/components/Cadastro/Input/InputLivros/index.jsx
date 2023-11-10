import React from 'react'
import styles from './InputLivros.module.css'

const InputLivros = () => {
  return (
    <div className={styles.inputs}>
    <div className={styles.caixa}>
        <div className={styles.campoTexto}>
            <label class={styles.label}>Nome</label>
            <input className={styles.input} type="text" placeholder="Digite seu nome..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Ano de Publicação</label>
            <input className={styles.input} type="text" placeholder="Digite o ano de publicação..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Autor</label>
            <input className={styles.input} type="text" placeholder="Digite o nome do autor..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Editora</label>
            <input className={styles.input} type="text" placeholder="Digite o nome da editora do livro..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Genero</label>
            <input className={styles.input} type="text" placeholder="Digite o genero do livro..."></input>
        </div>

        <div className={styles.campoTexto}>
            <label class={styles.label}>Preço</label>
            <input className={styles.input} type="text" placeholder="Digite o preço do livro..."></input>
        </div>

    </div>
       
    </div>
  )
}

export default InputLivros