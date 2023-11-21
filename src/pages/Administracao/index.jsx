import React from 'react'
import styles from './Administracao.module.css'
import Header from "../../components/Header/index";
import NavBarADM from "../../components/NavBarADM";
import Footer from "../../components/Footer";
import Acessibilidade from "../../components/Acessibilidade/index"
import BotaoCharts from '../../components/Botoes/Adm/BotaoCharts'
import BotaoDashboard from '../../components/Botoes/Adm/BotaoDashboard'
import BotaoForms from '../../components/Botoes/Adm/BotaoForms'
import BotaoTables from '../../components/Botoes/Adm/BotaoTables'
import BotaoCalendar from '../../components/Botoes/Adm/BotaoCalendar'
import BotaoErrors from '../../components/Botoes/Adm/BotaoErrors'
import SubFooter from '../../components/Footer/Subfooter'
import PreFooter from '../../components/Footer/Prefooter'

const Administracao = ()=>{
    return(
        <div>
        <Header/>
        <div className={styles.botao}>
            <BotaoCharts/>
            <BotaoDashboard/>
            <BotaoForms/>
            <BotaoTables/>
            <BotaoCalendar/>
            <BotaoErrors/>
        </div>
        <PreFooter/>
        <Footer/>
        <SubFooter/>

        </div>
    )

}
export default Administracao