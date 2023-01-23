import React from 'react'
import styles from './Body.module.css'
import Produtos from '../Produtos/Produtos'
import Carrossel from '../Carrossel/Carrossel'



const Body = ()=>{
    return(<div className={styles.body}>

            <div className={styles.titulo}>Novidades</div>
                <Carrossel></Carrossel>
        
            <div className={styles.titulo}>Populares</div>
                <Carrossel></Carrossel>

            <div className={styles.titulo}>Clássicos</div>
                <Carrossel></Carrossel>

            <div className={styles.titulo}>Ofertas</div>
                <Carrossel></Carrossel>
                
        </div>
    )

}
export default Body

