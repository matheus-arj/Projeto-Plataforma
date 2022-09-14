if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar a página')
    window.location.href="/pages/login.html"
}
console.log("Oi");
let exit = document.getElementById("Logout")
exit.addEventListener("click", logout)

function logout() {
    localStorage.removeItem('token');
    window.location.href="/pages/login.html"
}