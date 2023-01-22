import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
          <ul className={styles.paiItems}>
            <li className={styles.item}>Best Sellers</li>
            <li className={styles.item}>E-Books</li>
            <li className={styles.item}>Lançamentos</li>
            <li className={styles.item}>Romances</li>
            <li className={styles.item}>Infantins</li>
            <li className={styles.item}>Mangás</li>
            <li className={styles.item}>HQ's</li>
          </ul>
    </nav>
    
  )
}

export default NavBar