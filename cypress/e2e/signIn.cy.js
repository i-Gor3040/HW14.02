/// <reference types="Cypress" />

describe('register spec', () => {
  it('register test', () => {
    cy.visit('https://automationteststore.com/');

    cy.contains('Login or register').click();

    cy.get('[title="Continue"]').click();

    cy.get('#AccountFrm_firstname').type('Jabba');
    cy.get('#AccountFrm_lastname').type('Hutt');
    cy.get('#AccountFrm_email').type('j.hutt@starwars.net');
    cy.get('#AccountFrm_telephone').type('2027428563');
    cy.get('#AccountFrm_fax').type('2027428564');

    cy.get('#AccountFrm_company').type('Jabba & Sons');
    cy.get('#AccountFrm_address_1').type('123 Nal Hutta Str.');
    cy.get('#AccountFrm_address_2').type('Unit 5');
    cy.get('#AccountFrm_city').type('Coruscant');
    cy.get('#AccountFrm_country_id').select('121');
    cy.get('#AccountFrm_zone_id').select('1877');
    cy.get('#AccountFrm_postcode').type('123456');

    cy.get('#AccountFrm_loginname').type('Jabba');
    cy.get('#AccountFrm_password').type('Test1ng$');
    cy.get('#AccountFrm_confirm').type('Test1ng$');

    cy.get('#AccountFrm_newsletter0').click();

    cy.get('#AccountFrm_agree').click();

    cy.get('[title="Continue"]').click();

    cy.url().should('include', 'account/success');
    cy.contains('h1', 'Your Account Has Been Created!').should('be.visible');
  })
})