import React from "react";
import FormularioLivros from "../../components/Cadastro/Formulario/FormularioLivros/FormularioLivros"
import Footer from "../../components/Footer/Footer";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Header from "../../components/Header/Header";
import NavBarADM from "../../components/NavBarADM/NavBarADM";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";

function CadastroLivro() {
  return (
    <div>
        <Acessibilidade/>
        <Header></Header>
        <NavBarADM></NavBarADM>
        <FormularioLivros></FormularioLivros>
        <PreFooter></PreFooter>
        <Footer></Footer>
    </div>
  )
}
export default CadastroLivro