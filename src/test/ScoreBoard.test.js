// import dependencies
import React from 'react'
/**
 * @jest-environment jsdom
 */
// import react-testing methods
import { screen, render } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import ScoreBoard from '../components/ScoreBoard';
import { ScoreContext } from '../context/ScoreContext';

describe('Button', () => {
    const score = 1000;

    it('renders without crashing', () => {
        const component = render(<ScoreContext.Provider value={{ score }}>
            <ScoreBoard />
        </ScoreContext.Provider>);

        expect(component).toBeTruthy();
    });
    it('Score in document', () => {
        render(
            <ScoreContext.Provider value={{ score }}>
                <ScoreBoard />
            </ScoreContext.Provider>
        );
        expect(screen.getByText("Score:")).toBeInTheDocument();
    });

    it('1000 in document', () => {
        render(
            <ScoreContext.Provider value={{ score }}>
                <ScoreBoard />
            </ScoreContext.Provider>
        );
        expect(screen.getByText("1000")).toBeInTheDocument();
    });

});