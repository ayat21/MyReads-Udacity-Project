import React from 'react'
import Shelf from './Shelf';
import {
    Link
  } from "react-router-dom";

const Home = ({books, changeShelf}) => {

    return (
        <div className="list-books">
        <div className="list-books-title">
    {/*     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0"
       type="submit">Search</button>
    </form>
  </div>
</nav> */}
       <h1> Good<span >reads</span></h1>
        </div>
        <div className="list-books-content">
          <div>
            
            {/* shelf */}
            <Shelf section='Currently Reading' books={books} category="currentlyReading" changeShelf={changeShelf}/>
            <Shelf section='Want To Read' books={books} category="wantToRead" changeShelf={changeShelf}/>
            <Shelf section='Read' books={books} 
            category="read" changeShelf={changeShelf}/>
           
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-serch__link">Add a book</Link>

        </div>
      </div>
    )
}

export default Home
