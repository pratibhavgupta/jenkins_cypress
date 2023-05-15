///<reference types='cypress'/>
///<reference types='@cypress/xpath'/>



// import xpath from "@cypress/xpath";

describe('Mouse Actions', () => {
    it('mouse hover', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#mousehover').invoke('show');

        cy.contains('Top').click({force:true});

        cy.get('#mousehover').trigger('mouseover');

        cy.contains('Top').click({force:true});

    });

});