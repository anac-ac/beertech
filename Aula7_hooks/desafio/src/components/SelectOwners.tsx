import React, {useEffect, useState} from 'react';
import IOwner from "../apifake/Interfaces/IOwner";
import SelectAnimals from './SelectAnimals';

import Owners from '../apifake/Owners';

export default function SelectOwners(){
  
  const [ownerId, setOwnerId] = useState(0);
  const [owners, setOwner] = useState<IOwner[]>([]);
  
  useEffect(() => {
    async function getOwners(){
      try{
        const data  = await Owners.getAll();

        setOwner(data);

      } catch (error) {
        alert("Ocorreu um erro");
      }
    }
    getOwners();
  },[]);

  console.log(ownerId);

  return(
    <>
      <section id="owners-section">
        <label htmlFor="owners">Donos:</label>
        <select onChange={(e) => setOwnerId(parseInt(e.target.value))} id="owners">
          {owners.map(owner => (
            <option key={owner.id} value={owner.id}>{owner.name}</option>
          ))}
        </select>
      </section>
      <SelectAnimals ownerId={ownerId}/>
  </>
  )
}