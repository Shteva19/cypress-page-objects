/// <reference types  = 'cypress'/>

import BasePage from "./BasePage";
class LoginPage extends BasePage{

    
        get userNameField(){
            return cy.get ('[data-test="username"]')
        }
        get userPasswordField(){
            return cy.get ('[data-test="password"]')
        }
        get loginButton(){
            return cy.get ('[data-test="login-button"]')
        }
        get errorMessage(){
            return cy.get ('[data-test="error"]')
        }

        open(){
            super.open('');
        }
        login(userName,password){
            this.userNameField.type(userName);
            this.userPasswordField.type(password);
            this.loginButton.click();
        }

        clickLoginButton(){
this.loginButton.click();

        }

        verifyErrorMessage(message){

            this.errorMessage.should('have.text',message);
        }
    }

    export default new LoginPage();


