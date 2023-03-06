import React from "react";
import styles from "./ProdutoPedido.module.css"
import Livro1 from "../../assets/images/Livros/Gravity Falls - O diário perdido.png"
import Pedido from "../DescricaoPedido/DescricaoPedido";

const ProdutoPedido =()=>{
    return(
        <div className={styles.produto}>
        <div className={styles.imagem}>
            <img src={Livro1} alt="Gravity Falls - O diário perdido"/>
        </div>
        <div className={styles.pedido}>
            <Pedido/>
        </div>
    </div>
    )
}

export default ProdutoPedido