import React from 'react';
import ReactDOM from 'react-dom'
import Header from '../Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { tabs, logo } from '../Constants'

afterEach(cleanup);

it("renders Header without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Router><Header /></Router>, div)
})

it("renders Header correctly without modifying the constants file", () => {
    // console.log(logo)
    const { getByTestId } = render(<Router><Header /></Router>)
    expect(getByTestId(tabs[0].name)).toHaveTextContent(tabs[0].name)
    expect(getByTestId("logo")).toHaveTextContent(logo)
})

it("matches snapshot", () => {
    const tree = renderer.create(<Router><Header /></Router>)
    expect(tree).toMatchSnapshot();
})