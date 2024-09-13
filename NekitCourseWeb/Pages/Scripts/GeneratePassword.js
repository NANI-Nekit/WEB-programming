document.addEventListener('DOMContentLoaded', function() {      
    document.querySelector('.generatePassword').addEventListener('click', function() 
    {
        const event = new Event('input');
        const length=8;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charset2 ='abcdefghijklmnopqrstuvwxyz';
        const charset3 ='0123456789';
        let random;
        let password = '';
        let HasUpper = false;
        let HasDigit = false;
        while(password.length<length){
            random = Math.floor(Math.random()*charset.length);
            password+=charset[random];
            random = Math.floor(Math.random()*charset2.length);
            password+=charset2[random];
            random = Math.floor(Math.random()*charset3.length);
            password+=charset3[random];
            
        }

        // while(password.length<length||!HasUpper||!HasDigit){
        //     const random = Math.floor(Math.random()*charset.length);
        //     const char = charset[random];
        //     if(password.length<length){
        //         password+=char;
        //     }
        //     if(/[A-Z]/.test(char)){
        //         HasUpper=true;
        //     }
        //     if(/\d/.test(char)){
        //         HasDigit=true;
        //         console.log(HasDigit);
        //     }
        // }

        console.log(password) ;
        document.querySelector('.passwordInPut').value=password;
        document.querySelector('.passwordInPut').dispatchEvent(event);
  });
})
