import React, {  useContext } from 'react';
import { GameContext } from '../context/GameContext';
import PlaceHolder from './PlaceHolder';
import { ImageHelper } from '../helpers/ImageHelper';

const CollectedDecs = () => {
  const { collectedDecsCount } = useContext(GameContext);

  return (
    <>
      {[...Array(8)].map((item, index) => (
        index < collectedDecsCount ? 
        (
          <img src={ImageHelper('K')} alt='closedCard' style={{borderRadius: '12px',width:'100px'}} />
        ) : (
          <PlaceHolder key={index}/>
        )
      ))}
    </>
  );
};

export default CollectedDecs;