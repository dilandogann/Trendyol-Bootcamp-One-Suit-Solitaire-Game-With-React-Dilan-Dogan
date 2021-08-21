import React, {  useContext } from 'react';
import PlaceHolder from './PlaceHolder';
import { ImageHelper } from '../helpers/ImageHelper';
import { CompletedSetsContext } from '../context/CompletedSetsContext';

const CollectedSets = () => {
  const { collectedSetsCount } = useContext(CompletedSetsContext);

  return (
    <>
      {[...Array(8)].map((item, index) => (
        index < collectedSetsCount ? 
        (
          <img key={index} src={ImageHelper('K')} alt='closedCard' style={{borderRadius: '12px',width:'100px'}} />
        ) : (
          <PlaceHolder key={index}/>
        )
      ))}
    </>
  );
};

export default CollectedSets;