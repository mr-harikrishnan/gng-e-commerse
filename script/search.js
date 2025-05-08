//header and category function
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

// ---------------------------------------------------------------------

var totalCartCount = 0
var cartJsonData = JSON.parse(localStorage.getItem("cart"))
if (cartJsonData) {

    cartJsonData.forEach(function (data) {
        totalCartCount += data.count
        document.getElementById("cartCount").textContent = totalCartCount
    })

}


var input = document.getElementById("search")

input.addEventListener("input", () => {

    var value = input.value.toLowerCase()

    var encodedValue = encodeURIComponent(value)
    var newUrl = `${window.location.pathname}?search=${encodedValue}`
    window.history.replaceState(null, "", newUrl);


    var params = new URLSearchParams(window.location.search)
    var value = params.get("search")

    async function fetchDatas() {
        return fetch("https://fakestoreapi.com/products", {
            method: "GET"
        })

    }

    async function getDatas() {
        try {
            var datas = await fetchDatas()
            var alldatas = await datas.json()

            var params = new URLSearchParams(window.location.search)
            var value = params.get("search")

            var allProducts = document.getElementById("allProducts")

            allProducts.innerHTML = "";
            if (!value.trim()) {
                return;
            }
            alldatas.forEach(product => {


                if (product.title.toLowerCase().includes(value)) {

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

                    allProducts.appendChild(productDiv);

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
                    addToCart.setAttribute("id", `${product.id}`)

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
                    // ------------------------ADD TO CART FUCTION-------------------------------------------------------------

                   
                    addToCart.onclick = function () {
                        var divId = this.id
                        async function fetchinDdataById() {
                            return fetch(`https://fakestoreapi.com/products/${divId}`, {
                                method: "GET"
                            })
                        }
                        async function getDatas() {
                            try {
                                var fetchdata = await fetchinDdataById()
                                var data = await fetchdata.json()
                                var cart = JSON.parse(localStorage.getItem("cart")) || []
                                var existingData = cart.find(item => item.id === data.id)
                                if (existingData) {
                                    existingData.count += 1
                                }
                                else {
                                    data.count = 1
                                    cart.push(data)
                                }
                                localStorage.setItem("cart", JSON.stringify(cart))
                                var totalCartCount = 0
                                cart.forEach(function (data) {
                                    totalCartCount += data.count
                                })
                                document.getElementById("cartCount").textContent = totalCartCount
                            } catch (error) {
                                console.log(error)
                            }
                        }
                        getDatas()
                    }
                   

                    // ---------------------------------------------------------
                    // Append to the desired parent element
                    productDiv.appendChild(addToCart);

                }
            });

        } catch (error) {
            console.log(error)
        }
    }
    getDatas()
})


