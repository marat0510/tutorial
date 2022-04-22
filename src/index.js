import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

function BookList(){
  return (
      <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        
      </section>
);
}
const Book = () =>{
  return (
    <article className='book'>
    <Image/>
    <Title/>
    <Author/>
    </article>
  );
};
const Title = () => <h1>Je t’aime jusqu’à la Lune et retour</h1>
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg" alt=""/>
const Author = () => <h3>Amelia Hepworth</h3>
ReactDom.render(<BookList/>, document.getElementById('root'));