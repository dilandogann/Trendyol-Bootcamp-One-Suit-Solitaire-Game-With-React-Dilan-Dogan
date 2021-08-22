// import dependencies
import React from 'react'
/**
 * @jest-environment jsdom
 */
// import react-testing methods
import { screen, render,fireEvent } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import CommonErrorAlertComponent from '../components/CommonErrorAlertComponent';
import { CommonErrorContext, updateError } from '../context/CommonErrorContext';

describe('Button', () => {
    const error = { show: true, message: "error" }
    const updateMyError = () => updateError()

    it('renders without crashing', () => {
        const component =
            render(<CommonErrorContext.Provider value={{ commonError: error, updateError: updateMyError }}>
                <CommonErrorAlertComponent />
            </CommonErrorContext.Provider>);

        expect(component).toBeTruthy();
    });
    it('Error in document', () => {
        render(
            <CommonErrorContext.Provider value={{ commonError: error, updateError: updateMyError }}>
                <CommonErrorAlertComponent />
            </CommonErrorContext.Provider>
        );
        expect(screen.getByText("error")).toBeInTheDocument();
    });

    it('Modal closed in document', () => {

        const mockFn = jest.fn();

        render(<CommonErrorContext.Provider value={{ commonError: error, updateError: updateMyError }}>
                <CommonErrorAlertComponent onClick={mockFn}/>
            </CommonErrorContext.Provider>);

        fireEvent.click(screen.getByTestId("error-modal"))
    });

});