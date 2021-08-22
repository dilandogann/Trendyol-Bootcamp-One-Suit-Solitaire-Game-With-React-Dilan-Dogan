import React, { useContext ,useEffect} from 'react';
import { useDrag } from 'react-dnd';
import { ImageHelper }from '../helpers/ImageHelper'
import { CommonErrorContext } from '../context/CommonErrorContext';
import { useStyles } from '../styles/styles.Single';

const Single = ({ card, click, chunkIndex, cardIndex, isDraggable }) => {
  const classes = useStyles(cardIndex);
  const { updateError } = useContext(CommonErrorContext);
  const [{ isDragging }, drag ] = useDrag(() => ({
    type: 'image',
    item: { card, chunkIndex, cardIndex },
    canDrag: () => canItemDrag(),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),

  }));
  const canItemDrag = () =>{

    if(isDraggable()){
      return true;
    }
    else{
      const error = { show: true, message: "You can not drag this item!" }
      updateError(error);
    }
  }

  return card.showFront ? (
    <img
      ref={drag}
      src={ImageHelper(card.value)}
      alt={ImageHelper(card.value)}
      className={classes.showFront}
      onClick={click}
      style={{ border: isDragging ? '3px solid pink' : '0px' }}
    />
  ) : (
    <img
      src={ImageHelper()}
      alt={ImageHelper()}
      className={classes.card}
      onClick={click}
    />
  );
};

export default Single;
