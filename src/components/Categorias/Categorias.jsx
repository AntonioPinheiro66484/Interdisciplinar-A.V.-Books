import React from 'react';
import styles from './Categorias.module.css'

const DropdownMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.categoria}>Opção 1</li>
      <li className={styles.categoria}>Opção 2</li>
      <li className={styles.categoria}>Opção 3</li>
    </ul>
  );
};

export default DropdownMenu;
