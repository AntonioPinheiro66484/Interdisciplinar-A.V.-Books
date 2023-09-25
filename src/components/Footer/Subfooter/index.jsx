import React from 'react'
import styles from './Subfooter.module.css'

const SubFooter = ()=>{
    return(
        <div className={styles.subfooter}>
            <div className={styles.caixa}>
                <div className={styles.copyright}>A.V. Books &copy; - Todos os direitos reservados</div>
            </div>
        </div>
    )
}
export default SubFooter