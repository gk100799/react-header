import { } from "cypress";

describe('working of header', () => {

    it('changes routes', () => {

        cy.visit('http://localhost:3000')
        
        cy.waitForReact(1000, '#root')

        cy.get('.nav-link[data-testid="My Account"]')
            .click()
        
        cy.url().should('include', '/account')

        cy.get('.nav-link[data-testid="Home"]')
            .click()
        
        cy.url().should('include', '/')
    })

    it('changes page content upon navigation', () => {

        cy.visit('http://localhost:3000')

        cy.waitForReact(1000, '#root')

        cy.get('main > h1').contains('This is Home page.')
        
        cy.get('.nav-link[data-testid="My Account"]')
        .click()
        
        cy.get('main > h1').contains('This is My Accounts page.')
        
    })

    it('changes the active class of nav-links upon navigation', () => {

        cy.visit('http://localhost:3000')

        cy.waitForReact(1000, '#root')

        cy.get('.nav-link[data-testid="My Account"]')
            .click()
        
        cy.get('.nav-link[data-testid="My Account"]')
            .should('have.class', 'active')
        
        cy.get('.nav-link[data-testid="Home"]')
            .click()

        cy.get('.nav-link[data-testid="Home"]')
            .should('have.class', 'active')
    })

    it('clicking logo takes to home', () => {
        cy.visit('http://localhost:3000')

        cy.waitForReact(1000, '#root')

        cy.get('.nav-link[data-testid="My Account"]')
            .click()

        cy.url().should('include', '/account')

        cy.get('.masthead-brand')
            .click()

        cy.url().should('include', '/')

        cy.get('main > h1').contains('This is Home page.')
    }) 
})