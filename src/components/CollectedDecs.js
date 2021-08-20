import React, {  useContext } from 'react';
import spadesKing from '../assets/spades-king.png';
import { GameContext } from '../context/GameContext';
import PlaceHolder from './PlaceHolder';

const CollectedDecs = () => {
  const { collectedDecsCount } = useContext(GameContext);

  return (
    <>
      {[...Array(8)].map((item, index) => (
        index < collectedDecsCount ? 
        (
          <img src={spadesKing} alt='closedCard' style={{borderRadius: '12px',width:'100px'}} />
        ) : (
          <PlaceHolder key={index}/>
        )
      ))}
    </>
  );
};

export default CollectedDecs;