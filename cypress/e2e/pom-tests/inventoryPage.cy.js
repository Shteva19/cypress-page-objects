/// <reference types  = 'cypress'/>

import InventoryPage from "../page-objects/pages/InventoryPage";
describe("work with InventoryPage",()=>{

    beforeEach(() =>{
        InventoryPage.open();
        


    })

    it("checking the correct location", ()=> {

        InventoryPage.burgerMenu.should('be.visible');
        InventoryPage.dropDown.should('be.visible');
        InventoryPage.shopCart.should('be.visible');
    })

    it ('recount options', () =>{
    InventoryPage.dropDown.find('option').should('have.length',4)
    
    }) 
    it ('check url for shop cart', () =>{
        InventoryPage.shopCart.click().url().should("eq","https://www.saucedemo.com/cart.html")

    })
    it ('Item Page open', () =>{

        InventoryPage.ollItems.contains('Sauce Labs Backpack').click();
    })


})
