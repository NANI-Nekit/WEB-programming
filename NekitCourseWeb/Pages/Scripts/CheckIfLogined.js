if(localStorage.getItem('LogInedUser')){
    document.querySelector('.Shop').href='Shop.html';
    document.querySelector('.MyAccount').href='Shop.html';
  }
  else{
    document.querySelector('.Shop').href='#';
    document.querySelector('.MyAccount').href='#';
  }