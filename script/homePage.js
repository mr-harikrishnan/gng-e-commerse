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
        option.value = "./pages/category.html"
        option.textContent = element
        select.appendChild(option)
    })

}
fetchedData()

function navigateToCategory() {
    const select = document.getElementById("categorySelect");
    const textContent = this.textContent
    console.log(textContent)
    const selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;

    }
}

// ---------------------
var allproducts = document.getElementById("allProducts")

async function fetchingData() {
    return fetch("https://fakestoreapi.com/products", {
        method: "GET"
    })

}

async function getAlldatas() {
    var datas = await fetchingData()
    var allDatas = await datas.json()
    allDatas.forEach(product => {
        var productDiv = document.createElement("div")
        productDiv.style.border="1px solid black"
        productDiv.style.height="550px"
        productDiv.style.width="300px"
        productDiv.style.margin="20px"
        productDiv.style.borderRadius="10px"
        productDiv.style.display="flex"
        productDiv.style.alignItems="center"
        productDiv.style.flexDirection="column"
        productDiv.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        allproducts.appendChild(productDiv)

        var imageDiv = document.createElement("div")
        imageDiv.style.height="270px"
        imageDiv.style.width="270px"
        imageDiv.style.marginTop="12px"
        imageDiv.style.display="flex"
        imageDiv.style.justifyContent="center"
        imageDiv.style.borderRadius="10px"
        imageDiv.style.alignItems="center"
        productDiv.appendChild(imageDiv)

        var productImage = document.createElement("img")
        productImage.style.borderRadius="10px"
        productImage.style.height="100%"
        productImage.style.width="100%"
        productImage.src = `${product.image}`
        imageDiv.appendChild(productImage)

        var titleDiv = document.createElement("div")
        titleDiv.style.marginTop="10px"
        titleDiv.style.width="270px"
        productDiv.appendChild(titleDiv)

        var title = document.createElement("p")
        title.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        title.textContent = `${product.title}`
        titleDiv.appendChild(title)

        var price = document.createElement("h2")
        price.style.marginTop="10px"
        price.style.width="270px"
        price.style.height="25px"
        price.style.color="green"
        price.textContent = `₹ ${product.price}`
        productDiv.appendChild(price)

        var descp = document.createElement("p");
        descp.style.marginTop="10px"
        descp.style.width="270px"
        descp.style.height="75px"
        descp.style.overflow="auto"
        descp.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        descp.style.opacity="0.7"

        var span = document.createElement("span");
        span.textContent = "Description : ";
        descp.appendChild(span);
        descp.appendChild(document.createTextNode(product.description))
        productDiv.appendChild(descp);

        var rating=document.createElement("div")
        rating.style.marginTop="10px"
        rating.style.width="270px"
        rating.style.height="25px"
        rating.style.fontSize="16px"
        rating.style.opacity="0.7"
        rating.style.fontFamily="'Times New Roman', Times, serif"
        rating.textContent=`Rating ⭐ ${product.rating.rate}`
        productDiv.appendChild(rating)

        var addToCart=document.createElement("div")
        addToCart.style.paddingTop="2px"
        addToCart.style.marginTop="10px"
        addToCart.style.textAlign="center"
        addToCart.style.width="150px"
        addToCart.style.height="30px"
        addToCart.style.fontSize="20px"
        addToCart.style.color="white"
        addToCart.style.backgroundColor="#059862"
        addToCart.style.border="1px solid black"
        addToCart.style.borderRadius="6px"
        addToCart.style.fontFamily=" 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        addToCart.textContent="ADD TO CART"
        productDiv.appendChild(addToCart)
    })


}
getAlldatas()



