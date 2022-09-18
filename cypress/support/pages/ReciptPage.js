export class ReciptPage {
    constructor(){
        this.elementName = '#name'
        this.elementCard = '#creditCard'
        this.elementPrice = '#totalPrice'
        this.tankYouButton = '//button[@type="button"][contains(.,"Thank you")]'
    }

    waitCheck(){
        cy.wait(10000)
    }
    checkUserName(userName){
        cy.get(this.elementName).contains(userName)
    }

    checkProductName(producto){
        cy.get(`[id="${producto}"]`).should('have.text', producto)
    }

    checkcrediCard(crediCardNumber){
        cy.get(this.elementCard).should('have.text', crediCardNumber)
    }

    checkTotalPrice(priceTotal){
        cy.get(this.elementPrice).contains(priceTotal)
    }

    clickThankYouButton(){
        cy.xpath(this.tankYouButton).click()
    }

}