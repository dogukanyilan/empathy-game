import React from 'react';
import Iframe from 'react-iframe'


const Animasyon1 = () => {
    return (
        <>
            <div className='flex gap-5 mx-4 mt-4 border-4 border-blue-400 rounded-lg p-3 items-center justify-around'>
                <Iframe
                url="https://www.youtube.com/embed/B1sGqYPfjWg"
                frameborder="0"
                className='animasyon'
                allowfullscreen/>
                
                <div className='flex flex-col justify-center items-center'>
                    <h1>Bu durumda Riley nasıl hisseder?</h1>
                    <div className='flex gap-5 text-xl mt-3'>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Korkmuş</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Üzgün</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Mutlu</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Kızmış</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mx-4 mt-4 border-4 border-blue-400 rounded-lg p-3 items-center justify-around'>
                <Iframe
                url="https://www.youtube.com/embed/22f9g0ZCyXk"
                frameborder="0"
                className='animasyon'
                allowfullscreen/>
                
                <div className='flex flex-col justify-center items-center'>
                    <h1>Bu durumda Riley nasıl hisseder?</h1>
                    <div className='flex gap-5 text-xl mt-3'>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Korkmuş</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Üzgün</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Mutlu</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Kızmış</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mx-4 mt-4 border-4 border-blue-400 rounded-lg p-3 items-center justify-around'>
                <Iframe
                url="https://www.youtube.com/embed/ODmcvp9oVPg"
                frameborder="0"
                className='animasyon'
                allowfullscreen/>
                
                <div className='flex flex-col justify-center items-center'>
                    <h1>Bu durumda Riley nasıl hisseder?</h1>
                    <div className='flex gap-5 text-xl mt-3'>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Korkmuş</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Üzgün</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Mutlu</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio"/>
                            <label>Kızmış</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Animasyon1;