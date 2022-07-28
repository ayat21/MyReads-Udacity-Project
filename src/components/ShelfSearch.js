import React, { Component } from 'react'
import { search } from '../BooksAPI'
import Book from './Book'
import Search from './Search'

  const ShelfSearch = ({booksFromSearch, changeShelf, loadSearch}) => {
        return (
            <div className="bookshelf">
              <div className="bookshelf-books">
                <ol className="books-grid">
{/* Book */}
                 {
                  
                     loadSearch ? (
                      booksFromSearch.map((book)=>(
                         <Book key={book.id} book={book} 
                         changeShelf={ changeShelf}/>

                         ))
                     )          
                 :("")}
                </ol>
              </div>
            </div>  
    )
       
    
}

export default ShelfSearch;
