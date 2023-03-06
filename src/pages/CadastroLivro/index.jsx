import React from "react";
import FormularioLivros from "../../components/Cadastro/Formulario/FormularioLivros"
import Footer from "../../components/Footer";
import PreFooter from "../../components/Footer/Prefooter";
import Header from "../../components/Header";
import NavBarADM from "../../components/NavBarADM";
import Acessibilidade from "../../components/Acessibilidade";

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