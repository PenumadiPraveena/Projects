document.getElementById("login-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const email= document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user=JSON.parse(localStorage.getItem("user"));

    if(user&& user.email===email && user.password===password){
        alert("Login Successfull !");
        window.location.href="dashboard.html";
    }
    else{
        alert("Invalid email or password. ");
    }
});