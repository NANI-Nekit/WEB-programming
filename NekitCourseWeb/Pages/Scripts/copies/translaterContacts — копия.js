document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('En-Rus_Button');
  
    button.addEventListener('click', function() 
    {
        if (button.textContent === 'RU') {
            button.textContent = 'EN';
            document.querySelector('.About').textContent='О нас';
            document.querySelector('.Shop').textContent='Магазин';
            document.querySelector('.Formulation').textContent='Формула';
            document.querySelector('.Blog').textContent='Блог';
            document.querySelector('.Contact').textContent='Контакты';
            document.querySelector('.Cart').textContent='Карта';
            document.getElementById('FormText').textContent='Если вы желаете связаться с нами, заполните форму и оставьте сообщение.';
            document.querySelector('.ContactUsText').textContent='Свяжитесь с нами';
            document.getElementById('contactBtn').value='Оставить сообщение  →';
            document.getElementById('ContactFormName').placeholder='Ваше имя';
            document.getElementById('ContactFormEmail').placeholder='Ваш e-mail';
            document.getElementById('ContactFormPhone').placeholder='Ваш телефон (обязательно)';
            document.getElementById('ContactFormMessage').placeholder='Оставьте сообщение';
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
    
        else {
            button.textContent = 'RU';
            location.reload()
        }

  }
);
});