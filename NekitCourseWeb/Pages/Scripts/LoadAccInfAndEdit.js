let LogInedUser = localStorage.getItem('LogInedUser');
let user = JSON.parse(localStorage.getItem('users'))[LogInedUser];
document.querySelector('.NickName').textContent=user.name;
document.querySelector('.AvatarText').textContent=user.name[0];
document.querySelector('.MailValue').textContent=user.email;
document.querySelector('.PhoneValue').textContent=user.phone;
document.querySelector('.AgeValue').textContent=user.age;
document.querySelector('.AddressValue').textContent=user.address;
document.querySelector('.CardValue').textContent=user.cardNum;
