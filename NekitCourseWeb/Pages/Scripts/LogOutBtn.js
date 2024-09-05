document.addEventListener('DOMContentLoaded', function() {  
    
    document.querySelector('.LogOutBtn').addEventListener('click', function() 
    {
        localStorage.removeItem('LogInedUser');
        window.open('index.html')
  });
});