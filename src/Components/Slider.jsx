import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import projects from './Images/projects.png'
import tasks from './Images/tasks.png'
import roadmap from './Images/Roadmap.png';
import './Slider.css';

function Slider() {
  const sliderImages = [
    {
      url: projects
    },
    {
      url: tasks
    },
    {
      url: roadmap
    }
  ];
  
  const [activeImageNum, setActiveImageNum] = useState(0);
  const length = sliderImages.length;
  const intervalTime = 2000; 
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval); 
  }, [activeImageNum]);

  const nextSlide = () => {
    setActiveImageNum((prevActive) => (prevActive === length - 1 ? 0 : prevActive + 1));
  };

  const prevSlide = () => {
    setActiveImageNum((prevActive) => (prevActive === 0 ? length - 1 : prevActive - 1));
  };

  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="image-slider">
        <div className="left_slider_top">
          <ArrowBackIosIcon onClick={prevSlide} />
        </div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
              key={ind}
            >
              {ind === activeImageNum && <img src={currentSlide.url} alt={`slide-${ind}`} className="image_slider_top" />}
            </div>
          );
        })}
        <div className="right_slider_top">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
      </section>
    </div>
  );
}

export default Slider;
