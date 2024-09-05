document.addEventListener('DOMContentLoaded', function() {  
    let count=0;
    let LogInedUser = localStorage.getItem('LogInedUser');
    let user = JSON.parse(localStorage.getItem('users'))[LogInedUser];
    let correctAge = false; 
    let correctCardNumber = false;
    let correctNickname = false;
    document.querySelector('.EditInf').addEventListener('click', function(){
        count++;
        if(count===1){
            document.querySelector('.AgeValue').style.display='none';
            document.querySelector('.AddressValue').style.display='none';
            document.querySelector('.CardValue').style.display='none';
            document.querySelector('.NickName').style.display='none';

            document.querySelector('#NewAge').style.display='block';
            document.querySelector('#NewAddress').style.display='block';
            document.querySelector('#NewCard').style.display='block';
            document.querySelector('#NewNickName').style.display='block';

            document.querySelector('#NewAge').value=user.age;
            document.querySelector('#NewAddress').value=user.address;
            document.querySelector('#NewCard').value=user.cardNum;
            document.querySelector('#NewNickName').value=user.name;
        }
        else if(count===2){
            if(correctNickname&correctCardNumber&correctAge)
            document.querySelector('.AgeValue').style.display='block';
            document.querySelector('.AddressValue').style.display='block';
            document.querySelector('.CardValue').style.display='block';
            document.querySelector('.NickName').style.display='block';

            document.querySelector('#NewAge').style.display='none';
            document.querySelector('#NewAddress').style.display='none';
            document.querySelector('#NewCard').style.display='none';
            document.querySelector('#NewNickName').style.display='none';

            

            localStorage.setItem('users'[LogInedUser].age,JSON.stringify(document.querySelector('#NewAge').value));
            user.address=document.querySelector('#NewAddress').value;
            user.cardNum=document.querySelector('#NewCard').value;
            user.name=document.querySelector('#NewNickName').value;
            console.log(localStorage.getItem('users'))[user]
            location.reload();
        }

  });
  document.querySelector('#NewAge').addEventListener('change',function(){
    
    if((document.querySelector('#NewAge').value>=16)){
      document.querySelector('#NewAge').style.animation='none';
      document.querySelector('#NewAge').style.color='green';
      document.querySelector('.EditInf').textContent='Sign in';
      correctAge = true;    
      if((document.querySelector('#NewAge').value>=90)){
        document.querySelector('.EditInf').textContent='too late)';
      }  
    }
    else{
      document.querySelector('#NewAge').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.EditInf').textContent='only 16+';     
      correctAge = false;
    }
  })

  document.querySelector('#NewCard').addEventListener('change',function(){
    let patternForCard = /^(\d{4})[ ](\d{4})[ ](\d{4})[ ](\d{4})$/;
    if(patternForCard.test(document.querySelector('#NewCard').value)){
      document.querySelector('#NewCard').style.animation='none';
      document.querySelector('#NewCard').style.color='green';
      document.querySelector('.EditInf').textContent='Sign in';
      correctCardNumber = true;      
    }
    else{
      document.querySelector('#NewCard').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.EditInf').textContent='invalid card number';
      correctCardNumber = false;
    }
  })

  document.querySelector('#NewNickName').addEventListener('change',function(){
    if((document.querySelector('#NewNickName').value!=null)){
      document.querySelector('#NewNickName').style.animation='none';
      document.querySelector('#NewNickName').style.color='green';
      document.querySelector('#NewNickName').textContent='Sign in';
      correctNickname = true;      
    }
    else{
      document.querySelector('#NewNickName').style.animation='InvalidInputAnimation 1s infinite';
      document.querySelector('.EditInf').textContent='invalid name';
      correctNickname = false;
    }
  })
  function User(name,email,phone,age,address,cardNum,password){
    this.name=name;
    this.email=email;
    this.phone=phone
    this.age=age;
    this.address=address;
    this.cardNum=cardNum;
    this.password=password;
    }
});