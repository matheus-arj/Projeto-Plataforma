
const users = {
  "matheus.araujo2@hotmail.com": "987654321",
  "julia.silva@hotmail.com": "123456789",
  "marcela_almeida@gmail.com": "abc12345",
  "matheus": "123"
}
// function checkUser() {
//   const verify = localStorage.getItem(email, senha)

//   const validacao = users.hasOwnProperty(email) && users[email] == senha


//     if (verify == validacao) {
//       window.location.href = "/sucess.html"
//     } else {
//       "/pages/login.html"
//     }

// }

// checkUser()

//   if(localStorage.getItem('token') == null){
//     window.location.href="/pages/login.html"
//   } else {
//     window.location.href="/sucess.html"
// }

let token = Math.random().toString(16).substring(2)

function checkUser() {
  if(localStorage.getItem('token')){
    return window.location.href = "/sucess.html"
  }
}



function logar() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  const isUserValid = users.hasOwnProperty(email) && users[email] == senha

  localStorage.setItem(email, senha)
  
  if (isUserValid) {    
    alert("Usuario autenticado!");
    window.location.href = "/sucess.html"
    localStorage.setItem('token', token)
  } else {
    alert("Usuário ou senha inválidos!")
  }
}

// addEventListener("load", checkUser)


// const users = [
//   {
//     email: "matheus.araujo2@hotmail.com",
//     senha: "987654321"
//   },
//   {
//     email: "julia.silva@hotmail.com",
//     senha: "123456789"
//   },
//   {
//     email: "marcela_almeida@gmail.com",
//     senha: "abc12345"
//   }

// ]

// function logar(){
//   let email = document.getElementById("email").value;
//   let senha = document.getElementById("senha").value;

//   const isUserValid = users.find(user => user.email === email && user.senha === senha)

//   if(isUserValid) {
//     localStorage.setItem("acesso", true);
//     alert("Usuario autenticado!");
//     window.location.href = "/index.html"
//   } else {
//     alert("Usuário ou senha inválidos!")
//   }

  // if (email.value == "admin@admin.com" && senha.value == "admin"){
  //   localStorage.setItem("acesso", true);
  //   alert("Usuario autenticado!");
  //   window.location.href = "/index.html"
  // } else{
  //   alert("Usuário ou senha inválidos!")
  // }
