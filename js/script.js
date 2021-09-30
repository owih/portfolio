const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click",onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue
            });
            e.preventDefault();
        }
    }
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
const iconMenu1 = document.querySelector('.close');
if (iconMenu1) {
    iconMenu1.addEventListener("click", function (e) {
        menuBody.classList.toggle('_active');
    });
}

$(document).ready(function(){
    $('.marketing__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeigth: false,
        slidesToShow: 1,
        speed: 800,
        autoplay: true,
        autoplayspeed: 600,
        pauseOnFocus: true,
        paoseOnHover: true,
        paoseOnDotsHover: true,
        

    });
});

