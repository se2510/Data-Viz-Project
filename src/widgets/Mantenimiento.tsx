import React from 'react';
import cat1 from '/src/assets/cats/cat-1.png';
import cat2 from '/src/assets/cats/cat-2.png';
import cat3 from '/src/assets/cats/cat-3.png';
import cat4 from '/src/assets/cats/cat-4.png';
import cat5 from '/src/assets/cats/cat-5.png';
import cat6 from '/src/assets/cats/cat-6.png';
import cat7 from '/src/assets/cats/cat-7.png';
import cat8 from '/src/assets/cats/cat-8.png';
import cat9 from '/src/assets/cats/cat-9.png';
import cat10 from '/src/assets/cats/cat-10.png';

const imgCat = () => {    
    const cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10];
    return cats[Math.floor(Math.random() * cats.length)];
}

const Mantenimiento = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center font-bold'> En mantenimiento ... </h2>
        <img 
          src={imgCat()} 
          alt="Gatito en mantenimiento" 
          style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
        />
    </div>
  )
}

export default Mantenimiento;