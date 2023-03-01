import React, { useState } from 'react'
import './AddBook.css'
import Form from '../../form/Form'

function AddBook() {
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [ releaseDate, setReleaseDate ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ message, setMessage ] = useState('');

  const inputs = [
    {
      id: "I1", text: "Título", value: title, setValue: setTitle, 
      input: () => {return <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Título' />}
    },
    {
      id: "I2", text: "Autor", value: author, setValue: setAuthor, 
      input: () => {return <input type="text" name="" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Autor' />}, 
    },
    {
      id: "I3", text: "Fecha de publicación", value: releaseDate, setValue: setReleaseDate,
      input: () => {return <input type="text" name="" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} placeholder='Fecha de publicación' />}
    },
    {
      id: "I4", text: "Precio",  value: price, setValue: setPrice,
      input: () => {return <input type="number" max={10000000} name="" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Precio' />}
    }
  ]

  let setValues = () => {
    setTitle('');
    setAuthor('');
    setReleaseDate('');
    setPrice('');
  }

  let handleSubmitForm = () => {
    // Validación de datos

    // Envío de datos
    fetch("http://127.0.0.1:8080/api/books", {
        method: "POST",
        headers: {
          Accept: "application/hal+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          author: author,
          releaseDate: releaseDate,
          price: price
        }),
    })
    .then(response => {
      console.log("res.status: "+response.status);
      if(response.status === 201) {
        setValues(); 
        setMessage("Libro creado con éxito");
      }
      else
        setMessage("Hubo un error");
    })          
    .catch((err) => {
      console.log(err.message);
    });

  }

  return (
    <Form title='Agregar libro' textButton='Agregar' inputs={inputs} handleSubmit={handleSubmitForm} resultMessage={message} />
  )
}

export default AddBook