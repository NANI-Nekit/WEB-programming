//import { translateVar } from "./translateVariabels.js";
import { ChangeLang } from "./translater.js";
var buttonContact = document.getElementById('En-Rus_Button');

if(localStorage.getItem('lang')==='EN'){
    button.textContent = 'EN';   
    ChangeLang('EN')
}
else{
    button.textContent = 'RU';
    ChangeLang('RU')
}


document.addEventListener('DOMContentLoaded', function() {   
  
    buttonContact.addEventListener('click', function(){
       
        if (buttonContact.textContent === 'RU') {
            ChangeLang('EN');
            buttonContact.textContent = 'EN';  //fix
            console.log(buttonContact);

        } 
    
        else { 
            console.log('click when en');
            console.log(buttonContact.textContent);
            console.log(buttonContact);

            ChangeLang('RU');
            buttonContact.textContent = 'RU';
            console.log(buttonContact);

        }
    }
    );

});
