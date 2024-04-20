/// < reference types = "cypress" />

import LoginPage from "../page-objects/pages/loginPage";

describe ('Login test without POM', () => {

    beforeEach (() =>{
        LoginPage.open();
        

    })

    it.only('Login with incorrect login and password' , () => {
        LoginPage.login(userData.userNames.incorrectUser,userData.passwords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
       

    })

    it ('Login without login and password',()=> {
        LoginPage.loginButton.click();
        cy.get ('[data-test= "error"]').should('have.text','Epic sadface: Username is required');


    })

    it ('Login to locked user', () => {
           LoginPage.login('locked_out_user','secret_sauce');
            cy.get ('[data-test= "error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.');
    

    })

    it ('Login with correct login and password',() => {
            LoginPage.login('standard_user','secret_sauce');
            cy.url().should('eq',"https://www.saucedemo.com/inventory.html");

    })


    
    
    


})

