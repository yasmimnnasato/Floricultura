import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardFloricultura from '../Components/CardFloricultura';


export default function Produtos() {


  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then(response => {
        setdata(response.data);
        console.log(response.data)
        setLoading(false);
      })
     
  }, []);

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="card-container">
      
      {
        data.map(produto => (
          <CardFloricultura key={produto.id} dados={produto}/>
        ))}
    </div>
  )

}





