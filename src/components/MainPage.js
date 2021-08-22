import PlayGround from './PlayGround';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './Header';
import GameFinished from './GameFinished';
import React, { useState } from 'react';
import Rules from './Rules';
import CommonContextWrapper from '../context/CommonContextWrapper';

function MainPage() {
  const [open, setOpen] = useState(true);
  
  return (
    <div className='app-background'>
      {open ? <>
        <Rules open={open} setOpen={setOpen} />
      </>
        :
        <DndProvider backend={HTML5Backend}>
          <CommonContextWrapper>
            <Header />
            <PlayGround />
            <GameFinished />
          </CommonContextWrapper>
        </DndProvider>
      }
    </div>
  );
}

export default MainPage;