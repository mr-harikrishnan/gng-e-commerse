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

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------







var params = new URLSearchParams(window.location.search)

var productId=params.get("id")

async function fetchingProductDetails(){
    return fetch(`https://fakestoreapi.com/products/${productId}`,{
        method:"GET"
    })
}

async function productdetails(){
    try {
        var data=await fetchingProductDetails()
    var productData=await data.json()
    console.log(productData)

    var productImg=document.getElementById("img")
    productImg.src=`${productData.image}`

    var title=document.getElementById("title")
    title.textContent=productData.title

    var price=document.getElementById("price")
    price.textContent=`₹ ${productData.price} /-`

    var rating=document.getElementById("rating")
    rating.textContent=`rating ⭐ ${productData.rating.rate}`


    var desc=document.getElementById("desc")
    desc.textContent=`Description : ${productData.description}`
        
    } catch (error) {
        console.log(error)
    }
}
productdetails()

// ----------------------------------------------------


