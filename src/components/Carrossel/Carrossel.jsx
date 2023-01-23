import React from "react";
import styles from "./Carrossel.module.css"
import Slider from "react-slick";
import Livro1 from '../../assets/images/Livros/A Arte da Guerra.png'
import Livro2 from '../../assets/images/Livros/Cemitério Maldito.png'
import Livro3 from '../../assets/images/Livros/Gravity Falls - O diário perdido.png'
import Livro4 from '../../assets/images/Livros/It- A coisa.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Botao from "../Botoes/Botao"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8163A6" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8163A6" }}
      onClick={onClick}
    />
  );
}

const Carrossel = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
      <div className={styles.App}>
        <Slider {...settings}>
        
          <div className={styles.card}>
            <div className={styles.borda}>
              <div className={styles.propriedades}>
                <img className={styles.livro} src={Livro1}></img>
                <h3 className={styles.nomeLivro}>A arte da Guerra</h3>
                <h3 className={styles.precoLivro}>R$ 60,00</h3>
                <Botao/>
              </div>
              </div>
          </div>

          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro2}></img>
              <h3 className={styles.nomeLivro}>Cemitério Maldito</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro3}></img>
              <h3 className={styles.nomeLivro}>Gravity Falls</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro4}></img>
              <h3 className={styles.nomeLivro}>It - A Coisa</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro1}></img>
              <h3 className={styles.nomeLivro}>A Arte da Guerra</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

         
          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro2}></img>
              <h3 className={styles.nomeLivro}>Cemitério Maldito</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          
          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro3}></img>
              <h3 className={styles.nomeLivro}>Gravity Falls</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          
          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro4}></img>
              <h3 className={styles.nomeLivro}>It - A coisa</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          
          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro1}></img>
              <h3 className={styles.nomeLivro}>A Arte da Guerra</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro2}></img>
              <h3 className={styles.nomeLivro}>Cemitério Maldito</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro3}></img>
              <h3 className={styles.nomeLivro}>Gravity Falls</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.borda}>
            <div className={styles.propriedades}>
              <img className={styles.livro} src={Livro4}></img>
              <h3 className={styles.nomeLivro}>It - A Coisa</h3>
              <h3 className={styles.precoLivro}>R$ 60,00</h3>
              <Botao/>
            </div>
            </div>
          </div>
        
        </Slider>
      </div>
    );
  }

  

export default Carrossel