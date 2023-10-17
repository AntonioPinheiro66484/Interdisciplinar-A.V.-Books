import React, {useState} from 'react';
import styles from './Categorias.module.css'
import ListaBestSellers from './ListaBestSellers/listaBestSellers';
import ListaEbooks from './ListaEbooks/listaEbooks';
import ListaLancamentos from './ListaLancamentos/listaLancamentos';
import ListaRomances from './ListaRomances/listaRomances';
import ListaMangas from './ListaMangas/listaMangas';
import ListaHQs from './ListaHQs/listaHQs';


const DropdownMenu = () => {
  
  const [hoveredItems, setHoveredItems] = useState([false, false, false, false, false, false]);

  const handleMouseEnter = (index) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[index] = true;
    setHoveredItems(updatedHoveredItems);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredItems = [...hoveredItems];
    updatedHoveredItems[index] = false;
    setHoveredItems(updatedHoveredItems);
  };

  
  return (

   <div className={styles.caixaCategorias}> 
      <ul className={styles.menu}>
        <li onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>Best Sellers {hoveredItems[0] && <ListaBestSellers/>}</li>
        <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>E-Books {hoveredItems[1] && <ListaEbooks/>}</li>
        <li onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>Lançamentos {hoveredItems[2] && <ListaLancamentos/>}</li>
        <li onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>Romances {hoveredItems[3] && <ListaRomances/>}</li>
        <li onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(4)}>Mangás {hoveredItems[4] && <ListaMangas/>}</li>
        <li onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={() => handleMouseLeave(5)}>HQ's {hoveredItems[5] && <ListaHQs/>}</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
