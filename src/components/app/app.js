import './app.css';
import SearchBar from '../search-bar/search-bar';
import Books from '../../front-end/books';
import { useEffect, useState } from 'react';

function App() {
    const [booksArray, setBooksArray] = useState([]);
    useEffect(() => {
        new Books().askListBooks().then(books => {
            setBooksArray(books);
        });
    }, []);

    return(
        <div>
        <div className="app">
            <h1>Find your favorite books</h1>
        </div>
        <SearchBar books={booksArray}/>
        </div>
    )
}

export default App;