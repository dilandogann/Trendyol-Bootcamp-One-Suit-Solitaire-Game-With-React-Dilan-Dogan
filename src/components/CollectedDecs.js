import React, { forwardRef, useImperativeHandle, useState } from 'react';
import heartsback from '../assets/hearts-back.jpg';
import CardPlaceHolder from './CardPlaceHolder';

const CollectedDecs = forwardRef((props, ref) => {
  const [collectedDecs] = useState(8);
  const [collectedDecsCount, setcollectedDecsCount] = useState(8);

  useImperativeHandle(ref, () => ({
    setDeckAsCollected() {
      setcollectedDecsCount(collectedDecsCount + 1);
    },
  }));

  return (
    <>
      {[...Array(collectedDecs)].map((item, index) => (
        collectedDecsCount <  index ? (
          <img src={heartsback} alt='closedCard' />
        ) : (
          <CardPlaceHolder key={index} />
        )
      ))}

    </>
  );
});

export default CollectedDecs;