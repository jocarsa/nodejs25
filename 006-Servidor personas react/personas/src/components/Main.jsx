import React from 'react';
import Article from './Article';
import './Main.css';
import useFetch from '../hooks/useFetch';

const Main = () => {
  const { data: datos, error, isLoading } = useFetch("http://localhost:3000");

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <main className="grid-container">
      {datos && datos.map((dato, index) => (
        <Article key={index} nombre={dato.nombre} edad={dato.edad} />
      ))}
    </main>
  );
};

export default Main;
