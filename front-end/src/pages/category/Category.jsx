import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Category ID: {id}</h2>
    </div>
  );
};

export default Category;
