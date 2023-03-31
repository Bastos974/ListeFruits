import { useState } from "react";
import dataFruits from "../data/dataFruits";

export default function Learn() {
  //etat donnée
  const [fruits, setfruits] = useState(dataFruits);

  //comportement

<button></button>
  //Affichage0

  //{fruits.map( (item) =>{<div>bingo</div>} )}

  return (
    <div>
      <div>{fruits[2].nom}</div>

      {fruits.map((item) => (
        <div key={item.id} >{item.nom}<button>x</button></div>
      ))}
        
    </div>
  );
}
