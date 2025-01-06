let cart = JSON.parse(localStorage.getItem("cart"))|| [];
function renderCart(){
    const cartItemDiv = document.querySelector(".cart-items");
    cartItemDiv.innerHTML="";
    if(cart.length===0){
        cartItemDiv.innerHTML="<p>Your cart is empty</p>";
        return;
    }
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML=`
        <span>${item.title} (x${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>`;
        cartItemDiv.appendChild(cartItem);
    });
    const total=cart.reduce((sum,item) => sum+ item.price*item.quantity,0);
    document.getElementById("total").textContent=total.toFixed(2);
}
function addToCart(id,title,price){
    const existingItem = cart.find((item) => item.id===id);
    if(existingItem){
        existingItem.quantity++;
    }
    else{
        cart.push({id,title,price,quantity:1});

    }
    localStorage.setItem("cart",JSON.stringify(cart));
    console.log(total)
}
renderCart();