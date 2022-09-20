export class ReciptPage {
    constructor(){
        this.elementName = '#name'
        this.elementCard = '#creditCard'
        this.elementPrice = '#totalPrice'
        this.tankYouButton = '//button[@type="button"][contains(.,"Thank you")]'
    }

    waitCheck(){
        cy.get("[role='progressbar']", {timeout:10000}).should("not.exist")
    }
    checkUserName(userName){
        cy.get(this.elementName).should('include.text' , userName)
    }

    checkProductName(producto){
        cy.get(`[id="${producto}"]`).should('have.text', producto)
    }

    checkcrediCard(crediCardNumber){
        cy.get(this.elementCard).should('have.text', crediCardNumber)
    }

    checkTotalPrice(priceTotal){
        cy.get(this.elementPrice).should('include.text' , priceTotal)
    }

    clickThankYouButton(){
        cy.xpath(this.tankYouButton).click()
    }

}