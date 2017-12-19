import React from 'react';
import ReactDom from 'react-dom';
//Create a new component here.
const App=function(){
  return <div>Hi! This is new application</div>;
}

//Take this component's generated HTML and put it in page.
ReactDom.render(<App />, document.querySelector('.container'));
