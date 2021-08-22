// import dependencies
import React from 'react'
/**
 * @jest-environment jsdom
 */
// import react-testing methods
import { screen, render, fireEvent } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import RestartGameButton from '../components/RestartGameButton';
import { GameContext } from '../context/GameContext';

describe('Button', () => {
    const restartGame = () => console.log("restart button clicked");

    it('renders without crashing', () => {
        const component =
         render(<GameContext.Provider value={restartGame}>
            <RestartGameButton />
        </GameContext.Provider>);

        expect(component).toBeTruthy();
    });
    it('is in document', () => {
        render(
            <GameContext.Provider value={restartGame}>
                <RestartGameButton />
            </GameContext.Provider>
        );
        expect(screen.getByText("New Game")).toBeInTheDocument();
    });

    it('is has color attribute', () => {

        render(
            <GameContext.Provider value={restartGame}>
                <RestartGameButton />
            </GameContext.Provider>
        );

        const MyHeaderRoots = document.getElementById('new-game-button')
        const style = window.getComputedStyle(MyHeaderRoots)
        expect(style.color).toBe('rgb(255, 255, 255)')
    });

    it('button is clickable', () => {
        const mockFn = jest.fn();
        render(<GameContext.Provider value={{ restartGame }} >
            <RestartGameButton onClick={mockFn} />
        </GameContext.Provider>);

        fireEvent.click(screen.getByText('New Game'))
    });


});