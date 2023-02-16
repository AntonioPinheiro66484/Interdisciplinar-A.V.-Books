import React from 'react'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import InputLoginCliente from '../../components/Cadastro/Input/InputLoginCliente/InputLoginCliente'
import styles from './LoginCliente.module.css'
function LoginCliente() {
  return (
    <div className={styles.caixa}>
      <Acessibilidade></Acessibilidade>
       <InputLoginCliente></InputLoginCliente>
    </div>
  )
}

export default LoginCliente