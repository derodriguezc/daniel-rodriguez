import { CheckOutPage } from "../support/pages/CheckOutPage"
import { HomePage } from "../support/pages/HomePage"
import { ProductsPages } from "../support/pages/ProductsPage"
import { ReciptPage } from "../support/pages/ReciptPage"
import { ShoppingCarPage } from "../support/pages/ShoppingCarPage"

describe("Proyecto Pushng IT", () => {

    const checkOutPage = new CheckOutPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPages();
    const shoppingCarPage = new ShoppingCarPage();
    const reciptPage = new ReciptPage();

    let checkOut;
    let products;

    before("Data para el checkOut y productos", () => {
        cy.fixture("products").then(data => {
            products = data;
        })

        cy.fixture("checkOut").then(data => {
            checkOut = data;
        })

    })
    beforeEach("Ejecuta antes de cada test", () => {
        let username = "danielr"
        let password = "Daniel*1"
        let gender = "Male"
        let day = "20"
        let month = "september"
        let year = "1989"
        cy.request({
            url: "https://pushing-it-backend.herokuapp.com/api/register",
            method: "POST",
            body: {
                username: username,
                password: password,
                gender: gender,
                day: day,
                month: month,
                year: year
            }
        }).then(({ status }) => {
            expect(status).equal(200)
        }).then(() => {
            cy.request({
                url: "https://pushing-it-backend.herokuapp.com/api/login",
                method: "POST",
                body: {
                    username: username,
                    password: password
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((respuesta) => {
                window.localStorage.setItem('user', respuesta.body.user)
                window.localStorage.setItem('token', respuesta.body.token)
            })
        })
        cy.visit("/")
        homePage.clickOnlineShop();
    })

    it("Online Shop", () => {
        productsPage.selectProducto(products.nombreProductoUno);
        productsPage.closeModal();
        productsPage.selectProducto(products.nombreProductoDos);
        productsPage.closeModal();
        productsPage.goShoppingCart();
        shoppingCarPage.checkProductName(products.nombreProductoUno);
        shoppingCarPage.checkProductName(products.nombreProductoDos);
        shoppingCarPage.checkProductPrice(products.nombreProductoUno, products.precioProductoUno);
        shoppingCarPage.checkProductPrice(products.nombreProductoDos, products.precioProductoDos);
        shoppingCarPage.showTotalPrice();
        shoppingCarPage.checkTotalPrice(`${products.precioProductoUno + products.precioProductoDos}`);
        checkOutPage.clickCheckOutButton();
        checkOutPage.writeFirstName(checkOut.nombre);
        checkOutPage.writeLastName(checkOut.apellido);
        checkOutPage.writeCreditCard(checkOut.tarjeta);
        checkOutPage.clickPurchaseButton();
        reciptPage.waitCheck();
        reciptPage.checkUserName(checkOut.nombre + " " + checkOut.apellido);
        reciptPage.checkProductName(products.nombreProductoUno);
        reciptPage.checkProductName(products.nombreProductoDos);
        reciptPage.checkcrediCard(checkOut.tarjeta);
        reciptPage.checkTotalPrice(`${products.precioProductoUno + products.precioProductoDos}`);
        reciptPage.clickThankYouButton();

    })

    after("Eliminar usuario creado", () => {
        let userName = 'danielr'
        cy.request({
            url: "https://pushing-it-backend.herokuapp.com/api/deleteuser/" + userName,
            method: "DELETE",
        }).then((respuesta) => {
            expect(respuesta.status).equal(200)
        })
    })
})