import React from 'react'
import styles from './Filtros.module.css'
import Lupa from '../../assets/icons/lupa.png'

const Filtros =()=>{
    return(
        <div className={styles.filtros}>
            <h3 className={styles.titulo}>Filtros</h3>
            <h4 className={styles.info}>Selecionados: </h4>

         <div className={styles.tituloSelecionaveis}>Categorias: </div>

         <div className={styles.categorias}>
            <div className={styles.opcoes}>Ficção Científica</div>
            <div className={styles.opcoes}>Biografias</div>
            <div className={styles.opcoes}>Terror</div>
            <div className={styles.opcoes}>Romance</div>
            <div className={styles.opcoes}>Fantasia</div>
         </div>
        
         <div className={styles.tituloTexts}>Editora: </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         </div>  

         <div className={styles.tituloTexts}>Autor(a): </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         </div>  
         
         <div className={styles.tituloTexts}>Marca: </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         </div>  
         
         <div className={styles.tituloTexts}>Ano de publicação: </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         </div>  

        </div>






    )
}

export default Filtros