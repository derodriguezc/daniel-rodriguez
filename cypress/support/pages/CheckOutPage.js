export class CheckOutPage {

    constructor (){
        this.inputFirstname = '#FirstName'
        this.inputLastName = '#lastName'
        this.inputCreditCard = '#cardNumber'
        this.purchaseButton = '.css-13zsa'
    }

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