// greet should render text hello and if name is passed into the component then it should render hello followed by name

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Greet } from './Greet'


describe('Greet', () => {

    test('rendering correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
        // we are expecting Hello to be in virtual dom
    })

    test('rendering with name', () => {
        render(<Greet name="Kalyan" />)
        const textElement = screen.getByText(/hello kalyan/i)
        expect(textElement).toBeInTheDocument()
        // we are expecting Hello Kalyan to be in virtual dom
    })
})



