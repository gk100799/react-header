import React from 'react';
import ReactDOM from 'react-dom'
import Cover from '../Cover'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("renders Cover without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Cover />, div)
})

it("renders Cover correctly", () => {
    const props = {
        coverHeading: 'This is Home page.',
        coverContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni illum molestiae reiciendis et quis libero porro neque suscipit beatae sunt facilis ullam corrupti temporibus voluptatibus, facere, quod corporis similique?',
        buttonTitle: 'Subscribe'
    }
    const { getByTestId } = render(<Cover {...props} />)
    expect(getByTestId("coverHeading")).toHaveTextContent(props.coverHeading)
    expect(getByTestId("coverContent")).toHaveTextContent(props.coverContent)
    expect(getByTestId("button")).toHaveTextContent(props.buttonTitle)
})

it("matches snapshot", () => {
    const props = {
        coverHeading: 'This is Home page.',
        coverContent: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni illum molestiae reiciendis et quis libero porro neque suscipit beatae sunt facilis ullam corrupti temporibus voluptatibus, facere, quod corporis similique? ',
        buttonTitle: 'Subscribe'
    }
    const tree = renderer.create(<Cover {...props} />)
    expect(tree).toMatchSnapshot();
})

