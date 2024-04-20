/// <reference types  = 'cypress'/>
    
    import BasePage from "./BasePage";
    import LoginPage from "./loginPage";
    import userData from "../../../fixtures/userData.json";

    class InventoryPage extends BasePage{
        get burgerMenu (){
            return cy.get ('button#react-burger-menu-btn')
        }
        get dropDown(){

            return cy.get ('select.product_sort_container');
        }

        get shopCart(){

            return cy.get ('[data-test="shopping-cart-link"]');
        }
        
        get ollItems (){

            return cy.get ('[data-test="inventory-item-name"]')

        }


        open (){
            super.open("")
            LoginPage.login(userData.userName.correctUser,userData.password.correctPassword );
        }
       

        





    } 
    export default new InventoryPage();
