export class HomePage {
    
    constructor(){
        this.onlineShop = '//a[contains(.,"Online Shop")]'
    }

    clickOnlineShop(){
        cy.xpath(this.onlineShop).click();
    }

}