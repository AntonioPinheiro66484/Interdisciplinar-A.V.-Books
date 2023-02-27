import React from 'react'
import InputLoginCliente from '../../components/Cadastro/Input/InputLoginCliente/InputLoginCliente'
import styles from './LoginCliente.module.css'
function LoginCliente() {
  return (
    <div className={styles.caixa}>
      <div className={styles.InputCliente}>
       <InputLoginCliente></InputLoginCliente>
      </div>
    </div>
  )
}

export default LoginCliente