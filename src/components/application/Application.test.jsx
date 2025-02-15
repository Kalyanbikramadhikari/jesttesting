import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Application } from "./Application";


describe('Application', () => {

    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading',{
            name:'Job application form'
        }) // all heading elements h1 to h6 have same role of heading
        expect(pageHeading).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        }) // input element has default role of textbox
        expect(nameElement).toBeInTheDocument();


        const bioElement = screen.getByRole('textbox',{
            name:'bio'
        });
        expect(bioElement).toBeInTheDocument();


        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();


        const termsElemet = screen.getByRole('checkbox');
        expect(termsElemet).toBeInTheDocument()

    })
})