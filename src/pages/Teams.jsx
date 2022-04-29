import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import photo from  "../components/style/IMG_3471.jpg"




const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className='foto' src={photo} onDragStart={handleDragStart} />,
    <img className='foto' src={photo} onDragStart={handleDragStart} />,
    <img className='foto' src={photo} onDragStart={handleDragStart} />,
    <img className='foto' src={photo} onDragStart={handleDragStart} />,
    <img className='foto'  src={photo} onDragStart={handleDragStart} />,
    <img className='foto' src={photo} onDragStart={handleDragStart} />
];

const Teams = () => {
    return (
        <div className='Photos'>
            <div className="container-md">
                <div className="imgs">
                <AliceCarousel mouseTracking items={items} />
                </div>
            </div>
            </div>
        
    );
};

export default Teams;