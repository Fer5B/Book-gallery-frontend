import React, { useState } from 'react'
import './EditBookCard.css'
import Form from '../../form/Form'
import { useLocation } from 'react-router-dom'
import { TfiClose } from 'react-icons/tfi'
import PrimaryButton from '../../buttons/PrimaryButton'


function EditBookCard() {
  const location = useLocation();
  const { book } = location.state;
  const [ title, setTitle ] = useState(book.title);
  const [ author, setAuthor ] = useState(book.author);
  const [ releaseDate, setReleaseDate ] = useState(book.releaseDate);
  const [ price, setPrice ] = useState(book.price);
  const [ message, setMessage ] = useState('');
  const [ delPopup, setDelPopup ] = useState(false);

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
    // Envío de datos
    fetch(book._links.self.href, {
        method: "PUT",
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
      if(response.status === 200) { 
        setMessage("Libro editado con éxito");
      }
      else
        setMessage("Hubo un error");
    })          
    .catch((err) => {
      console.log(err.message);
    });

  }

  let deleteBook = (del) => {
    if(del){
      fetch(book._links.self.href, { method: "DELETE" })
      .then(response => {
        if(response.status === 200) { 
          setValues();
          setMessage("Libro eliminado");
          setDelPopup(false)
        }
        else
          setMessage("Hubo un error");
      })          
      .catch((err) => {
        console.log(err.message);
      });
    }
    else {
      setDelPopup(false)
    }

  }

  const DelQuestion = ({ open }) => {
    if(! open)
      return <></>

    return (
      <div>
        <div className="popup-overlay"></div>
        <div className='del-confirm popup-in'>
          <h4>¿Estás seguro de querer borrar el libro {title} de {author}?</h4>
          <div className='del-y-n'>
            <PrimaryButton text='Aceptar' onClick={() => deleteBook(true)} />
            <PrimaryButton text='Cancelar' onClick={() => deleteBook(false)} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="del-book"><TfiClose className='tfi-close' onClick={() => {setDelPopup(true); console.log("click delete!")} } /></div>
      <DelQuestion open={delPopup} />
      <Form title='Editar libro' textButton='Editar' inputs={inputs} handleSubmit={handleSubmitForm} resultMessage={message} />
    </div>
  )
}

export default EditBookCard