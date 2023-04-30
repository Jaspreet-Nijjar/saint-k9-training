import { useState, useEffect } from 'react';
import { ImageSliderData } from '../data/ImageSliderData';
import imageslider from '../styles/imageslider.css';

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <div className="slider-container">
        {ImageSliderData.map((image, index) => (
          <div key={index} className="image-container">
            {current === index && (
              <img
                src={image.pic}
                alt="dog training exercises"
                className={`imageslider-images ${current && 'active'}`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
