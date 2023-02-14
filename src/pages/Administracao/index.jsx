import React from 'react'
import styles from './Administracao.module.css'
import HeaderADM from "../../components/HeaderADM/HeaderADM";
import NavBarADM from "../../components/NavBarADM/NavBarADM";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade"

const Administracao = ()=>{
    return(
        <div>
        <Acessibilidade></Acessibilidade>
        <HeaderADM></HeaderADM>
        <NavBarADM></NavBarADM>
        <PreFooter></PreFooter>
        <Footer></Footer>

        </div>
    )

}
export default Administracao