import React, {  useContext } from 'react';
import PlaceHolder from './PlaceHolder';
import { ImageHelper } from '../helpers/ImageHelper';
import { CompletedSetsContext } from '../context/CompletedSetsContext';
import { useStyles } from '../styles/styles.CollectedDesc';

const CollectedSets = () => {
  const { collectedSetsCount } = useContext(CompletedSetsContext);
  const classes = useStyles();

  return (
    <>
      {[...Array(8)].map((item, index) => (
        index < collectedSetsCount ? 
        (
          <img className={classes.image} key={index} src={ImageHelper('K')} alt='closedCard'/>
        ) : (
          <PlaceHolder key={index} className={classes.image}/>
        )
      ))}
    </>
  );
};

export default CollectedSets;