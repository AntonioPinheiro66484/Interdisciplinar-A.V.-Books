import React, { useState } from 'react'
import styles from './Filtros.module.css'
import Lupa from '../../assets/icons/lupa.png'
import Filtro from '../../assets/icons/filtro.png'
import setaEsquerda from  "../../assets/icons/seta-esquerda.png"
import setaDireita from  "../../assets/icons/seta-direita.png"

const Filtros =()=>{
   const [isFiltro, setIsFiltro]=useState(false);


   return(
        <div className={styles.filtros}>

         <div className={styles.caixaFiltro}>  
            <img className={styles.filtro} src={Filtro} alt="Icone filtro"/>
            <div className={styles.titulo}>Filtros</div>
         </div>  
         

            <h4 className={styles.info}>Selecionados: </h4>

         <div className={styles.tituloSelecionaveis}>Categorias: </div>

         <div className={styles.categorias}>

          <div className={styles.selecionavel}>
            <input className={styles.checked} type="checkbox"/>
            <div className={styles.opcoes}>Ficção Científica</div>
          </div>

          <div className={styles.selecionavel}>
            <input className={styles.checked} type="checkbox"/>
            <div className={styles.opcoes}>Biografias</div>
          </div>
          
          <div className={styles.selecionavel}>
            <input className={styles.checked} type="checkbox"/>
            <div className={styles.opcoes}>Terror</div>
          </div>
          
          <div className={styles.selecionavel}>
            <input className={styles.checked} type="checkbox"/>
            <div className={styles.opcoes}>Romance</div>
          </div>

          <div className={styles.selecionavel}>
            <input className={styles.checked} type="checkbox"/>
            <div className={styles.opcoes}>Fantasia</div>
          </div>

         </div>

      <div className={styles.areaTexts}>  

         <div className={styles.tituloTexts}>Editora: </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         <div className={styles.caixaLupa}>  
            <img className={styles.lupa} src={Lupa} alt="Icone de lupa"/>
         </div>  
         </div>
         

         <div className={styles.tituloTexts}>Autor(a): </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         <div className={styles.caixaLupa}>  
            <img className={styles.lupa} src={Lupa} alt="Icone de lupa"/>
         </div>  
         </div>
         
         <div className={styles.tituloTexts}>Marca: </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         <div className={styles.caixaLupa}>  
            <img className={styles.lupa} src={Lupa} alt="Icone de lupa"/>
         </div>  
         </div>
         
         <div className={styles.tituloTexts}>Ano de publicação: </div>
         <div className={styles.caixa}>
            <input className={styles.barraPesquisa} type="text"/>
         <div className={styles.caixaLupa}>  
            <img className={styles.lupa} src={Lupa} alt="Icone de lupa"/>
         </div>  
         </div>

         </div>


         <div className={styles.caixaBotaoFiltro}>
            <button className={styles.botaoFiltro}
            onClick={()=> setIsFiltro(!isFiltro)}
            >
              {isFiltro ? (
                <img className={styles.imgSetaEsquerda} src={setaDireita}/>
               ):(
                <img className={styles.imgSetaEsquerda} src={setaEsquerda}/>
               )}
         </button>
       </div>


         <div className={isFiltro ? styles.caixaFiltro : styles.caixaFiltro}
              onClick={()=>setIsFiltro(false)}
            >
       

        </div>


        </div>





    )
}

export default Filtros