import { useState } from "react";
import dataFruits from "../data/dataFruits";

export default function Learn() {
  //etat donnée
  const [fruits, setfruits] = useState(dataFruits);

  //comportement
  const handleDelete = (id) =>{
    console.log(id)
    const copyFruits = [...fruits]
    console.log(copyFruits)
    const updateFruits = copyFruits.filter(item => item.id !== id )
    console.log(copyFruits)
    console.log(updateFruits)
    setfruits(updateFruits)
  }

  //Affichage0

  //{fruits.map( (item) =>{<div>bingo</div>} )}

  return (
    <div>
      

      {fruits.map((item) => (
        <div key={item.id} >{item.nom}<button onClick={()=>handleDelete(item.id)}>x</button></div>
      ))}
        
    </div>
  );
}
