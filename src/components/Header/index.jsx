import React from 'react';
import AddButton from '../Buttons';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-zinc-800 flex flex-row justify-between rounded-lg mb-5 p-5'>
      <Link to = {`/`}> 
        <h1> LAB_3 </h1>
      </Link>

      <AddButton />
    </header> 
  );
};

export default Header;