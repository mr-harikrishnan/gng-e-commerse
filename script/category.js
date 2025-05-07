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

// -------------------------------------------

var params=new URLSearchParams(window.location.search)
var value=params.get("category")
console.log(value)
// --------------------------------


var allproducts = document.getElementById("allProducts")
console.log(allproducts)

async function fetchingData() {
    
    return fetch(`https://fakestoreapi.com/products/category/${value}`, {
        method: "GET"
    })

}

async function getAlldatas() {
    var datas = await fetchingData()
    var allDatas = await datas.json()
    allDatas.forEach(product => {

        var productDiv = document.createElement("div");

        productDiv.style.border = "1px solid black";
        productDiv.style.height = "510px";
        productDiv.style.width = "300px";
        productDiv.style.margin = "20px";
        productDiv.style.borderRadius = "10px";
        productDiv.style.display = "flex";
        productDiv.style.alignItems = "center";
        productDiv.style.flexDirection = "column";
        productDiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        productDiv.style.transition = "transform 0.2s ease"; 


        productDiv.addEventListener("mouseover", function () {
            productDiv.style.transform = "scale(1.01)";
        });
        productDiv.addEventListener("mouseout", function () {
            productDiv.style.transform = "scale(1)";
        });
       
        allproducts.appendChild(productDiv);

        var imageDiv = document.createElement("div")
        imageDiv.style.height = "270px"
        imageDiv.style.width = "270px"
        imageDiv.style.marginTop = "12px"
        imageDiv.style.display = "flex"
        imageDiv.style.justifyContent = "center"
        imageDiv.style.borderRadius = "10px"
        imageDiv.style.alignItems = "center"
        imageDiv.onclick = function () {
            window.location.href = `../pages/productDetails.html?id=${product.id}`;
        };
        productDiv.appendChild(imageDiv)

        var productImage = document.createElement("img")
        productImage.style.borderRadius = "10px"
        productImage.style.height = "100%"
        productImage.style.width = "100%"
        productImage.style.cursor = "pointer";
        productImage.src = `${product.image}`
        imageDiv.appendChild(productImage)

        var titleDiv = document.createElement("div")
        titleDiv.style.marginTop = "10px"
        titleDiv.style.width = "270px"
        productDiv.appendChild(titleDiv)

        var title = document.createElement("p")
        title.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        title.textContent = `${product.title}`
        titleDiv.appendChild(title)

        var price = document.createElement("h2")
        price.style.marginTop = "10px"
        price.style.width = "270px"
        price.style.height = "25px"
        price.style.color = "green"
        price.textContent = `₹ ${product.price}`
        productDiv.appendChild(price)

        

        var rating = document.createElement("div")
        rating.style.marginTop = "10px"
        rating.style.width = "270px"
        rating.style.height = "25px"
        rating.style.fontSize = "16px"
        rating.style.opacity = "0.7"
        rating.style.fontFamily = "'Times New Roman', Times, serif"
        rating.textContent = `Rating ⭐ ${product.rating.rate}`
        productDiv.appendChild(rating)

        var addToCart = document.createElement("div");
        addToCart.textContent = "ADD TO CART";
        addToCart.setAttribute("id",`${product.id}`)

        // Applying updated styles
        addToCart.style.marginTop = "30px";
        addToCart.style.marginBottom = "20px";
        addToCart.style.backgroundColor = "#0d6efd";
        addToCart.style.color = "white";
        addToCart.style.fontSize = "18px";
        addToCart.style.fontWeight = "bold";
        addToCart.style.textAlign = "center";
        addToCart.style.padding = "12px 0";
        addToCart.style.borderRadius = "8px";
        addToCart.style.cursor = "pointer";
        addToCart.style.transition = "background-color 0.3s ease, transform 0.2s ease";
        addToCart.style.boxShadow = "0 4px 12px rgba(13, 110, 253, 0.3)";
        addToCart.style.width = "150px";
        addToCart.style.border = "none"; // Removed the black border for a cleaner look
        addToCart.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

        // Append to the desired parent element
        productDiv.appendChild(addToCart);
    })


}
getAlldatas()
