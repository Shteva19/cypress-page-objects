/// <reference types  = 'cypress'/>

import ItemPage from "../page-objects/pages/ItemPage";

describe("work with InventoryPage",()=>{
beforeEach(() =>{
    ItemPage.open()
})
    it ('checking the presence of item description elements',() =>{
        ItemPage.picturesItem.should('be.visible');
        ItemPage.descriptionItem.should('be.visible');
        ItemPage.priceItem.should('be.visible');
        ItemPage.nameItem.should('be.visible');



    })
    it ('remote button check',() =>{
        ItemPage.addToCart.click()

        ItemPage.remove.should('be.visible')

    })
    it ('add to cart button',()  =>{
        ItemPage.addToCart.click();
        ItemPage.remove.click();
        ItemPage.addToCart.should('be.visible')

    })

})








