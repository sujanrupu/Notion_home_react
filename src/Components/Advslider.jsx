import React, { useRef, useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "./Advslider.css";
import "react-slideshow-image/dist/styles.css";

import seven from './Images/Slider/7.png';
import eight from './Images/Slider/8.png';
import nine from './Images/Slider/9.png';
import ten from './Images/Slider/10.png';
import eleven from './Images/Slider/11.jpg';
import twelve from './Images/Slider/12.png';
import one from './Images/Slider/1.png'
import two from './Images/Slider/2.png'
import three from './Images/Slider/3.png'
import four from './Images/Slider/4 (1).png'
import five from './Images/Slider/5.png'
import six from './Images/Slider/6 (1).png'

const Advslider = () => {
    const slideRef = useRef(null);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const properties = {
        duration: 1000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: 'ease',
        onChange: (oldIndex, newIndex) => setSelectedSlide(newIndex)
    };

    const slideImages = [
        { url: seven, label: { text: 'Engineering', img: one } },
        { url: eight, label: { text: 'Design', img: two } },
        { url: nine, label: { text: 'Product', img: three } },
        { url: ten, label: { text: 'Marketing', img: four } },
        { url: eleven, label: { text: 'Operations', img: five } },
        { url: twelve, label: { text: 'HR', img: six } }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            slideRef.current.goNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App1">
            <div className="b2_head">
                <div className="b2_htext">Every team, side-by-side</div>
            </div>
            <div className="button-container">
    {slideImages.map((slide, index) => (
        <div
            key={index}
            className={`indicator1 ${selectedSlide === index ? 'selected' : ''}`}
            onClick={() => {
                slideRef.current.goTo(index);
                setSelectedSlide(index);
            }}
        >
            <img src={slide.label.img} alt={`${slide.label.text}-img`} className="label-img" />
            <span>{slide.label.text}</span>
        </div>
    ))}
</div>
            <div className="bl_tot1">
                <div className="slide-container1">
                    <Slide ref={slideRef} {...properties}>
                        {slideImages.map((slide, index) => (
                            <div key={index} className="each-slide">
                                <div className="slide-label"></div>
                                <img className="lazy" src={slide.url} alt={`slide-${index}`} />
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Advslider;
