import React, {useState} from "react"
import styles from "./ProdutoCarrinho.module.css"
import livroEx1 from "../../assets/images/Livros/A Arte da Guerra.png"


const ProdutoCarrinho = () =>{

      const [contador, setContador] = useState(1);
    
      const incrementarContador = () => {
        setContador(contador + 1);
      };
    
      const decrementarContador = () => {
        if (contador > 1){
            setContador(contador - 1);
        }
      };
    
    

    return(
        <div className={styles.caixaProdutos}>
            <div className={styles.cardProduto}>
                <img className={styles.imagemCarrinho} src={livroEx1} alt="Imagem carrinho"/>
                <div className={styles.infoProduto}>
                    <div className={styles.nomeLivro}>A arte da Guerra</div>
                    <div className={styles.descricaoLivro}>Wingardium leviosaaeydtee</div>
                    <div className={styles.valoresNum}>
                        <button className={styles.diminuir} onClick={decrementarContador}>-</button>
                        <div className={styles.contador}> {contador} </div>
                        <button className={styles.aumentar} onClick={incrementarContador}>+</button>
                        <div className={styles.precoLivro}>R$ 40,00</div>
                    </div>
                </div>
            </div>
        </div>


        
    )
}

export default ProdutoCarrinho