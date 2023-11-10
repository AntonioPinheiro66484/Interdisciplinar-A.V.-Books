import React from "react";
import FormularioPedido from "../../components/Cadastro/Formulario/FormularioPedido"
import Footer from "../../components/Footer";
import PreFooter from "../../components/Footer/Prefooter";
import Header from "../../components/Header";
import NavBarADM from "../../components/NavBarADM";
import Acessibilidade from "../../components/Acessibilidade";

function CadastroPedido() {
  return (
    <div>
        <Header></Header>
        <NavBarADM></NavBarADM>
        <FormularioPedido></FormularioPedido>
        <PreFooter></PreFooter>
        <Footer></Footer>
    </div>
  )
}

export default CadastroPedido