document.addEventListener('DOMContentLoaded', () => {

    //меню 
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.mobilemenu'),
          closeModal = document.querySelector('.close');

    //вызываем меню по клику на гамбургер
    hamburger.addEventListener('click', () => {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('Test');
    });

    //закрываем модальное окно
    closeModal.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    })


    //слайд 1
    const numberSwiper = new Swiper('.number-swiper',  {
     speed: 1000,
     autoHeight: true,
     spaceBetween: 20,
     //slidesPerView: 2,
        navigation: {
             nextEl: '.numbers.swiper-button-next',
             prevEl: '.numbers.swiper-button-prev',
     
           }, 
           pagination: {
            el: '.swiper-pagination.numbers',
            type: 'bullets',
            clickable: true,
          },
    });

    //слайд 2
    const otziveSwiper = new Swiper('.otzivi-swiper',  {
      speed: 1000,
        slidesPerView: 2,
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
          nextEl: '.otzivi.swiper-button-next',
          prevEl: '.otzivi.swiper-button-prev',
  
        }, 
        pagination: {
         el: '.swiper-pagination.otzivi',
         type: 'bullets',
         clickable: true,
       },

       breakpoints: { // адаптив
	
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20
        },
  
        
      }

        

    }
)});
