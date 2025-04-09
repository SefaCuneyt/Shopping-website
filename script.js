let loggedInUser = null;
let shoppingCart = [];

function login() {
    const usernameInput = document.getElementById("username");
    loggedInUser = usernameInput.value;
    alert("Hoş geldiniz, " + loggedInUser + "!");
}

function addToCart(productId, price) {
    if (!loggedInUser) {
        alert("Önce giriş yapmalısınız!");
        return;
    }

    shoppingCart.push({ id: productId, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartItemsContainer.innerHTML = "";

    let totalPrice = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        const productElement = document.createElement("p");
        productElement.textContent = "Ürün ID: " + item.id + " - Fiyat: " + item.price + "₺";
        cartItemsContainer.appendChild(productElement);
        totalPrice += item.price;
    }

    totalPriceElement.textContent = "Toplam Fiyat: " + totalPrice + "₺";
}

function clearCart() {
    shoppingCart = [];
    updateCart();
}
