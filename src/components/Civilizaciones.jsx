import React, {useState, useEffect} from 'react'
import 'styled-components'
import DataTable, {createTheme} from 'react-data-table-component'
import { Link } from 'react-router-dom'

const Civilizaciones = () => {
    //1- Configurar los hooks
    const [users, setUsers] = useState([])

    //2 - Función para mostrar los datos con fetch
    const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    const showData = async() => {
        const data = await fetch(URL)
        const users = await data.json()
        setUsers(users.civilizations)
    } 
    useEffect( () =>{
        showData()
    }, [])

    //3- Configuramos las columns para DataTable
    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'NAME',
            selector: row => row.name
        },
        {
            name: 'EXPANSION',
            selector: row => row.expansion
        },
        {
            name: 'ARMY TYPE',
            selector: row => row.army_type
        },
        {
            name: 'TEAM BONUS',
            selector: row => row.team_bonus
        }
    ]

    //personalizar temas
    createTheme('custom', {
        text: {
          primary: '#F7F9F9',
          secondary: '##154360',
        },
        background: {
          default: '#1F618D',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#17202A',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
      
     
    //4- Mostramos la data en DataTable
  return (
    <div className='Civilizaciones'>
        <h1 align="center" style={{ color: "#1F618D" }}>Civilizaciones</h1>
        <DataTable
            columns={columns}
            data={users}
            theme='custom'
            pagination
        />
        <ul>
          {
            //hacemos un recorrido para mostrar la información
            users.map(item => (
                <li key={item.id}>
                  {/* hacer rutas dinámicas para cada uno de los elementos */}
                  <Link to={`/civilizaciones/${item.id}`}>
                    {item.name} - {item.expansion}                  
                  </Link>
                </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Civilizaciones