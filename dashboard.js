const apiurl = "https://fakestoreapi.com/products";

async function fetchProducts(){
    const response = await fetch(apiurl);
    const products = await response.json();
    console.log(products);
    displayproducts(products);
}
 function displayproducts(products){
    const productList = document.querySelector(".product-list");
    productList.innerHTML="";

    products.forEach((product)=>{
        const productDiv=document.createElement("div");
        productDiv.className="product";
        productDiv.innerHTML=`
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
    });
 }
 fetchProducts();