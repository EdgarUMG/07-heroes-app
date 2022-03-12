import React from 'react'
import { heroes } from '../data/heroes';

export const getHeroesByName = (name='') => {

    console.log("getHeroesByName called")
    name.toLowerCase();
    if(name===''){
        return [];
    }
  
    return heroes.filter(heroe=>heroe.superhero.toLocaleLowerCase().includes(name));
}
