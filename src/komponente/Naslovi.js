import React from 'react';
import '../App.css'

export default function Naslovna() {
    return (
        <div>
            <LazyHero  opacity = {0.4} minHeight = '60vh' parallaxOffset={100} imageSrc="https://storage.radiosarajevo.ba/image/401311/1180x732/pijaca_Markale_tezge%20(7).jpg">
                <h1 className='Naslov'>E commerce shop III-5</h1>
            </LazyHero>

            {/* ... */}
        </div>
    );
}