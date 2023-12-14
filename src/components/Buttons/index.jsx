import React from 'react';
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div>
      <Link to={`/save`}>
        <button className='mx-4'> Salvate </button>
      </Link>
      <Link to={`/add`}>
        <button> Adauga un task nou </button>
      </Link>
    </div>
  );
};

export default Buttons;
