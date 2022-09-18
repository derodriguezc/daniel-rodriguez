export class ProductsPages {
    
    constructor (){
        this.cerrarModal = '#closeModal';
        this.irCarroCompra = '#goShoppingCart';
    }

    selectProducto(producto){
        cy.xpath(`//button[contains(@value,"${producto}")]`).click();
    }
    closeModal(){
        cy.get(this.cerrarModal).click();
    }

    goShoppingCart(){
        cy.get(this.irCarroCompra).click();
    }
}