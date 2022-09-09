if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar a página')
    window.location.href="/pages/login.html"
}


function logout() {
    localStorage.removeItem('token');
    window.location.href="/pages/login.html"
}

// let logado = false;

// if(localStorage.getItem("acesso") == "true"){
//     logado = true

// }

// if(logado != true){
//     alert("Voce nao esta autenticado!");
//     window.location.href="login.html"
// }