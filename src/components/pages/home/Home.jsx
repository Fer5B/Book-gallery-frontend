import './Home.css';
import BookCard from '../../BookCard';
import React, { useEffect, useState } from 'react';

const endpointBooksData = "http://127.0.0.1:8080/api/books";

const Home = () => {
    const [booksData, setBooksData] = useState([]);
  
    useEffect(() => {
       fetch(endpointBooksData)
          .then((response) => response.json())
          .then((data) => {
             if(data._embedded !== undefined)
               setBooksData(data._embedded.bookList);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  
    return (
        <div className="book-card-container">
            {booksData.map(book => <BookCard key={book.id} book={book} />)}            
        </div>
    )
  }


export default Home