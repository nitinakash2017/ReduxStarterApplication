import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

//API key of youtube
const API_KEY=' AIzaSyDg4aUTOjp4bBOb1lxOsG5Xhdi1D83ub2I';
//Create a new component here.
const App=() => {
  return (
      <div>
        <SearchBar />
      </div>
    );
}

//Take this component's generated HTML and put it in page.
ReactDom.render(<App />, document.querySelector('.container'));
