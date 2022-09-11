const users = {
  "matheus.araujo2@hotmail.com": "987654321",
  "julia.silva@hotmail.com": "123456789",
  "marcela_almeida@gmail.com": "abc12345",
  "matheus": "123"
}

let token = Math.random().toString(16).substring(2)

function logar() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  const isUserValid = users.hasOwnProperty(email) && users[email] == senha

  if (isUserValid) {
    alert("Usuario autenticado!");
    window.location.href = "/sucess.html"
    localStorage.setItem('token', token)
  } else {
    alert("Usuário ou senha inválidos!")
  }
}
