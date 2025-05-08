//header categoryFuntion

async function fetchinCategoriesDatas() {
    return fetch("https://fakestoreapi.com/products/categories", {
        method: "GET"
    })

}

async function fetchedData() {
    var select = document.getElementById("categorySelect")

    var datas = await fetchinCategoriesDatas()
    var allDatas = await datas.json()
    allDatas.forEach(element => {
        var option = document.createElement("option")
        option.value = element
        option.textContent = element
        select.appendChild(option)
    })

}
fetchedData()

function navigateToCategory() {
    const select = document.getElementById("categorySelect");
    const selectedValue = select.value;
    if (selectedValue) {
        window.location.href = `../pages/category.html?category=${selectedValue}`;

    }
}

var totalCartCount = 0
var cartJsonData = JSON.parse(localStorage.getItem("cart"))
if (cartJsonData) {

    cartJsonData.forEach(function (data) {
        totalCartCount++
        document.getElementById("cartCount").textContent = totalCartCount
    })

}

// --------------------------------------------------------




// // Create main cartProduct div
// const cartProduct = document.createElement("div");
// cartProduct.className = "cartProduct";

// // ==== Product Image Div ====
// const productImage = document.createElement("div");
// productImage.className = "productImage";

// const img = document.createElement("img");
// img.src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
// img.alt = "";

// productImage.appendChild(img);

// // ==== Details Div ====
// const details = document.createElement("div");
// details.className = "details";

// // Title
// const title = document.createElement("h3");
// title.className = "title";
// title.textContent = "This Is Tigtle";

// // Price
// const price = document.createElement("h2");
// price.className = "price";
// price.textContent = "$34.00/-";

// // Quantity
// const quantity = document.createElement("div");
// quantity.className = "quantity";

// const minus = document.createElement("span");
// minus.id = "minus";
// minus.textContent = "➖";

// const value = document.createElement("span");
// value.id = "value";
// value.textContent = "5";

// const plus = document.createElement("span");
// plus.id = "plus";
// plus.textContent = "➕";

// quantity.appendChild(minus);
// quantity.appendChild(value);
// quantity.appendChild(plus);

// // Total Price Div
// const totalPriceDiv = document.createElement("div");
// totalPriceDiv.className = "totalPriceDiv";

// const totalPrice = document.createElement("h3");
// totalPrice.className = "totalPrice";
// totalPrice.textContent = "Total price :";

// const totalAmount = document.createElement("h3");
// totalAmount.className = "totalAmout";
// totalAmount.textContent = "45879";

// totalPriceDiv.appendChild(totalPrice);
// totalPriceDiv.appendChild(totalAmount);

// // Append all to details
// details.appendChild(title);
// details.appendChild(price);
// details.appendChild(quantity);
// details.appendChild(totalPriceDiv);

// // Append image and details to cartProduct
// cartProduct.appendChild(productImage);
// cartProduct.appendChild(details);

// // Append cartProduct to cartProductsDiv
// var cartProductsDiv=document.querySelector(".cartProductsDiv")
// cartProductsDiv.appendChild(cartProduct);


var cartdatas=JSON.parse(localStorage.getItem("cart"))
console.log(cartdatas)


