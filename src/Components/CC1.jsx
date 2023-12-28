import React, { useRef, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import one from './Images/CC1/One.png';
import two from './Images/CC1/Two.png';
import three from './Images/CC1/Three.png';
import four from './Images/CC1/Four.png';
import five from './Images/CC1/five.png'
import six from './Images/CC1/six.png'
import seven from './Images/CC1/seven.png'
import './CC1.css'

function CC1() {
    const slideRef = useRef(null);

    const back = () => {
        slideRef.current.goBack();
    };

    const next = () => {
        slideRef.current.goNext();
    };

    const properties = {
        duration: 1000, // Change the slide duration as needed
        autoplay: false,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: 'ease',
        indicators: (i) => {
            let indicatorText = '';
            switch (i) {
                case 0:
                    indicatorText = '';
                    break;
                case 1:
                    indicatorText = '';
                    break;
                case 2:
                    indicatorText = '';
                    break;
                default:
                    indicatorText = '';
            }
            return <div className="indicator11">{indicatorText}</div>;
        },
    };

    const slideImages = [
        { url: one, text: "Notion ambassador event in New York" },
        { url: two, text: "Sharing Notion setups in San Francisco" },
        { url: three, text: "Coffee pop-up in London" },
        { url: four, text: "Community meet-up in Tokyo" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            slideRef.current.goNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="cc1_tot">
            <div className="slide-container11">
                <Slide ref={slideRef} {...properties}>
                    {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                            <img
                                className="lazy11"
                                src={each.url}
                                alt={`slide-${index}`}
                                style={{ height: '560px' }} // Adjust height here
                            />
                            <div className="image-text11">{each.text}</div>
                        </div>
                    ))}
                </Slide>
            </div>

            <div className="comment_cc1">
                <div className="first_cm_cc1">
                    <div className="cc1_cm_head">
                        <img src={five} alt="" srcset="" className="cc1_cm_head_img" />
                        <div className="cc1_cm_name">Deborah Mecca</div> <br />
                        <div className="cc1_cm_twity">@DebMecca</div>
                    </div>
                    <div className="cc1_cm">
                        I used to HATE documenting things. And then I started using <span className="cc1_blue">@NotionHQ</span> and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.
                    </div>
                </div>

                <div className="first_cm_cc1">
                    <div className="cc1_cm_head">
                        <img src={six} alt="" srcset="" className="cc1_cm_head_img" />
                        <div className="cc1_cm_name">André Blackman</div> <br />
                        <div className="cc1_cm_twity">@mindofandre</div>
                    </div>
                    <div className="cc1_cm">
                        One of the most incredible things about <span className="cc1_blue">@NotionHQ</span> is the dynamic community being built - creating and sharing at its best.
                    </div>
                </div>

                <div className="first_cm_cc1">
                    <div className="cc1_cm_head">
                        <img src={seven} alt="" srcset="" className="cc1_cm_head_img" />
                        <div className="cc1_cm_name">Oliver Peyre</div> <br />
                        <div className="cc1_cm_twity1">@opeyre</div>
                    </div>
                    <div className="cc1_cm">
                        <span className="cc1_blue">@NotionHQ</span> Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CC1;