import React, {useState} from 'react';
import styles from './Categorias.module.css'
import {ListaBestSellers, ListaEbooks, ListaLancamentos, ListaRomances, ListaMangas, ListaHQs} from './Subcategorias'


const DropdownMenu = () => {
  
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };


  return (

   <div className={styles.caixaCategorias}> 
      <ul className={styles.menu}>
        <li className={styles.categoria1} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}><a href="/Pesquisa">Best Sellers {hoveredItem === 0 && <ListaBestSellers/>}</a></li>
        <li className={styles.categoria2} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}><a href="/Pesquisa">E-Books {hoveredItem === 1 && <ListaEbooks/>}</a></li>
        <li className={styles.categoria3} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}><a href="/Pesquisa">Lançamentos {hoveredItem === 2 && <ListaLancamentos/>}</a></li>
        <li className={styles.categoria4} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}><a href="/Pesquisa">Romances {hoveredItem === 3 && <ListaRomances/>}</a></li>
        <li className={styles.categoria5} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}><a href="/Pesquisa">Mangás {hoveredItem === 4 && <ListaMangas/>}</a></li>
        <li className={styles.categoria6} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}><a href="/Pesquisa">HQ's {hoveredItem === 5 && <ListaHQs/>}</a></li>
      </ul>

      
   </div>
  );
};

export default DropdownMenu;
