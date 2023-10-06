import React, { useState } from 'react';
import styles from './BotaoMenu.module.css'
import MenuImg from '../../assets/icons/menu.png'; 
import Menu from '../Categorias/Categorias'

const DropdownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <img src={MenuImg} alt="Ícone" className={styles.dropdownIcon}/>
      </button>
      {isDropdownOpen && <Menu/>} 
    </div>
  );
};

export default DropdownButton;
