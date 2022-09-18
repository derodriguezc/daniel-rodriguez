export class CheckOutPage {

    constructor (){
        this.checkoutButton = "//button[@type='button'][contains(.,'Go to Checkout')]"
        this.inputFirstname = '#FirstName'
        this.inputLastName = '#lastName'
        this.inputCreditCard = '#cardNumber'
        this.purchaseButton = '.css-13zsa'
    }

    clickCheckOutButton(){
        cy.xpath(this.checkoutButton).click();
    };

    writeFirstName(firstName){
        cy.get(this.inputFirstname).type(firstName);
    };

    writeLastName(lastName) {
        cy.get(this.inputLastName).type(lastName);
    };

    writeCreditCard(creditCard) {
        cy.get(this.inputCreditCard).type(creditCard);
    };

    clickPurchaseButton(){
        cy.get(this.purchaseButton).click()
    };
}