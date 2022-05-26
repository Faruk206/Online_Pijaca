import React from 'react';
import LazyHero from 'react-lazy-hero';
import '../App.css'

export default function Naslovna() {
    return (
        <div>
            <LazyHero  opacity = {0.3} minHeight = '80vh' parallaxOffset={100} imageSrc="http://trznice.ba//userfiles/images/pijace/grbavica/DSC_9122.JPG">
                <h1 className='Naslov'>Online pijaca SBK</h1>
            </LazyHero>

            {/* ... */}
        </div>
    );
}