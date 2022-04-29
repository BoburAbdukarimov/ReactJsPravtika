import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import photoTwo from "./style/photo.jpg";
import photoSree from "./style/IMG_3471.jpg";
import photoFour from "./style/IMG_3498.jpg";


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className='photo' src={photoFour}  onDragStart={handleDragStart} />,
    <img className='photo' src={photoTwo} width="100%" onDragStart={handleDragStart} />,
    <img className='photo' src={photoSree} width="100%" onDragStart={handleDragStart} />
];

const Gallery = () => {
    return (
        <>     

        <AliceCarousel autoPlay 
        mouseTracking 
        autoPlayStrategy="none"
        autoPlayInterval={4000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        items={items} />
        </>
    
    );
}
export default Gallery;