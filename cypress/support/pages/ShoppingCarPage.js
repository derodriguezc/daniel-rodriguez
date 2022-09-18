export class ShoppingCarPage{

    constructor(){
        this.clickPrecioTotal = '.css-n1d5pa > .chakra-button';
        this.precioTotal = '#price > b';
    }

    checkProductName(producto){
        cy.get(`[name="${producto}"]`).should('have.text', producto)
    }

    checkProductPrice(producto, priceProduct){
        cy.get(`[name="${producto}"]`).siblings("#productPrice").should('have.text', "$" + priceProduct)
    }

    showTotalPrice(){
        cy.get(this.clickPrecioTotal).contains('Show total price').click()
    }

    checkTotalPrice(priceTotal){
        cy.get(this.precioTotal).should('have.text', priceTotal)
    }

}