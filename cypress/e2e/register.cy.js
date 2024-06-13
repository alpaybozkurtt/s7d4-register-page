import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  beforeEach(()=>{
    cy.visit("/");
  })
  describe('Error Messages', () => {
    it('name input throws error for 2 chars', () => {
      //Act
      cy.get(`[data-cy="ad-input"]`).type("em");
      //Assert
      cy.contains(errorMessages.ad);
    });
    it('Surname input throws error for 2 chars', () => {
      //Act
      cy.get(`[data-cy="soyad-input"]`).type("şa");
      //Assert
      cy.contains(errorMessages.soyad);
    });
    it('Email input throws error for emre@wit.', () => {
      //Act
      cy.get(`[data-cy="email-input"]`).type("emre@wit.");
      //Assert
      cy.contains(errorMessages.email);
    });
    it('Password input throws error for 1234', () => {
      //Act
      cy.get(`[data-cy="password-input"]`).type("1234");
      //Assert
      cy.contains(errorMessages.password);
    });
    it('button is disabled for unvalidated inputs.', () => {
      //Act
      cy.get(`[data-cy="password-input"]`).type("1234");
      //Assert
      cy.get(`[data-cy="submit-button"]`).should("be.disabled");
    });
  }) 
  describe('Form inputs Validated', () => {
    it('button enabled for validated inputs', () => {
      //Act
      cy.get(`[data-cy="ad-input"]`).type("Emre");
      cy.get(`[data-cy="soyad-input"]`).type("Şahiner");
      cy.get(`[data-cy="email-input"]`).type("emre@wit.com.tr");
      cy.get(`[data-cy="password-input"]`).type("1234Aa**");
      //Assert
      cy.get(`[data-cy="submit-button"]`).should("be.enabled");
    });
    it('submits form on validated inputs', () => {
      //Act
      cy.get(`[data-cy="ad-input"]`).type("Emre");
      cy.get(`[data-cy="soyad-input"]`).type("Şahiner");
      cy.get(`[data-cy="email-input"]`).type("emre@wit.com.tr");
      cy.get(`[data-cy="password-input"]`).type("1234Aa**");
      cy.get(`[data-cy="submit-button"]`).click();
      //Assert
      cy.get(`[data-cy="response-message"]`).should("be-.visible");

    });
  }); 
})

