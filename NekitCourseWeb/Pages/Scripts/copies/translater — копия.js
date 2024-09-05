var button = document.getElementById('En-Rus_Button');
console.log(button)

if(localStorage.getItem('lang')==='EN'){
    ChangeLang('EN')
}
else{
    ChangeLang('RU')
}

function ChangeLang(LangValue){
        if(LangValue==='RU'){
            button.textContent = 'EN';
            localStorage.setItem('lang','RU')
            document.querySelector('.About').textContent='О нас';
            document.querySelector('.Shop').textContent='Магазин';
            document.querySelector('.Formulation').textContent='Формула';
            document.querySelector('.Blog').textContent='Блог';
            document.querySelector('.Contact').textContent='Контакты';
            document.querySelector('.Cart').textContent='Карта';
            document.querySelector('.Text1-1').textContent='ОБЕЩАНИЕ Pauli';
            document.querySelector('.Text1-2').textContent='Pauli & Sisters уверены, что вы можете оздоровить свою кожу, используя идеальный баланс натуральных масел. Наш продукт разработан для устранения сухости, неровного тона кожи, рубцов и растяжек. Мы используем только качественные средства.';
            document.querySelector('.Text1-3').textContent='О нас →';
            document.querySelector('.ShopNext').textContent='Магазин →';
            document.querySelector('.Pictures1-LeftBlock-DivText1').textContent='Летняя рубашка';
            document.querySelector('.Pictures1-LeftBlock-DivText2').textContent='Ограниченное предложение';
            document.querySelector('.pictures3-RightBlock-Div1Text1').textContent='Восстанавливающая сыворотка';
            document.querySelector('.pictures3-RightBlock-Div1Text2').textContent='Многофункциональное масло, обогащенное 11 питательными веществами, растительными компонентами.';
            document.querySelector('.pictures3-RightBlock-Div4ForText').style.top = '0px';
            document.querySelector('.pictures3-RightBlock-Div2Text1').textContent='Объём';
            document.querySelector('.pictures3-RightBlock-Div2Text2').textContent='1.8 Жидкая унция / 52 мл';
            document.querySelector('.pictures3-RightBlock-Div3LeftText1').textContent='Количество';
            document.querySelector('.pictures3-RightBlock-Div3RightText1').textContent='Цена';
            document.querySelector('.pictures3-RightBlock-Div4Text').textContent='Добавить в корзину →';
            document.querySelector('.Text2-1').textContent='11 ТЩАТЕЛЬНО ПОДОБРАННЫХ ИНГРЕДИЕНТОВ';
            document.querySelector('.Text2-2').textContent='Все начинается с того, что каждый ингредиент - это главный ингредиент. Мы не добавляем в нашу формулу ингредиенты в маркетинговых целях. В Pauli & Sisters 11 ингредиентов, каждый из которых тщательно разрабатывается в течение 2 лет, чтобы подарить вашей коже любовь, которой она заслуживает.';
            document.querySelector('.Text2-3').textContent='Узнать больше →';
            document.getElementById('Almond').textContent='Миндальный';
            document.getElementById('Omega_Seed').textContent='Семена омеги';
            document.getElementById('Rosehip').textContent='Шиповник';
            document.getElementById('Black_Currant').textContent='Черная смородина';
            document.getElementById('Daikon_Radish').textContent='Редис с дайконом';
            document.querySelector('.Text3-1').textContent='Естественное решение проблем с уходом за кожей';
            document.querySelector('.Text3-2').textContent='на 100% растительной основе, с тщательно подобранными ингредиентами, которые защищают вашу кожу от внешних воздействий. Наши масла стимулируют выработку клеток и коллагена, снимают воспаление, заживляют рубцы, устраняют гиперпигментацию и улучшают кровообращение в коже.';
            document.querySelector('.Text3-3').textContent='Магазин →';
            document.querySelector('.Text4-1').textContent='Доступная роскошь';
            document.querySelector('.Text4-2').textContent='Косметика Pauli & Sisters создана с учетом интересов каждого человека. Наши натуральные ингредиенты позволяют вам наслаждаться роскошью ухода за кожей с помощью натуральных ингредиентов, не тратя на это ни копейки.';
            document.querySelector('.Text4-3').textContent='Магазин →';
            document.getElementById('No_toxins').textContent='Никаких токсинов';
            document.getElementById('No_preservatives').textContent='Без консервантов';
            document.getElementById('100%_vegan').textContent='100% веганский продукт';
            document.getElementById('Organic').textContent='Органический продукт';
            document.querySelector('.Pictures8-LeftDiv-Text').textContent='Получайте последние обновления от Pauli & Sisters';
            document.querySelector('.Pictures8-LeftDiv-Text1').textContent='Подписаться →';
            document.querySelector('.Pictures8-RightDiv-Text').textContent='Купить сейчас →';
            document.querySelector('.Pictures9-Text2').textContent='Подписывайтесь  @pauliandsisters →';
            document.getElementById('Footer-Follow').textContent='Подписаться';
            document.getElementById('Footer-Info').textContent='Информация';
            document.getElementById('Footer-Contact').textContent='Контакты';
            document.getElementById('Footer-Privacy').textContent='Политика конфиденциальности';
            document.getElementById('Footer-Terms').textContent='Правила & условия';
            document.getElementById('Footer-Returns').textContent='Возврат';
            document.getElementById('Footer-information').textContent='Не продавайте мою личную информацию';
            document.getElementById('Footer-USA').textContent='Сделано в США';
            document.getElementById('Footer-Manufactured').textContent='Изготовлено компанией Conscious Planet, Ирвин, Калифорния, 92614';
            document.getElementById('Footer-hero').textContent='Стань героем для кого-нибудь';
            document.getElementById('Footer-purchase').textContent='Каждой покупкой в Pauli & Sisters вы помогаете всем женщинам и детям, ставшим жертвами секс-торговли. 1 $ от вашей покупки будет передан благотворительному фонду Thorn для поддержки борьбы с торговлей детьми в целях сексуальной эксплуатации.';
        }
        else if(LangValue==='EN'){
            button.textContent = 'RU';
            localStorage.setItem('lang','EN')
            document.querySelector('.About').textContent='About';
            document.querySelector('.Shop').textContent='Shop';
            document.querySelector('.Formulation').textContent='Formulation';
            document.querySelector('.Blog').textContent='Blog';
            document.querySelector('.Contact').textContent='Contact';
            document.querySelector('.Cart').textContent='Cart';
            document.querySelector('.Text1-1').textContent='ОБЕЩАНИЕ Pauli сейчас типо раскладка английская';
            document.querySelector('.Text1-2').textContent='Pauli & Sisters уверены, что вы можете оздоровить свою кожу, используя идеальный баланс натуральных масел. Наш продукт разработан для устранения сухости, неровного тона кожи, рубцов и растяжек. Мы используем только качественные средства.';
            document.querySelector('.Text1-3').textContent='О нас →';
            document.querySelector('.ShopNext').textContent='Магазин →';
            document.querySelector('.Pictures1-LeftBlock-DivText1').textContent='Летняя рубашка';
            document.querySelector('.Pictures1-LeftBlock-DivText2').textContent='Ограниченное предложение';
            document.querySelector('.pictures3-RightBlock-Div1Text1').textContent='Восстанавливающая сыворотка';
            document.querySelector('.pictures3-RightBlock-Div1Text2').textContent='Многофункциональное масло, обогащенное 11 питательными веществами, растительными компонентами.';
            document.querySelector('.pictures3-RightBlock-Div4ForText').style.top = '0px';
            document.querySelector('.pictures3-RightBlock-Div2Text1').textContent='Объём';
            document.querySelector('.pictures3-RightBlock-Div2Text2').textContent='1.8 Жидкая унция / 52 мл';
            document.querySelector('.pictures3-RightBlock-Div3LeftText1').textContent='Количество';
            document.querySelector('.pictures3-RightBlock-Div3RightText1').textContent='Цена';
            document.querySelector('.pictures3-RightBlock-Div4Text').textContent='Добавить в корзину →';
            document.querySelector('.Text2-1').textContent='11 ТЩАТЕЛЬНО ПОДОБРАННЫХ ИНГРЕДИЕНТОВ';
            document.querySelector('.Text2-2').textContent='Все начинается с того, что каждый ингредиент - это главный ингредиент. Мы не добавляем в нашу формулу ингредиенты в маркетинговых целях. В Pauli & Sisters 11 ингредиентов, каждый из которых тщательно разрабатывается в течение 2 лет, чтобы подарить вашей коже любовь, которой она заслуживает.';
            document.querySelector('.Text2-3').textContent='Узнать больше →';
            document.getElementById('Almond').textContent='Миндальный';
            document.getElementById('Omega_Seed').textContent='Семена омеги';
            document.getElementById('Rosehip').textContent='Шиповник';
            document.getElementById('Black_Currant').textContent='Черная смородина';
            document.getElementById('Daikon_Radish').textContent='Редис с дайконом';
            document.querySelector('.Text3-1').textContent='Естественное решение проблем с уходом за кожей';
            document.querySelector('.Text3-2').textContent='на 100% растительной основе, с тщательно подобранными ингредиентами, которые защищают вашу кожу от внешних воздействий. Наши масла стимулируют выработку клеток и коллагена, снимают воспаление, заживляют рубцы, устраняют гиперпигментацию и улучшают кровообращение в коже.';
            document.querySelector('.Text3-3').textContent='Магазин →';
            document.querySelector('.Text4-1').textContent='Доступная роскошь';
            document.querySelector('.Text4-2').textContent='Косметика Pauli & Sisters создана с учетом интересов каждого человека. Наши натуральные ингредиенты позволяют вам наслаждаться роскошью ухода за кожей с помощью натуральных ингредиентов, не тратя на это ни копейки.';
            document.querySelector('.Text4-3').textContent='Магазин →';
            document.getElementById('No_toxins').textContent='Никаких токсинов';
            document.getElementById('No_preservatives').textContent='Без консервантов';
            document.getElementById('100%_vegan').textContent='100% веганский продукт';
            document.getElementById('Organic').textContent='Органический продукт';
            document.querySelector('.Pictures8-LeftDiv-Text').textContent='Получайте последние обновления от Pauli & Sisters';
            document.querySelector('.Pictures8-LeftDiv-Text1').textContent='Подписаться →';
            document.querySelector('.Pictures8-RightDiv-Text').textContent='Купить сейчас →';
            document.querySelector('.Pictures9-Text2').textContent='Подписывайтесь  @pauliandsisters →';
            document.getElementById('Footer-Follow').textContent='Подписаться';
            document.getElementById('Footer-Info').textContent='Информация';
            document.getElementById('Footer-Contact').textContent='Контакты';
            document.getElementById('Footer-Privacy').textContent='Политика конфиденциальности';
            document.getElementById('Footer-Terms').textContent='Правила & условия';
            document.getElementById('Footer-Returns').textContent='Возврат';
            document.getElementById('Footer-information').textContent='Не продавайте мою личную информацию';
            document.getElementById('Footer-USA').textContent='Сделано в США';
            document.getElementById('Footer-Manufactured').textContent='Изготовлено компанией Conscious Planet, Ирвин, Калифорния, 92614';
            document.getElementById('Footer-hero').textContent='Стань героем для кого-нибудь';
            document.getElementById('Footer-purchase').textContent='Каждой покупкой в Pauli & Sisters вы помогаете всем женщинам и детям, ставшим жертвами секс-торговли. 1 $ от вашей покупки будет передан благотворительному фонду Thorn для поддержки борьбы с торговлей детьми в целях сексуальной эксплуатации.';
        }  
}

document.addEventListener('DOMContentLoaded', function() {   
  
    button.addEventListener('click', function(){
       
        if (button.textContent === 'RU') {            
            ChangeLang('RU')
        } 
    
        else {
            ChangeLang('EN')
        }

    }
    );

});





