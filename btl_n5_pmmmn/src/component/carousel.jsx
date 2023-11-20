import React, { useState } from 'react';

export function CarouselDefault() {
    const slides = [
        {
            url: 'https://theme.hstatic.net/1000150581/1001058888/14/slider_1.jpg?v=320',
        },
        {
            url: 'https://theme.hstatic.net/1000150581/1001058888/14/slider_2.jpg?v=320',
        },
        {
            url: 'https://theme.hstatic.net/1000150581/1001058888/14/slider_3.jpg?v=320',
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div style={{ position: 'relative' }} className='-mt-16'>
            <img src={slides[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />

            <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                <button onClick={goToPreviousSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                <button onClick={goToNextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
