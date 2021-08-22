// import dependencies
import React from 'react'
/**
 * @jest-environment jsdom
 */
// import react-testing methods
import { screen, render } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import Rules from '../components/Rules';

describe('Rules component tests', () => {
  let open = true
  const setOpen = () => { open =true}

    it('renders without crashing', () => {
        const component =
            render( <Rules open={open} setOpen={setOpen}/>);

        expect(component).toBeTruthy();
    });
    it('Error in document', () => {
        render(
                <Rules open={open} setOpen={setOpen}/>
        );
        expect(screen.getByText("Before you begin, here are the game rules")).toBeInTheDocument();
    });

});