import './search-autocomplete.css'

const SearchAutocomplete = ({foundByBook, foundByAuthor, input, handleClick}) => {

    function getHighlightedText(text) {
        const parts = text.split(new RegExp(`(${input})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === input.toLowerCase() ? <b>{part}</b> : part)}</span>;
    }
    const foundBooks = foundByBook.length ? <div className="autocomplete__section">
    <div 
    className="autocomplete__title">Books</div>
    <div 
    className="autocomplete__items">
    {foundByBook.map(function (el, index) { 
    return <div 
    key={index}
    className="autocomplete__item"
    onClick={() => handleClick(el.title)}
    >
        <div 
        key={Math.random()*100 + el.title}
        className="autocomplete__item-title">{getHighlightedText(el.title)}</div>
        <div 
        key={Math.random()*300 + el.title}
        className="autocomplete__item-subtext">{el.author} - Published in {el.year}</div>
    </div>})}
    </div>
    </div> : null;

    const foundAuthors = foundByAuthor.length ? <div className="autocomplete__section">
    <div className="autocomplete__title">Authors</div>
    <div className="autocomplete__items">
    {foundByAuthor.map(function (el, index) {
    return <div 
    key={index}
    className="autocomplete__item"
    onClick={() => handleClick(el.author)}
    >
        <div className="autocomplete__item-title">{getHighlightedText(el.author)}</div>
        <div className="autocomplete__item-subtext">Wrote {el.title}</div>
    </div>;
    })}
    </div>
    </div> : null;

    return foundByBook.length || foundByAuthor.length ? (
        <div className="autocomplete">
          <div className="autocomplete__wrapper">
              {foundBooks}
              {foundAuthors}
            </div>
        </div>)
        : (
        <div className="autocomplete">
            <div className="autocomplete__wrapper">
                <div className="no-books">
                    <div className="no-books__title">No matches</div>
                </div>
            </div>
        </div>
        );
}

export default SearchAutocomplete;