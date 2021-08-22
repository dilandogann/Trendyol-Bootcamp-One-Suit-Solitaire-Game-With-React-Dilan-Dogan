// import dependencies
import React from 'react'
/**
 * @jest-environment jsdom
 */
// import react-testing methods
import { screen, render } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import PlayGround from '../components/PlayGround';

describe('Rules component tests', () => {

    it('Play Ground without crashing', () => {
        const component =
            render( <PlayGround />);

        expect(component).toBeTruthy();
    });

});