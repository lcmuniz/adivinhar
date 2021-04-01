import { useState } from 'react'
import './App.css'

function App() {

  const [cidades, setCidades] = useState([
    { id: 1,  nome: 'São Luís', estado: 'MA'},
    { id: 2, nome: 'Fortaleza', estado: 'CE'},
    { id: 3, nome: 'Rio de Janeiro', estado: 'RJ' }
  ])


  return (
    <div>

      <h1>Cidades</h1>
      <ul>
        
        {
          cidades.map(item => <li key={item.id}>{item.nome} - {item.estado}</li>)
        }
        
      </ul>

    </div>
  )
}

export default App