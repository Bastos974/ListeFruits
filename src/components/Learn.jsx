import { useState } from "react"
import dataFruits from "../data/dataFruits"


export default function Learn() {

//etat donnée
const [fruits, setfruits] = useState(dataFruits)

//comportement
console.log(fruits)

//Affichage





  return (
    <div>{fruits[0].nom}</div>
  )
}
