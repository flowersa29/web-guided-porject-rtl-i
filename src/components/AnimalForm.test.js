import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'

import AnimalForm from './AnimalForm'

test('renders AnimalForm', ()=>{
    render(<AnimalForm/>)
})

test('user can fill ot amd submit the form', async ()=>{
    render(<AnimalForm/>)

    const speciesInput=screen.getByLabelText(/species/i)
    const ageInput = screen.getAllByLabelText(/age/i)
    const notesInput = screen.getByLabelText(/notes/i)

    // console.log(speciesInput)

    // fill out form(top to bottom)
      fireEvent.change(speciesInput, {target: {value: 'dog'}});
      fireEvent.change(age, {target: {value: '11'}});
      fireEvent.change(notesInput, {target: {value: 'woof'}});

      //assert the forms have the values
      expect(speciesInput).toHaveValue('dog')

      //submit form

      const button=screen.getByRole("button", {name:/submit!/i})
      fireEvent.click(button)

      //assert the animal has been added to list
       const newAnimal=screen.findByText(/dog/i)
       expect(newAnimal).toBeTruthy()

       
      









})
