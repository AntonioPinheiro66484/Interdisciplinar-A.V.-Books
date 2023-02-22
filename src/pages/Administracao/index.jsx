import React from 'react'
import styles from './Administracao.module.css'
import HeaderADM from "../../components/HeaderADM/HeaderADM";
import NavBarADM from "../../components/NavBarADM/NavBarADM";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade"
import BotaoCharts from '../../components/Botoes/Adm/BotaoCharts'
import BotaoDashboard from '../../components/Botoes/Adm/BotaoDashboard'
import BotaoForms from '../../components/Botoes/Adm/BotaoForms'
import BotaoTables from '../../components/Botoes/Adm/BotaoTables'
import BotaoCalendar from '../../components/Botoes/Adm/BotaoCalendar'
import BotaoErrors from '../../components/Botoes/Adm/BotaoErrors'

const Administracao = ()=>{
    return(
        <div>
        <Acessibilidade></Acessibilidade>
        <HeaderADM></HeaderADM>
        <NavBarADM></NavBarADM>
        <div className={styles.botao}>
        <BotaoCharts/>
        <BotaoDashboard/>
        <BotaoForms/>
        <BotaoTables/>
        <BotaoCalendar/>
        <BotaoErrors/>
        </div>
        <Footer></Footer>

        </div>
    )

}
export default Administracao