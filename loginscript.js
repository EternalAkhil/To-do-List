let user = document.getElementById("user")
let password = document.getElementById("password")
function login(){
    console.log("hello")
    if (user.value=='akhil' && password.value=="123"){
        window.location.href='index.html'
    }

}
