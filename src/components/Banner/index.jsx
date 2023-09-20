import React from 'react'
import styles from './Banner.module.css'
import BannerAv from '../../assets/images/Banners/avBooksBanner1.png'
function Banner() {
  return (
    <div className={styles.caixa}>
          <img className={styles.banner} src={BannerAv}/>
    </div>
  )
}

export default Banner