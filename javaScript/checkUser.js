function checkUser(){
    if(localStorage.getItem('token')){
      window.location.href = "/sucess.html";
    }
  } 
  checkUser()