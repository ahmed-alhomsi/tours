import React, { useState } from 'react';

const Tour = ({ image, info, name, price, id, removeTour }) => {
  const [showTour, setShowTour] = useState(true);
  const [showFullInfo, setShowFullInfo] = useState(false);

  function toggleShowFullInfo() {
    setShowFullInfo(prevShow => !prevShow);
  }

  if(showTour) {
    return (
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>{showFullInfo ? info : `${info.substring(0, 200)}...`} <button onClick={() => toggleShowFullInfo()}>{showFullInfo ? "Show Less" : "Read More"}</button></p>
          <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
        </footer>
      </article>
    )
  } else {
    return <></>
  }
};

export default Tour;
