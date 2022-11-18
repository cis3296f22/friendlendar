describe('Friendlendar', () => {
    beforeEach(() => {cy.visit('http://127.0.0.1/#/home')})


    //Web App successfully loads
    it('successfully loads', () => {
        cy.visit('http://127.0.0.1/#/home')
      })

    //Web app contains Friendlendar
    it('finds the content "friendlendar"', () => {    
        cy.contains('Friendlendar')
      })

    //Add a value to the database
    it ('tests adding to the database', () => {
        cy.request('/addNumber').its('body').should('include', 'Added number')
    })

    // //Test the submit button
    // it('submit button', () => {
    //     cy.get("input [type='submit']").click().parent()
    // })

    //User can toggle the calendar  
    it('user can toggle the calendar', () => {
        cy.get('div[class="buttonHolder"').children('button').click()
        cy.get('div[class="buttonHolder"').children('button').click()
    })

    //user can click on the calendar to open create event modal
    it('user can click calendar date', () => {
        cy.get('div').contains('1').click()
    })

    //event modal pops up when a user clicks on a date
    it('The event modal appears when a date is clicked', () => {
        cy.get('div').contains('1').click()
        cy.get('[data-cy="modal"]').should('be.visible')
    })

    //user can close modal popup
    it('The event modal can be closed by the user', () => {
        cy.get('div').contains('1').click()
        cy.get('[data-cy="close"]').click()
    })

    //user can enter and submit data into the event modal
    it('The event modal appears when a date is clicked', () => {
        cy.get('div').contains('1').click()
        cy.get('[data-cy="submit"]').click()
    })


})