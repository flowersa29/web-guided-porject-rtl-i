import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders App without errors", () => {
  render(<App />)
})
test("renders the app header", () => {
  render(<App />)

  const header = screen.getByText(/add new animal/i)
  // 
  expect(header).toBeInTheDocument()

  expect(header).toBeTruthy()
  expect(header).toHaveTextContent(/add new animal/i)
  expect(header).not.toBeFalsy()
  expect(header).not.toHaveTextContent(/elections are fun/i)
})
