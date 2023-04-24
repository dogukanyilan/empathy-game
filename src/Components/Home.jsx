import React from 'react';
import home from "../images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Empati Geliştirme Müdahale Oyunu' 
                imgsrc={home} 
                visit='/services' 
                btnname="Haydi Başlayalım" 
            />
        </>
    )
}

export default Home;