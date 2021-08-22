// import dependencies
import React from 'react'
/**
 * @jest-environment jsdom
 */
// import react-testing methods
import { screen, render,fireEvent } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import UndoMoveButton from '../components/UndoMoveButton';
import { GameContext } from '../context/GameContext';
import { PreviousMovesContext } from '../context/PreviousMovesContext';

describe('Button', () => {
    const  undoMove  = () => console.log("dilan");
    const prevMoves  = []

    it('renders without crashing', () => {
        const component =
         render(
         <GameContext.Provider value={undoMove}>
         <PreviousMovesContext.Provider value={{prevMoves}}>
            <UndoMoveButton />
            </PreviousMovesContext.Provider>
        </GameContext.Provider>
       );

        expect(component).toBeTruthy();
    });
    it('is has margin-right style', () => {
        render(
            <PreviousMovesContext.Provider value={{prevMoves}}>
         <GameContext.Provider value={undoMove}>
            <UndoMoveButton />
        </GameContext.Provider>
        </PreviousMovesContext.Provider>
        );

        const MyHeaderRoots = document.getElementById('undo-move-button')
        const style = window.getComputedStyle(MyHeaderRoots)
        expect(style.marginRight).toBe('10px')
    });

    it('is has color', () => {
        
        render(
            <PreviousMovesContext.Provider value={{prevMoves}}>
         <GameContext.Provider value={undoMove}>
            <UndoMoveButton />
        </GameContext.Provider>
        </PreviousMovesContext.Provider>
        );

        const MyHeaderRoots = document.getElementById('undo-move-button')
        const style = window.getComputedStyle(MyHeaderRoots)
        expect(style.color).toBe('rgb(255, 255, 255)')
    });
    it('button is clickable', () => {
        const mockFn = jest.fn();
        render(
            <PreviousMovesContext.Provider value={{prevMoves}}>
            <GameContext.Provider value={undoMove}>
               <UndoMoveButton onClick={mockFn} />
           </GameContext.Provider>
           </PreviousMovesContext.Provider>);

        fireEvent.click(screen.getByText('Undo'))
    });


    it('button is disabled', () => {
        const mockFn = jest.fn();
        render(
            <PreviousMovesContext.Provider value={{prevMoves}}>
            <GameContext.Provider value={undoMove}>
               <UndoMoveButton onClick={mockFn} />
           </GameContext.Provider>
           </PreviousMovesContext.Provider>);

        expect(screen.getByRole('button')).toBeDisabled();
    });

});