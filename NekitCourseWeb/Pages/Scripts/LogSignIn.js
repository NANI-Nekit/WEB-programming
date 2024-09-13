//for logination
let  users = [];
if(localStorage.getItem('users')){
  users =  JSON.parse(localStorage.getItem('users'));
}
document.addEventListener('DOMContentLoaded', function() {  
    
    document.querySelector('.ShopNext').addEventListener('click', function() 
    {
        LoginPlease();
  });
  document.querySelector('.MyAccount').addEventListener('click', function() 
    {
        LoginPlease();
  });
  document.querySelector('.Shop').addEventListener('click', function() 
    {
        LoginPlease();
  });
  document.querySelector('.pictures3-RightBlock-Div4ForText').addEventListener('click', function() 
    {
        LoginPlease();
  });
  document.querySelector('.Text3-3').addEventListener('click', function() 
    {
        LoginPlease();
  });
  document.querySelector('.Text4-3').addEventListener('click', function() 
    {
        LoginPlease();
  });

  document.querySelector('.ForRegistration').addEventListener('click',function(){
        document.querySelector('.Logining').style.top='-300px';
        document.querySelector('.Logining').style.opacity='0';
        document.querySelector('.Registration').style.display='none';
        document.querySelector('.Logination').style.display='none';
        document.body.style.overflowY = 'visible';
        document.querySelector('.ForRegistration').style.top='-100vh';
        document.querySelector('.ForRegistration').style.opacity='0';
        document.querySelector('.ShopNext').style.display='block';
        document.querySelector('.SliderBtn-Next').style.display='flex';
        document.querySelector('.SliderBtn-Prev').style.display='flex';
  })
  
  // let correctPassword1 =false;
  // let correctEmail1 =false;
  //нажатие лог1
  document.querySelector('#LogIn1').addEventListener('click',function(){
    document.querySelector('.Logining').style.top='-300px';
    document.querySelector('.Logining').style.opacity='0';
    document.querySelector('.Logination').style.display='flex';
})
  //нажатие лог2
  document.querySelector('#LogIn2').addEventListener('click',function(){
    
      // let usersForLogIn = localStorage.getItem('users');
      // let usersForLogInArray = usersForLogIn ? JSON.parse(usersForLogIn):[];
      // console.log(users);
      // console.log(users[0].age);
      // console.log(Object.keys(users).length);
      // let FindedUser = users.find(function(user1){
      //   return(((user1.email===document.querySelector('#emailUser1').value)&(user1.password===document.querySelector('#passwordUser1').value)));
      // })
      for(let i = 0;i<Object.keys(users).length;i++){

        if(users[i].email===document.querySelector('#emailUser1').value&users[i].password===document.querySelector('#passwordUser1').value){
          localStorage.setItem('LogInedUser',i);
          location.reload();
        }
      }
      
    
})
//нажатие сигн1
  document.querySelector('#Sign1').addEventListener('click',function(){
    document.querySelector('.Logining').style.top='-300px';
    document.querySelector('.Logining').style.opacity='0';
    document.querySelector('.Registration').style.display='flex';
})
//нажатие сигн2
document.querySelector('#Sign2').addEventListener('click',function(){
  //if(document.getElementById('passwordUser').value)
  SignInUser();
})

}); 
 function LoginPlease(){
    if(!localStorage.getItem('LogInedUser')){
    document.querySelector('.Logining').style.top='270px';
    document.querySelector('.Logining').style.opacity='1';
    document.body.style.overflowY = 'hidden';
    document.querySelector('.ForRegistration').style.top='0px';
    document.querySelector('.ForRegistration').style.opacity='0.5';
    document.querySelector('.ShopNext').style.display='none';
    document.querySelector('.SliderBtn-Next').style.display='none';
        document.querySelector('.SliderBtn-Prev').style.display='none';
    }
  } 

//для регистрации пользователя
let correctEmail = false;
let correctPhone = false;
let correctAge = false;
let correctCardNumber = false;
let correctNickname = false;
let correctPassword = false;

  document.querySelector('#emailUser').addEventListener('input',function(){
    let patternForEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    if(patternForEmail.test(document.querySelector('#emailUser').value)){
      document.querySelector('.emailInput').style.animation='none';
      document.querySelector('.emailInput').style.color='green';
      document.querySelector('.SignIn').textContent='Sign in';
      correctEmail = true;     
    }
    else{
      document.querySelector('.emailInput').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.SignIn').textContent='invalid e-mail';
      correctEmail = false;
    }
  })
  document.querySelector('#emailUser1').addEventListener('input',function(){
    let patternForEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    if(patternForEmail.test(document.querySelector('#emailUser1').value)){
      document.querySelector('#emailUser1').style.animation='none';
      document.querySelector('#emailUser1').style.color='green';
      document.querySelector('#LogIn2').textContent='Log in';
      correctEmail = true;     
    }
    else{
      document.querySelector('#emailUser1').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('#LogIn2').textContent='invalid e-mail';
      correctEmail = false;
    }
  })
  document.querySelector('.phoneInput').addEventListener('input',function(){
    let patternForPhone = /^(\+375)[ ](29|25|44|33)[ ](\d{3})[ ](\d{2})[ ](\d{2})$/;

    let input = document.querySelector('.phoneInput').value;
    input = input.replace(/\D/g, '');
    let formatted = '';
    for (let i = 3; i < input.length; i++) {
      if (i === 5) {
          formatted += ' ';
      }
      if (i === 8) {
        formatted += ' ';
      }
     if (i === 10) {
        formatted += ' ';
      }

      formatted += input[i];
    }
    document.querySelector('.phoneInput').value = '+375 '+formatted;

    if(patternForPhone.test(document.querySelector('.phoneInput').value)){
      document.querySelector('.phoneInput').style.animation='none';
      document.querySelector('.phoneInput').style.color='green';
      document.querySelector('.SignIn').textContent='Sign in';
      correctPhone = true;      
    }
    else{
      document.querySelector('.phoneInput').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.SignIn').textContent='invalid phone';
      correctEmail = false;
    }
  })
  document.querySelector('.ageInput').addEventListener('input',function(){
    
    if((document.querySelector('.ageInput').value>=16)){
      document.querySelector('.ageInput').style.animation='none';
      document.querySelector('.ageInput').style.color='green';
      document.querySelector('.SignIn').textContent='Sign in';
      correctAge = true;    
      if((document.querySelector('.ageInput').value>=90)){
        document.querySelector('.SignIn').textContent='too late)';
      }  
    }
    else{
      document.querySelector('.ageInput').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.SignIn').textContent='only 16+';     
      correctAge = false;
    }
  })
  document.querySelector('.cardInput').addEventListener('input',function(){
    let patternForCard = /^(\d{4})[ ](\d{4})[ ](\d{4})[ ](\d{4})$/;

    let input = document.querySelector('.cardInput').value;
    input = input.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
          formatted += ' ';
      }
      formatted += input[i];
    }
    document.querySelector('.cardInput').value = formatted;

    if(patternForCard.test(document.querySelector('.cardInput').value)){
      document.querySelector('.cardInput').style.animation='none';
      document.querySelector('.cardInput').style.color='green';
      document.querySelector('.SignIn').textContent='Sign in';
      correctCardNumber = true;      
    }
    else{
      document.querySelector('.cardInput').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.SignIn').textContent='invalid card number';
      correctCardNumber = false;
    }
  })
  document.querySelector('.nameInPut').addEventListener('input',function(){
    if((document.querySelector('.nameInPut').value!=null)){
      document.querySelector('.nameInPut').style.animation='none';
      document.querySelector('.nameInPut').style.color='green';
      document.querySelector('.SignIn').textContent='Sign in';
      correctNickname = true;      
    }
    else{
      document.querySelector('.nameInPut').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.SignIn').textContent='invalid name';
      correctNickname = false;
    }
  })
  document.querySelector('.passwordInPut').addEventListener('input',function(){
    let patternForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(patternForPassword.test(document.querySelector('.passwordInPut').value)){
      document.querySelector('.passwordInPut').style.animation='none';
      document.querySelector('.passwordInPut').style.color='green';
      document.querySelector('.SignIn').textContent='Sign in';
      correctPassword = true; 
    }
    else{ 
      document.querySelector('.passwordInPut').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.SignIn').textContent='insecure password';
      correctPassword = false;
    }
  })
//-----------------------------------------
  if(localStorage.getItem('LogInedUser')){
    document.querySelector('.ShopNext').href='Shop.html';
    document.querySelector('.MyAccount').href='MyAccount.html';
    document.querySelector('.Shop').href='Shop.html';
    document.querySelector('.pictures3-RightBlock-Div4ForText').href='Shop.html';
    document.querySelector('.Text3-3').href='Shop.html';
    document.querySelector('.Text4-3').href='Shop.html';
  }
  
  

  function User(name,email,phone,age,address,cardNum,password){
    this.name=name;
    this.email=email;
    this.phone=phone
    this.age=age;
    this.address=address;
    this.cardNum=cardNum;
    this.password=password;
  }
  function CreateId(users){
    return Object.keys(users).length;
  }
  function SignInUser(){
    if (correctEmail&correctPhone&correctAge&correctCardNumber&correctPassword&correctNickname){
    let name = document.getElementById('NameUser').value;
    let email = document.getElementById('emailUser').value;
    let phone = document.getElementById('telUser').value;
    let age = document.getElementById('ageUser').value;
    let address = document.getElementById('addressUser').value;
    let cardNum = document.getElementById('cardNumUser').value;
    let password = document.getElementById('passwordUser').value;

    let user = new User(name,email,phone,age,address,cardNum,password);

    let userId=CreateId(users);

    users[userId] = user;

    localStorage.setItem('users',JSON.stringify(users));
    localStorage.setItem('LogInedUser',userId);
    location.reload();
    }
  }
