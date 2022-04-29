import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import './style.css'

const Maps = () => {
    return (
        <YMaps className="map">
            <div>
            <Map defaultState={{ center: [41.279750, 69.212610], zoom: 10 }} />
            </div>
        </YMaps>
    );
};

export default Maps;