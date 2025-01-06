document.getElementById("registration-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("user",JSON.stringify({name,email,password}));
    alert("registation successful ! Please log in. ");
    window.location.href="login.html";
})