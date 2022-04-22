import './search-bar.css'
import SearchAutocomplete from '../search-autocomplete/search-autocomplete';
import { useState } from 'react';

const SearchBar = ({books}) => {
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [showBooks, setShowBooks] = useState(false);
    const [input, setInput] = useState('');

    const onChange = (event) => {
      const userInput = event.target.value;
      const foundBooks = books.filter(
        (book) =>
          book.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
      const foundAuthors = books.filter(
          (book) =>
            book.author.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      setFilteredBooks(foundBooks);
      setFilteredAuthors(foundAuthors);
      setShowBooks(true);
      setInput(event.target.value);
   };

   const onChoose = (item) => {
      setFilteredBooks([]);
      setFilteredAuthors([]);
      setShowBooks(false);
      setInput(item);
    };
    
    return(
        <div className="search-bar">
            <input
            onChange={onChange}
            value={input}
            type="text"
            className="search-bar__input"
            placeholder="Search by title or author"
            />
            {showBooks && input && <SearchAutocomplete foundByBook={filteredBooks} foundByAuthor={filteredAuthors} input={input}
            handleClick={onChoose} 
            />}
        </div>
    )
}

export default SearchBar;