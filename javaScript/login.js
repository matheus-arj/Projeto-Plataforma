
const users = [
  {
    email: "matheus.araujo2@hotmail.com", 
    senha: "987654321"
  },
  {
    email: "julia.silva@hotmail.com", 
    senha: "123456789"
  },
  {
    email: "marcela_almeida@gmail.com",
    senha: "abc12345"
  }

]

function logar(){
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  console.log("email",email)

  const isUserValid = users.find(user => user.email === email && user.senha === senha)

  console.log("user", isUserValid)

  if(isUserValid) {
    localStorage.setItem("acesso", true);
    alert("Usuario autenticado!");
    window.location.href = "/index.html"
  } else {
    alert("Usuário ou senha inválidos!")
  }

  // if (email.value == "admin@admin.com" && senha.value == "admin"){
  //   localStorage.setItem("acesso", true);
  //   alert("Usuario autenticado!");
  //   window.location.href = "/index.html"
  // } else{
  //   alert("Usuário ou senha inválidos!")
  // }
}