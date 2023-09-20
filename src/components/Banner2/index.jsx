import React from 'react'
import styles from './Banner2.module.css'
import Banner2 from '../../assets/images/Banners/avBooksBanner2.png'
function BannerMeio() {
  return (
    <div className={styles.caixa}>
          <img className={styles.banner2} src={Banner2}/>
    </div>
  )
}

export default BannerMeio