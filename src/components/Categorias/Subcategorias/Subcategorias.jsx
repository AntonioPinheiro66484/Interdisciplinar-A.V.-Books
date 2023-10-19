import React, {useState} from 'react';
import styles from './Subcategorias.module.css'


const ListaBestSellers = () => {
    return(
        <div className={styles.caixaSubcategorias}>
            <ul className={styles.ListaBestSellers}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
} 

const ListaEbooks = () => {
    return(
        <div className={styles.caixaSubcategorias}>
            <ul className={styles.ListaEbooks}>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
            </ul>
        </div>
    )
}

const ListaLancamentos = () => {
    return(
        <div className={styles.caixaSubcategorias}>
            <ul className={styles.ListaLancamentos}>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
            </ul>
        </div>
    )
}

const ListaRomances = () => {
    return(
        <div className={styles.caixaSubcategorias}>
            <ul className={styles.ListaRomances}>
                <li>Item 10</li>
                <li>Item 11</li>
                <li>Item 12</li>
            </ul>
        </div>
    )
}

const ListaMangas = () => {
    return(
        <div className={styles.caixaSubcategorias}>
            <ul className={styles.Mangas}>
                <li>Item 13</li>
                <li>Item 14</li>
                <li>Item 15</li>
            </ul>
        </div>
    )
}

const ListaHQs = () => {
    return(
        <div className={styles.caixaSubcategorias}>
            <ul className={styles.ListaHQs}>
                <li>Item 16</li>
                <li>Item 17</li>
                <li>Item 18</li>
            </ul>
        </div>
    )
}

export {ListaBestSellers, ListaEbooks, ListaLancamentos, ListaRomances, ListaMangas, ListaHQs}