import React, { useEffect, useState } from 'react';
import IAnimal from '../apifake/Interfaces/IAnimal';

import Animals from '../apifake/Animals';

interface IProps{
  ownerId: number
}

export default function SelectAnimals(props: IProps) {

  const [animals, setAnimals] = useState<IAnimal[]>([]);
  
  useEffect(() => {
    async function getAnimals(){
      try{
        const data  = await Animals.getByOwnerId(props.ownerId);
        setAnimals(data);

      } catch (error) {
        alert("Ocorreu um erro");
      }
    }
    getAnimals();
  },[props.ownerId]);

  return(
    <section id="animals-section">
      <label htmlFor="animals">Animais:</label>
      <select id="animals">
        {animals.map(animal => (
          <option key={animal.id} value={animal.id}>{animal.name}</option>
        ))}
      </select>
    </section>
  )
}