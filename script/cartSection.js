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





// const cartProduct = document.createElement("div");
// cartProduct.className = "cartProduct";

// var cartProductsDiv=document.querySelector(".cartProductsDiv")
// cartProductsDiv.appendChild(cartProduct);


// const productImage = document.createElement("div");
// productImage.className = "productImage";
// cartProduct.appendChild(productImage);

// const img = document.createElement("img");
// img.src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
// img.alt = "";

// productImage.appendChild(img);


// const details = document.createElement("div");
// details.className = "details";
// cartProduct.appendChild(details);

// const title = document.createElement("h3");
// title.className = "title";
// title.textContent = "This Is Tigtle";
// details.appendChild(title);

// const price = document.createElement("h2");
// price.className = "price";
// price.textContent = 340;
// details.appendChild(price);

// const quantity = document.createElement("div");
// quantity.className = "quantity";
// details.appendChild(quantity);

// const minus = document.createElement("span");
// minus.id = "minus";
// minus.textContent = "➖";
// minus.onclick=function(){
//     if(value.textContent>0){
//         value.textContent--
//         totalAmount.textContent = (price.textContent)*(value.textContent)
//     }
// }
// quantity.appendChild(minus);

// const value = document.createElement("span");
// value.id = "value";
// value.textContent = 1;
// quantity.appendChild(value);

// const plus = document.createElement("span");
// plus.id = "plus";
// plus.textContent = "➕";
// plus.onclick=function(){
// value.textContent ++
// totalAmount.textContent = (price.textContent)*(value.textContent)

// }
// quantity.appendChild(plus);


// const totalPriceDiv = document.createElement("div");
// totalPriceDiv.className = "totalPriceDiv";
// details.appendChild(totalPriceDiv);

// const totalPrice = document.createElement("h3");
// totalPrice.className = "totalPrice";
// totalPrice.textContent = "Total price :";
// totalPriceDiv.appendChild(totalPrice);

// const totalAmount = document.createElement("h3");
// totalAmount.className = "totalAmout";
// totalAmount.textContent = (price.textContent)*(value.textContent)
// totalPriceDiv.appendChild(totalAmount);
// --------------------------------------------------------
var finalAmount = 0
var final = document.getElementById("finalTotalAmount")
document.body.appendChild(final)

// ----------------------------------------------------------
var cartData = JSON.parse(localStorage.getItem("cart"))


cartData.forEach(function (data) {

    const cartProduct = document.createElement("div");
    cartProduct.className = "cartProduct";

    var cartProductsDiv = document.querySelector(".cartProductsDiv")
    cartProductsDiv.appendChild(cartProduct);


    const productImage = document.createElement("div");
    productImage.className = "productImage";
    cartProduct.appendChild(productImage);

    const img = document.createElement("img");
    img.src = `${data.image}`;
    img.alt = "";

    productImage.appendChild(img);


    const details = document.createElement("div");
    details.className = "details";
    cartProduct.appendChild(details);

    const title = document.createElement("h3");
    title.className = "title";
    title.textContent = `${data.title}`;
    details.appendChild(title);

    const price = document.createElement("h2");
    price.className = "price";
    price.textContent = `₹ ${data.price} /-`;
    details.appendChild(price);

    const quantity = document.createElement("div");
    quantity.className = "quantity";
    details.appendChild(quantity);



    const minus = document.createElement("span");
    minus.id = "minus";
    minus.textContent = "➖";
    minus.onclick = function () {
        if (value.textContent > 0) {
            var oldTotal = parseFloat(totalAmount.textContent);
        value.textContent--;
        var newTotal = parseFloat(price.textContent.replace(/[^\d.]/g, "")) * parseInt(value.textContent);
        totalAmount.textContent = newTotal;
        finalAmount -= (oldTotal - newTotal);
        final.textContent = finalAmount.toFixed(2)
        }
    }
    quantity.appendChild(minus);

    const value = document.createElement("span");
    value.id = "value";
    value.textContent = 1;
    quantity.appendChild(value);

    const plus = document.createElement("span");
    plus.id = "plus";
    plus.textContent = "➕";
    plus.onclick = function () {
        var oldTotal = parseFloat(totalAmount.textContent);
        value.textContent++;
        var newTotal = parseFloat(price.textContent.replace(/[^\d.]/g, "")) * parseInt(value.textContent);
        totalAmount.textContent = newTotal;
        finalAmount += (newTotal - oldTotal);
        final.textContent = finalAmount.toFixed(2)

    }
    quantity.appendChild(plus);


    const totalPriceDiv = document.createElement("div");
    totalPriceDiv.className = "totalPriceDiv";
    details.appendChild(totalPriceDiv);

    const totalPrice = document.createElement("h3");
    totalPrice.className = "totalPrice";
    totalPrice.textContent = "Total price :";
    totalPriceDiv.appendChild(totalPrice);

    const totalAmount = document.createElement("h3");
    totalAmount.className = "totalAmout";
    var calCulateAmout = (parseFloat(price.textContent.replace(/[^\d.]/g, ""))) * (value.textContent)
    totalAmount.textContent = calCulateAmout
    finalAmount += calCulateAmout
    final.textContent = finalAmount.toFixed(2)

    totalPriceDiv.appendChild(totalAmount);




})



