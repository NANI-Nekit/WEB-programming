document.addEventListener('DOMContentLoaded', function() {      
    document.querySelector('.generatePassword').addEventListener('click', function() 
    {
        const length=8;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        let HasUpper = false;
        let HasDigit = false;
        while(password.length<length||!HasUpper||!HasDigit){
            const random = Math.floor(Math.random()*charset.length);
            const char = charset[random];
            if(password.length<length){
                password+=char;
            }
            if(/[A-Z]/.test(char)){
                HasUpper=true;
            }
            if(/\d/.test(char)){
                HasDigit+=char;
            }
        }
        console.log(password) ;
        document.querySelector('.passwordInPut').value=password;
  });
})