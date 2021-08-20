import React, { useContext } from 'react';
import spadesKing from '../assets/spades-king.png';
import { GameContext } from '../context/GameContext';
import CardPlaceHolder from './CardPlaceHolder';

const CollectedDecs = () => {
  const totalDecsCount = 8;
  const { collectedDecsCount } = useContext(GameContext);

  return (
    <>
      {[...Array(totalDecsCount)].map((item, index) => (
        collectedDecsCount < index ? (
          <img src={spadesKing} alt='closedCard' style={{ borderRadius: '12px', width: '100px' }} />
        ) : (
          <CardPlaceHolder key={index} />
        )
      ))}

    </>
  );
};

export default CollectedDecs;