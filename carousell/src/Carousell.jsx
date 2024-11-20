import React, { useState } from 'react'
import './carousell.css'

const images = [
    'https://picsum.photos/id/58/900/500',
    'https://picsum.photos/id/142/900/500',
    'https://picsum.photos/id/193/900/500',
    'https://picsum.photos/id/234/900/500',
    'https://picsum.photos/id/299/900/500'
];

function Carousell() {
    const [current, setCurrent] =useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
    
  return (
    <div className='center'>
        <div className='prev' onClick={prevSlide}><i class='bx bx-left-arrow-alt'></i></div>
        <div className='images'>
            {/* {images.map((image, index) =>
                current === index && 
                <img src={image} key={index} alt='image'/>
            )}  instead of these */}

            {/* just write this bcz we are not rendering all images we're just displaying one  */}
                
            <img src={images[current]} alt="carousell" />
                   
        </div>
        <div className='next' onClick={nextSlide}><i class='bx bx-right-arrow-alt' ></i></div>
    </div>
  )
}

export default Carousell