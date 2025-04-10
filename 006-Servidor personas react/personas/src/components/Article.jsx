import React from 'react';
import './Article.css';

const Article = ({ nombre, edad }) => {
  return (
    <article className="card">
      <h3>{nombre}</h3>
      <p>{edad}</p>
    </article>
  );
};

export default Article;
