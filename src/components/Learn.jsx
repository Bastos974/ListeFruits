import { useState } from "react";
import dataFruits from "../data/dataFruits";

export default function Learn() {
  //etat donnée
  const [fruits, setfruits] = useState(dataFruits);

  //comportement
  console.log(fruits);

  //Affichage

  //{fruits.map( (item) =>{<div>bingo</div>} )}

  return (
    <div>
      <div>{fruits[2].nom}</div>

      {fruits.map((item) => (
        <div>{item.nom}</div>
      ))}
    </div>
  );
}
