import React from 'react'
import styles from './DetalhesProduto.module.css'
import Livro1 from '../../assets/images/Livros/Gravity Falls - O diário perdido.png'
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Pedido from "../../components/DescricaoPedido/DescricaoPedido";
import Carrossel from '../../components/Carrossel/Carrossel'

const DetalhesProduto = ()=>{
    return(
        <div>
        <Header></Header>
        <NavBar></NavBar>
        <div className={styles.breadcrumb}>
            <ul className={styles.breadcrumbNavigation}>
                <li><a href="/">Home</a></li>
                <li><a href="/DetalhesProduto">Produto</a></li>
            </ul>

        </div>

        <div className={styles.produto}>
            <div className={styles.imagem}>
                <img src={Livro1} alt="Gravity Falls - O diário perdido"/>
            </div>
            <div className={styles.pedido}>
            <Pedido/>
            </div>
        </div>

        <div className={styles.recomendado}>
            <div className={styles.titulorecomendado}>Recomendações</div>
            <Carrossel></Carrossel>
        </div>
        
        <div className={styles.descricao}>
            <div className={styles.titulo}>Descrição</div>
            <p className={styles.textodescricao}>
            Você possui em suas mãos o cobiçado diário do autor da série Gravity Falls,
            um tesouro de 288 páginas coloridas e sem dono, com segredos nunca antes revelados,
            monstros e mistérios da pacata cidade do Tivô Stan. Com ele, você irá aprender a 
            trágica história de Ford, o paradeiro de Blendin, qual é a Dimensão 52 e como atrair 
            um “ornitorrinco xadrez”. Mas cuidado: este é um livro desejado por muitas forças sombrias,
            por isso fique alerta se qualquer um quiser tirá-lo de você, especialmente se tiverem olhos
            amarelos e brilhantes. E, o mais importante, divirta-se. Afinal, não existe um lugar como Gravity Falls.
            Ou será que existe?
            </p>
        </div>

        <div className={styles.especificacao}>
            <div className={styles.titulo}>Especificações</div>
            <dl className={styles.especificacaodescricao}>
                <dt>Ano da Edição</dt>
                <dd>2018</dd>
                <dt>Autor</dt>
                <dd>Hirsch, Alex</dd>
                <dt>Editora</dt>
                <dd>Universo dos Livros Editora LTDA</dd>
                <dt>Idioma</dt>
                <dd>Português</dd>
                <dt>Número de Páginas</dt>
                <dd>288</dd>
                <dt>Acabamento</dt>
                <dd>Livro capa dura (hardcover)</dd>
            </dl>
        </div>

        <PreFooter></PreFooter>
        <Footer></Footer>

        </div>
    )

}
export default DetalhesProduto

