import { useState } from "react";
import dataFruits from "../data/dataFruits";

export default function Learn() {
  //etat donnée
  const [fruits, setfruits] = useState(dataFruits);

  const [inputValue,setInputValue]=useState("")

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

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = Date. now()
    const nom = inputValue
    const newFruit = {id ,nom}
    const newCopyFruit = [...fruits]
    newCopyFruit.push(newFruit)
    setfruits(newCopyFruit)
    setInputValue("")

  }

  //Affichage

  return (
    <div>
      

      {fruits.map((item) => (
        <div key={item.id} >{item.nom}<button onClick={()=>handleDelete(item.id)}>x</button></div>
      ))}

      <form action="submit" onSubmit={handleSubmit}>
        <input value={inputValue}type="text" onChange={handleChange} />
        <button>valider {inputValue}</button>


      </form>
        
    </div>
  );
}
