let DayNightButton = document.getElementById('Day-Night_Button');
let Sun = document.getElementById('Sun');
let Moon = document.getElementById('Moon');
const NightColor = '#000000c9';
	
if(localStorage.getItem('Theme')==='DAY'){
    ChangeTheme('DAY')
}
else{
    ChangeTheme('NIGHT')
}

function ChangeTheme (ThemeValue){
	if(ThemeValue==='DAY'){
		localStorage.setItem('Theme','DAY');
		Moon.style.display = 'none';
		Sun.style.display = 'block';
		document.body.style.backgroundColor = '#f3f4f2';
		document.body.style.color = 'Black';
		document.body.classList.remove('aNightTheme');
		document.querySelector('.UpperFrame').style.backgroundColor = 'white';
		// document.getElementById('span1').style.background='Black';
		// document.getElementById('span2').style.background='Black';
		// document.getElementById('span3').style.background='Black';
		document.querySelector('.svgPauli').style.fill='black';
		document.querySelector('.svgPauli1').style.fill='black';
	}
	else if(ThemeValue==='NIGHT'){
		localStorage.setItem('Theme','NIGHT');
		Moon.style.display = 'block';
		Sun.style.display = 'none';
		document.body.style.backgroundColor = NightColor;
		document.body.style.color = '#D8FFA4';
		document.querySelector('.UpperFrame').style.backgroundColor = NightColor;
		document.body.classList.add('aNightTheme');
		/*document.getElementById('span1').style.background='#D8FFA4';
		document.getElementById('span2').style.background='#D8FFA4';
		document.getElementById('span3').style.background='#D8FFA4';*/
		document.querySelector('.svgPauli').style.fill='#d8ffa4';
		document.querySelector('.svgPauli1').style.fill='#d8ffa4';
	}
}

document.addEventListener('DOMContentLoaded', function() {
    
  
    DayNightButton.addEventListener('click', function() 
    {
        if (Moon.style.display === 'none') {			
			ChangeTheme('NIGHT')
        } 
    
        else {
            ChangeTheme('DAY')
        }

  }
);
});  
