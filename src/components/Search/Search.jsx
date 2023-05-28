import React from 'react';
import './Search.css'

function Search({onChange}) {
    return (
        <form>
            <input type="text" placeholder="Поиск по имени" onChange={onChange}/>
        </form>
    );
}

export default Search;