// import logo from './logo.png'

interface Tabs {
    name: string,
    path: string,
    props: CoverProps
}

export interface CoverProps {
    coverHeading?: string,
    coverContent?: string,
    buttonTitle?: string,
}

// export const logo: File = logo;
export const logo: string = "Logo";

export const tabs: Tabs[] = [
    {
        name: 'Home',
        path: '/',
        props: {
            coverHeading: 'This is Home page.',
            coverContent: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni illum molestiae reiciendis et quis libero porro neque suscipit beatae sunt facilis ullam corrupti temporibus voluptatibus, facere, quod corporis similique? ',
            buttonTitle: 'Subscribe'
        }
    },
    {
        name: 'My Account',
        path: '/account',
        props: {
            coverHeading: 'This is My Accounts page.',
            coverContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus mollitia, quae nihil a eius, quisquam quaerat deserunt obcaecati dolore earum ipsam ratione nobis culpa sequi! Obcaecati ab rerum alias nulla!',
            buttonTitle: 'Learn more'
        }
    }
];