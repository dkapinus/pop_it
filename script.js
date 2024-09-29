
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active'); // Переключаем класс 'active' у бургер-меню
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // Переключаем класс 'show' у nav-links на мобильных устройствах
});
