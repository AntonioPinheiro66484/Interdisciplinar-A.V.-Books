import React from "react";
import FormularioPedido from "../../components/Cadastro/Formulario/FormularioPedido/FormularioPedido"
import Footer from "../../components/Footer/Footer";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Header from "../../components/Header/Header";
import NavBarADM from "../../components/NavBarADM/NavBarADM";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade";

function CadastroPedido() {
  return (
    <div>
        <Acessibilidade/>
        <Header></Header>
        <NavBarADM></NavBarADM>
        <FormularioPedido></FormularioPedido>
        <PreFooter></PreFooter>
        <Footer></Footer>
    </div>
  )
}

export default CadastroPedido