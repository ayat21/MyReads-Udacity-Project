import React,{useState,useEffect} from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";

const BooksApp = () =>{

  const [books, setBooks] = useState([]);
  const [booksFromSearch, setbooksFromSearch] = useState([]);
  const [search, setsearch] = useState([]);
  const [loadSearch, setloadSearch] = useState(false);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
  };
  getBooks();
}, []);


 const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      setBooks(res);
    });
    handleBooksSearch(setsearch(search))
  };

  const handleSearch = async (event) => {
    await setsearch(event.target.value,
    );
    console.log(event.target.value);
    handleBooksSearch(event.target.value);
  };

  const handleBooksSearch = async (search) => {
    await BooksAPI.search(search).then((res) => {
      if (res && !res.error) {
   
      res.map((booksSearch) => {
        console.log("aaaaaa",booksSearch)    
      books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
            })
            return booksSearch;
            setbooksFromSearch(booksSearch);
          })
          setloadSearch(true);
        
      } else {
          setbooksFromSearch(`No books like: " ${search} "`);
          setloadSearch(true);
        
      }
    }); 
  };

 
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <Search
                handleSearch={handleSearch}
                search={search}
                booksFromSearch={booksFromSearch}
                changeShelf={changeShelf}
                loadSearch={loadSearch}
              />
            </Route>
            <Route path="/">
              <Home books={books} changeShelf={changeShelf} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  
}

export default BooksApp;
