
document.addEventListener('DOMContentLoaded', function() {

    let windowWidth;
    let counterForReload;
    if(!localStorage.getItem('counterForReload')){
        localStorage.setItem('counterForReload',0)
    }
    counterForReload=parseInt(localStorage.getItem('counterForReload'))

    let btnClick = 0;
    const ScrollMenu = document.querySelector('.ScrollMenu');
    const BurgerBtn = document.querySelector('.Burger');
    const EnRusBtn = document.querySelector('.En-Rus_Button');
    const DayNightBtn = document.querySelector('.Day-Night_Button');
    let mainDivLength; 
    
    BurgerBtn.addEventListener('click', function(){
        btnClick++;
        if(btnClick===1){
            BurgerBtn.className='Burger BurgerActive';
            ScrollMenu.style.top='0px';
            EnRusBtn.style.top='145px';
            document.getElementById('span1').style.background='Black';
		    document.getElementById('span2').style.background='Black';
		    document.getElementById('span3').style.background='Black';
            DayNightBtn.style.top='65px';

            document.body.style.overflowY = 'hidden';
            
            mainDivLength = document.querySelector('.mainDiv').clientWidth;

            if (mainDivLength < 1200){
                document.querySelector('.Formulation').style.color = 'black';
                document.querySelector('.Shop').style.color = 'black';
                document.querySelector('.About').style.color = 'black';
                document.querySelector('.Blog').style.color = 'black';
                document.querySelector('.Contact').style.color = 'black';
                document.querySelector('.Cart').style.color = 'black';
            }

            if(mainDivLength < 1200){
                //console.log(mainDivLength);
                EnRusBtn.style.top='345px';
                DayNightBtn.style.top='270px';
                document.querySelector('.Formulation').style.top = '50px';
                document.querySelector('.Shop').style.top = '80px';
                document.querySelector('.About').style.top = '120px';
                document.querySelector('.Blog').style.top = '150px';
                document.querySelector('.Contact').style.top = '180px';
                document.querySelector('.Cart').style.top = '210px';
                document.querySelector('.MyAccount').style.display='none';
                
            }

            document.querySelector('.ShopNext').style.display='none';
            document.querySelector('.SliderBtn-Next').style.display='none';
            document.querySelector('.SliderBtn-Prev').style.display='none';
           
            
        }
        if(btnClick===2){
            btnClick=0;
            BurgerBtn.className='Burger';
            ScrollMenu.style.top='-220px';
            EnRusBtn.style.top='-50px';
            // if(localStorage.getItem('Theme')==='NIGHT'){
            //     document.getElementById('span1').style.background='#D8FFA4';
		    //     document.getElementById('span2').style.background='#D8FFA4';
		    //     document.getElementById('span3').style.background='#D8FFA4';
            // }
            document.getElementById('span1').style.background='#D8FFA4';
		    document.getElementById('span2').style.background='#D8FFA4';
	        document.getElementById('span3').style.background='#D8FFA4';
            DayNightBtn.style.top='-101px';            
            document.body.style.overflowY = 'visible';

            mainDivLength = document.querySelector('.mainDiv').clientWidth;
            if(mainDivLength < 1200){
                //console.log(mainDivLength);
                document.querySelector('.Formulation').style.top = '-50px';
                document.querySelector('.Shop').style.top = '-50px';
                document.querySelector('.About').style.top = '-50px';
                document.querySelector('.Blog').style.top = '-50px';
                document.querySelector('.Contact').style.top = '-50px';
                document.querySelector('.Cart').style.top = '-50px';
                ScrollMenu.style.top='-405px';
                document.querySelector('.MyAccount').style.display='block';                                  
            }
            document.querySelector('.ShopNext').style.display='block';
            document.querySelector('.SliderBtn-Next').style.display='flex';
            document.querySelector('.SliderBtn-Prev').style.display='flex';
        }
    });

    //add reload when scale window
    window.addEventListener('resize', function() {
        windowWidth = window.innerWidth;
        //console.log(windowWidth)
        //console.log(counterForReload)
       
        if((windowWidth>=1200)&&(counterForReload===0)){
            counterForReload=1;
            localStorage.setItem('counterForReload',counterForReload)
            location.reload();
        } 
        if((windowWidth<1200)&&(windowWidth>=768)&&(counterForReload===1))
        {
            counterForReload=0;
            localStorage.setItem('counterForReload',counterForReload)
            location.reload();
        } 
        if((windowWidth<768)&&(counterForReload===0))
        {
            counterForReload=1;
            localStorage.setItem('counterForReload',counterForReload)
            location.reload();
        }        
               
    });
})
