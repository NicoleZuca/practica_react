import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Civilizacion = () => {

    const {id} = useParams()

    const [pueblo, setPueblo] = useState([])

    const showData = async() => {
        //en esta data definimos el URL con el /id 
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const users = await data.json()
        setPueblo(users)
    } 
    useEffect( () =>{
        showData()
    }, [])

  return (
    <div>
        <h3>{pueblo.name}</h3>
        <p>{pueblo.expansion}</p>
        <p>{pueblo.army_type}</p>
        <p>{pueblo.team_bonus}</p>
    </div>
  )
}

export default Civilizacion