import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardHeading = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[100%] px-10 pt-4 pb-0 mb-0'>
      <h1 className='text-[2.2em] font-bold text-[#052f0a]'>My Blog</h1>
      <button className='h-[2.3em] w-[6em] p-2 my-4 mb-2 font-semibold bg-[#1cd10c] text-white rounded flex items-center justify-center' onClick={(event)=>{
        event.preventDefault();
        navigate("/post");
      }}>New Post</button>
    </div>
  )
}

export default CardHeading;
