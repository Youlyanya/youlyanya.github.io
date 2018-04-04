$(document).ready(function() {

	// Опеделяем переменные
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	// События по клику на иконку
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle();
	})

	// События по клику на ссылки
	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navButtonToggle();
		}
		navBlock.removeClass(navBlockOpen);
	})

	// Функция для анимации иконки
	function navButtonToggle(){
		if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	}
	  
    /* убераем баг - при измения окна свыше 768 открытое мобильное меню закрываем */
	$(window).resize(function(){
	var w = $(window).width();
		if(w > 768){
			 if (navBlock.hasClass(navBlockOpen) ) {
				navBlock.removeClass(navBlockOpen);
				navButtonToggle();
			}
		}
	})
    
    
});