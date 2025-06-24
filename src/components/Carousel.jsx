import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Carousel.css"
import { useState, useEffect } from 'react';
import momAndDad from '../assets/momAndDad.jpg'
import hawkins from '../assets/Hawkins.jpg'
import jeff from '../assets/Jeff.jpg'

const images = [momAndDad, hawkins, jeff];
const captions = ["Mom and Dad", "Mr. Hawkins", "Jeff"]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null); 
  const [direction, setDirection] = useState('next'); 
  const [hovering, setHovering] = useState(false)
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (hovering || animating) return;

    const interval = setInterval(() => {
      slideTo((currentIndex + 1) % images.length, 'next');
    }, 4000);

    return () => clearInterval(interval); // cleanup
  }, [currentIndex, hovering, animating])

  const slideTo = (newIndex, dir) => {
    if (animating) return;

    setDirection(dir);
    setNextIndex(newIndex);
    setAnimating(true);

    // Delay the state update until animation finishes
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setAnimating(false);
    }, 500); // duration of animation
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    slideTo(newIndex, 'next');
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    slideTo(newIndex, 'prev');
  };  

  return (
    <div className="custom-carousel"       
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}>
    <div className="carousel-inner">
      <div
        className={`carousel-slide ${
          nextIndex !== null ? `slide-out-${direction}` : ''
        }`}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="caption">{captions[currentIndex]}</div>
      </div>

      {nextIndex !== null && (
        <div className={`carousel-slide slide-in-${direction}`}>
          <img
            src={images[nextIndex]}
            alt={`Slide ${nextIndex + 1}`}
            className="carousel-image"
          />
          <div className="caption">{captions[nextIndex]}</div>
        </div>
      )}
    </div>

    <button className="nav-arrow left-arrow" onClick={goToPrev}>
      ❮
    </button>
    <button className="nav-arrow right-arrow" onClick={goToNext}>
      ❯
    </button>
  </div>
)
}

export default ImageCarousel;
