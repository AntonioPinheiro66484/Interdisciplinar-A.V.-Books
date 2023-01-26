import React from 'react'
import styles from './DetalhesProduto.module.css'
import Livro1 from '../../assets/images/Livros/Gravity Falls - O diário perdido.png'

const Body = ()=>{
    return(<div className={styles.body}>
        <div className={styles.voltar}>
        <div className={styles.titulovoltar}>Voltar</div>
        </div>

        <div className={styles.produto}>
            <div className={styles.imagem}>
                <img src={Livro1} alt="Gravity Falls - O diário perdido"/>
            </div>
            <div className={styles.pedido}></div>
        </div>

        <div className={styles.recomendado}>
            <div className={styles.titulo}>Recomendações</div>
        </div>
        
        <div className={styles.descricao}>
            <div className={styles.titulodescricao}>Descrição</div>
        </div>

        <div className={styles.especificacao}>
            <div className={styles.tituloespecificacao}>Especificaçãoes</div>
        </div>

        </div>
    )

}
export default Body

