import React from 'react'
import Acessibilidade from '../../components/Acessibilidade/Acessibilidade'
import InputLoginAdm from '../../components/Cadastro/Input/InputLoginAdm/InputLoginAdm'
import styles from './LoginADM.module.css'
function LoginADM() {
  return (
    
      <div className={styles.caixa}>
        <Acessibilidade></Acessibilidade>
        <div className={styles.inputADM}>
          <InputLoginAdm></InputLoginAdm>
        </div>
      </div>

  )
}

export default LoginADM