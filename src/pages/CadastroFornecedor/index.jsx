import React from "react";
import FormularioFornecedor from "../../components/Cadastro/Formulario/FormularioFornecedor"
import Footer from "../../components/Footer";
import PreFooter from "../../components/Footer/Prefooter";
import Header from "../../components/Header";
import NavBarADM from "../../components/NavBarADM";
import Acessibilidade from "../../components/Acessibilidade";

function CadastroFornecedor() {
  return (
    <div>
        <Acessibilidade/>
        <Header></Header>
        <NavBarADM></NavBarADM>
        <FormularioFornecedor></FormularioFornecedor>
        <PreFooter></PreFooter>
        <Footer></Footer>
    </div>
  )
}

export default CadastroFornecedor