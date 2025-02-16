import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import user from '@testing-library/user-event'


import { Counter } from "./counter";

describe('Counter', () => {
    // this test to check the elements renders
    test('should render', () => {
        render(<Counter />)

        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole('button', {
            name: /increment/i
        })

        expect(incrementButton).toBeInTheDocument()
    })

    //  this test to check the initial value of the state
    test('should render value of 0', () => {

        render(<Counter />)

        const countValue = screen.getByRole('heading')
        expect(countValue).toHaveTextContent('0')
    })

    test('should increment value on click', async () => {

        user.setup()
        render(<Counter />)

        const incrementButton = screen.getByRole('button', {
            name: /increment/i
        })

        await user.click(incrementButton)

        const countElement = screen.getByRole('heading')

        expect(countElement).toHaveTextContent('1')

    })


    test('should render 30 after clicking set button', async () => {
        user.setup()
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')
        // first argument is the element and second is the value we expect
        await user.type(amountInput, '30')
        expect(amountInput).toHaveValue(30)


        const setButton = screen.getByRole('button', {
            name: /set/i
        })
        await user.click(setButton)

        const countElement = screen.getByRole('heading')

        expect(countElement).toHaveTextContent('30')



    })

    test("elements are focused in the right order", async () => {
        user.setup();
        render(<Counter />);
      
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", { name: "Set" });
        const incrementButton = screen.getByRole("button", { name: "Increment" });
      
        await user.tab();
        expect(incrementButton).toHaveFocus();
      
        await user.tab();
        expect(amountInput).toHaveFocus();
      
        await user.tab();
        expect(setButton).toHaveFocus();
      });
      
})