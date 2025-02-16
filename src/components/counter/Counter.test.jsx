import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import user from '@testing-library/user-event'


import { Counter } from "./counter";

describe('Counter',()=>{
    // this test to check the elements renders
    test('should render', () => { 
        render(<Counter/>)

        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole('button',{
            name: /increment/i
        })

        expect(incrementButton).toBeInTheDocument()
     })

    //  this test to check the initial value of the state
    test('should render value of 0', () => { 
        
        render(<Counter/>)

        const countValue = screen.getByRole('heading')
        expect(countValue).toHaveTextContent('0')
     })

     test('should increment value on click', async() => { 

        user.setup()
        render(<Counter/>)

        const incrementButton = screen.getByRole('button',{
            name: /increment/i
        }) 

        await user.click(incrementButton)

        const countElement = screen.getByRole('heading')

        expect(countElement).toHaveTextContent('1')

      })
})