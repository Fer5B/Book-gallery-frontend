import React, { Component } from 'react'
import './BookCard.css';
import imgBook from '../images/book.png';
import PrimaryButton from './buttons/PrimaryButton';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export class BookCard extends Component {
  constructor(props){
    super(props)
    this.state = { book: props.book }
  }

  render() {
    return (
      <div className='book-card'>
        <div className="bc-options">
            <Link to='/edit' state={{book: this.state.book}} ><FaPen className='fa-pen' /></Link> 
        </div>
        <img className='img-book' src={imgBook} alt="book" />
        <div className="book-data">
          <h3>{this.state.book.title}</h3>
          <h3>$ {this.state.book.price.toLocaleString('es-AR')}</h3>
          <h5>Autor: {this.state.book.author}</h5>
          <h5>Fecha de publicación:  {this.state.book.releaseDate}</h5>
        </div>
        <Link to='/buy' className='r-link'><PrimaryButton text="Leer" /></Link> 
      </div>
    )
  }
}

export default BookCard;