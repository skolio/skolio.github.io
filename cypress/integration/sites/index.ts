/// <reference types="cypress" />
// @ts-check

describe('Index Page', function () {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should contain "Coming Soon"', function () {
        cy.get('body').get('h1').should('contain', 'Skolio - We’ve got your back.')
    });
});