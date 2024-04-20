/// <reference types  = 'cypress'/>

import BasePage from "./BasePage";
import LoginPage from "./loginPage";
import userData from "../../../fixtures/userData.json";
import InventoryPage from "./InventoryPage";


class ItemPage extends BasePage{

   
        get picturesItem (){
            return cy.get ('[data-test=item-sauce-labs-backpack-img]');
        }
        get descriptionItem (){
            return cy.get ('[data-test=inventory-item-desc]');

        }
        get priceItem (){
            return cy.get ('[data-test=inventory-item-price]');
        }
        get nameItem (){
            return cy.get ('[data-test=inventory-item-name]');
        }
        get remove (){
            return cy.get ('[data-test="remove"]');
        }
        get addToCart (){
            return cy.get ('[data-test="add-to-cart"]');
        }

        open (){
            super.open("")
            LoginPage.login(userData.userName.correctUser,userData.password.correctPassword );
            InventoryPage.ollItems.contains('Sauce Labs Backpack').click();
        }
       
   





}
export default new ItemPage();


