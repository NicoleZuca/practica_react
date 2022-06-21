import React, {useState, useEffect} from 'react'
import _ from "lodash";

const Empleados = () => {

  const pageSize = 2;

  //setear los hooks useState
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [paginatorResults, setPaginatorResults] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  
  //función para traer los datos de la API
  const URL = 'https://gorest.co.in/public/v2/users'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
    setPaginatorResults(_(users.data).slice(5).take(pageSize).value());
    //console.log(users)
  }
  
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    //console.log(e.target.value)
  }

  //método de filtrado 1
  /*let results = []
  if(!search)
  {
    results = users
  }else{
      results = users.filter( (dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }*/

  //método de filtrado 2
  const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect( () =>{
    showData()
  }, [])

  //renderizamos la vista
  return (
    <div>
      <h2 align="center" style={{ color: "#1F618D" }}>Empleados</h2>
      <input value={search} onChange={searcher} type='text' placeholder='Search' className='form-control'></input>

      {!paginatorResults ? (
        "No data found"
      ) : (
      <table id='datatable' className='table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr className='bg-curso text-white'>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          { results.map( (user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              
            </tr>   
            
          ))
          }
        </tbody>
        
      </table>
      )}
    </div>
  )
}

export default Empleados