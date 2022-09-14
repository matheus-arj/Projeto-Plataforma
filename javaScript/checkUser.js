function checkUser(){
    if(localStorage.getItem('token')){
      window.location.href = "/index.html";
    }
  } 
  checkUser()

  window.onload = checkUser