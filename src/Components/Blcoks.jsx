import React, { useRef, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "./Blocks.css";
import "react-slideshow-image/dist/styles.css";

import projects from './Images/projects.png';
import tasks from './Images/tasks.png';
import roadmap from './Images/Roadmap.png';
import blocks from './Images/blocs.png';

const Blocks = () => {
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
                    indicatorText = 'Board';
                    break;
                case 1:
                    indicatorText = 'Table';
                    break;
                case 2:
                    indicatorText = 'Timeline';
                    break;
                default:
                    indicatorText = '';
            }
            return <div className="indicator">{indicatorText}</div>;
        },
    };

    const slideImages = [
        { url: projects },
        { url: tasks },
        { url: roadmap }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            slideRef.current.goNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App1">
            <div className="bl_head">
                <img src={blocks} alt="" className="bl_img" />
                <div className="bl_htext">Powerful building blocks</div>
            </div>
            <div className="bl_tot">
                <div className="bl_desc">
                    <div className="bl_desc1">Visualize, filter & sort any way you want</div>
                    <div className="bl_desc2">Show only tasks assigned to you, or items marked as urgent. Break</div>
                    <div className="bl_desc3">down any project in the way that’s most helpful to you.</div>
                </div>
                <div className="slide-container">
                    <Slide ref={slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                            <div key={index} className="each-slide">
                                <img className="lazy" src={each.url} alt={`slide-${index}`} />
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Blocks;
