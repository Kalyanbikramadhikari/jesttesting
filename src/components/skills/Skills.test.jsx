import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import { Skills } from "./Skills";

describe('Skills', () => {
    const skills = ['html', 'css', 'js']

    test('renders correctly with props', () => {
        render(<Skills skills={skills} />)

        const listElement = screen.getByRole('list') // finds ul element
        expect(listElement).toBeInTheDocument() 

    })

    test('renders a list of skills',()=>{
        render(<Skills skills={skills}/>)
        const listeItemElements = screen.getAllByRole('listitem')
        expect(listeItemElements).toHaveLength(skills.length)
    })
})