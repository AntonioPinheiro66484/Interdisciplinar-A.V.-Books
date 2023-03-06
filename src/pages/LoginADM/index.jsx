import React from 'react'
import InputLoginAdm from '../../components/Cadastro/Input/InputLoginAdm'
import styles from './LoginADM.module.css'
function LoginADM() {
  return (
    
      <div className={styles.caixa}>
        <div className={styles.inputADM}>
          <InputLoginAdm></InputLoginAdm>
        </div>
      </div>

  )
}

export default LoginADM