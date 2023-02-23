import React from "react";
import FormularioFornecedor from "../../components/Cadastro/Formulario/FormularioFornecedor/FormularioFornecedor"
import Footer from "../../components/Footer/Footer";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Header from "../../components/Header/Header";
import NavBarADM from "../../components/NavBarADM/NavBarADM";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";

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