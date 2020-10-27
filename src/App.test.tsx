import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup);

const mockSomeConstantValueGetter = jest.fn();
jest.mock('./components/Constants.tsx', () => ({
    get tabs() {
        return mockSomeConstantValueGetter();
    },
}));

it("renders App.tsx without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Router><App /></Router>, div)
})

it("matches snapshot", () => {
    const mockTabs = [
        {
            name: 'Home',
            path: '/',
            props: {
                coverHeading: 'This is Home page.',
                coverContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni illum molestiae reiciendis et quis libero porro neque suscipit beatae sunt facilis ullam corrupti temporibus voluptatibus, facere, quod corporis similique?',
                buttonTitle: 'Subscribe'
            }
        },
        {
            name: 'My Profile',
            path: '/profile',
            props: {
                coverHeading: 'This is My Profile page.',
                coverContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus mollitia, quae nihil a eius, quisquam quaerat deserunt obcaecati dolore earum ipsam ratione nobis culpa sequi! Obcaecati ab rerum alias nulla!',
                buttonTitle: 'Learn more'
            }
        }
    ]
    mockSomeConstantValueGetter.mockReturnValue(mockTabs);
    const tree = renderer.create(<Router><App /></Router>)
    expect(tree).toMatchSnapshot();
})