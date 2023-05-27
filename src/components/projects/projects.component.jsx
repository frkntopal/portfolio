import React, { useEffect, useState } from 'react';
import './projects.styles.scss';
import { fetchGifCategories } from '../../utils/firebase/firebase';

function Projects() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGifCategories();
      setCategories(data);
    };

    fetchData();
  }, []);

  const openWebsite = (websiteUrl) => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <div className="slider">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <div className="card-list">
            {category.gifs.map((gif) => (
              <div key={gif.id} className="card">
                <div className="card-image-container">
                  <img src={gif.imageUrl} alt={gif.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">{gif.title}</h4>
                  <p className="card-description">{gif.description}</p>
                  <button
                    className="card-button"
                    onClick={() => openWebsite(gif.websiteUrl)}
                  >
                    Visit Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
