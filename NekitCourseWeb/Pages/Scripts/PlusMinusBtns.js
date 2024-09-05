document.addEventListener('DOMContentLoaded', function() {

    let ButtonM = document.querySelector('.btnMinus');
    let ButtonP = document.querySelector('.btnPlus');
    let count;
    if(localStorage.getItem('Quantity')){
        count = localStorage.getItem('Quantity')
    }
    else{
        count = 1;
    }
    document.querySelector('.pictures3-RightBlock-Div3LeftText2').textContent = count;
    document.querySelector('.pictures3-RightBlock-Div3RightText2').textContent = '$'+42*count;

    if(document.querySelector('.CartTotal')){
        document.querySelector('.ShopCartDiv2-Text4').textContent = count;
        document.querySelector('.CartTotal').textContent = '$'+(42*count+20);
        document.querySelector('.ShopCartDiv2-Text5').textContent = '$'+42*count;
    }

    ButtonM.addEventListener('click', function() 
    {
        if (count!==1) {			
			count--;
        } 
        document.querySelector('.pictures3-RightBlock-Div3LeftText2').textContent = count;
        document.querySelector('.pictures3-RightBlock-Div3RightText2').textContent = '$'+42*count;
        
        if(document.querySelector('.CartTotal')){
            document.querySelector('.ShopCartDiv2-Text4').textContent = count;
            document.querySelector('.CartTotal').textContent = '$'+(42*count+20);
            document.querySelector('.ShopCartDiv2-Text5').textContent = '$'+42*count;
        }
        
        localStorage.setItem('Quantity',count)
  });
    ButtonP.addEventListener('click', function() 
    {
        if (count!==99) {			
			count++;
        } 
        document.querySelector('.pictures3-RightBlock-Div3LeftText2').textContent = count;
        document.querySelector('.pictures3-RightBlock-Div3RightText2').textContent = '$'+42*count;        
        
        if(document.querySelector('.CartTotal')){
            document.querySelector('.ShopCartDiv2-Text4').textContent = count;
            document.querySelector('.CartTotal').textContent = '$'+(42*count+20);
            document.querySelector('.ShopCartDiv2-Text5').textContent = '$'+42*count;
        }
        
        localStorage.setItem('Quantity',count)
  }
  );
});  