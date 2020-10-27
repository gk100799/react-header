import React from 'react';
import Header from '../Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup);

const mockSomeConstantValueGetter = jest.fn();

jest.mock('../Constants.tsx', () => ({
    get tabs() {
        return mockSomeConstantValueGetter();
    },
}));

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

it("renders Header correctly with modifying the constants file", () => {
    mockSomeConstantValueGetter.mockReturnValue(mockTabs);
    const { getByTestId } = render(<Router><Header /></Router>)
    expect(getByTestId(mockTabs[1].name)).toHaveTextContent(mockTabs[1].name)
})

it("matches snapshot", () => {
    mockSomeConstantValueGetter.mockReturnValue(mockTabs);
    const tree = renderer.create(<Router><Header /></Router>)
    expect(tree).toMatchSnapshot();
})