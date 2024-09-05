document.addEventListener('DOMContentLoaded', function() {  
    let ButtonBuy = document.querySelector('.pictures3-RightBlock-Div4ForText-1');
    ButtonBuy.addEventListener('click', function() 
    {
        if(document.querySelector('.PrivacyCheckBox').checked){
            document.querySelector('.BuySucces').style.display='flex';
            document.body.style.overflowY = 'hidden';
            document.querySelector('.ForBuySaccess').style.display='block'; 
            document.querySelector('.PrivacyPolicyBtn').style.animation='none'; 
        }  
        else{
            document.querySelector('.PrivacyPolicyBtn').style.animation='PleaseCheck 1s infinite'; 
        }     
  });
    document.querySelector('.ForBuySaccess').addEventListener('click',function(){
        document.querySelector('.BuySucces').style.display='none';
        document.body.style.overflowY = 'visible';
        document.querySelector('.ForBuySaccess').style.display='none';
  })
  let LogInedUser = localStorage.getItem('LogInedUser');
  let CardNumberForPicture = JSON.parse(localStorage.getItem('users'))[LogInedUser].cardNum;
  document.querySelector('.CardNumber').textContent=CardNumberForPicture[0]+CardNumberForPicture[1]+CardNumberForPicture[2]+CardNumberForPicture[3]+' '+'****'+' '+'****'+' '+CardNumberForPicture[15]+CardNumberForPicture[16]+CardNumberForPicture[17]+CardNumberForPicture[18];
});  