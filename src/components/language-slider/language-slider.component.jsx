import React from 'react';
import Slider from 'react-slick';

import './language-slider.styles.scss';

const languages = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Vue.js' },
  { id: 4, name: 'Python' },
  { id: 5, name: 'Flutter' },
  { id: 6, name: 'Firebase' },
  { id: 7, name: 'Redux' },
  { id: 8, name: 'Html' },
  { id: 9, name: 'Scss' },
];

const LanguageSlider = () => {
  const settings = {
    dots: true,
    infinite: languages.length > 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="language-slider">
      <Slider {...settings}>
        {languages.map((language) => (
          <div key={language.id} className="language-card">
            <h4 className="card-title">{language.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LanguageSlider;
