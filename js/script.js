document.addEventListener('DOMContentLoaded', () => {

    // Выбор элементов на странице
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.mobilemenu'),
          closeModal = document.querySelector('.close'),
          modalDialog = document.querySelector('.modal')
          btnBron = document.querySelectorAll('.def__btn'),
          btnClose = document.querySelector('.modal__close'),
          bgFlow = document.querySelector('.modal__overlay'), // белая подложка
          sections = document.querySelectorAll('section'),
         
          // получаем ссылки для переходов
          whySection = document.querySelectorAll('.whysection'),
          nomeraSection = document.querySelectorAll('.nomera'),
          otziviSection = document.querySelectorAll('.otzivi'),
          poiskSection = document.querySelectorAll('.poisk')



    //вызываем меню по клику на гамбургер
    hamburger.addEventListener('click', () => {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('Test');
    });

    //закрываем меню
    closeModal.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    })

    
    // кнопки вызова окна забронировать с помощью цикла forEach
    btnBron.forEach(btn => {
      btn.addEventListener('click', openModal)
    })


    // функция открытия модального окна 
    function openModal(event) {
      event.preventDefault()
      document.body.style.overflow = 'hidden'
      modalDialog.classList.add('show')
      bgFlow.classList.add('active')
      console.log('click')
    }

  

    //кнопка закрытия окна забронировать 
    btnClose.addEventListener('click', () =>{
      modalDialog.classList.remove('show') // удаляем класс появления окна
      bgFlow.classList.remove('active') // удалаем подложку белую
      document.body.style.overflow = ''
      console.log('click')
    })

    // - 1 Переход к секции (ПОЧЕМУ МЫ)
    whySection.forEach(elem =>  
      elem.addEventListener('click', prokrutkaWhy)
    )
   

    function prokrutkaWhy (event) { 
      event.preventDefault()
      const srollHeight = sections[2].getBoundingClientRect().top
      window.scrollBy ({ 
        top: srollHeight,
        behavior: 'smooth'
    })
    } 
    
    //-2 Переход к секции (НОМЕРА)
    nomeraSection.forEach(elem => {
      elem.addEventListener('click', prokrutkaNumber)
    })
   

    function prokrutkaNumber(event) {
      event.preventDefault()
      const srollHeight = sections[3].getBoundingClientRect().top
      window.scrollBy ({ 
        top: srollHeight,
        behavior: 'smooth'
    })  
    }

    //-3 Переход к секции (ОТЗЫВЫ)
    otziviSection.forEach(elem => {
      elem.addEventListener('click', prokrutkaOtzivi)
    })
   
    function prokrutkaOtzivi(event) {
      event.preventDefault()
      const srollHeight = sections[4].getBoundingClientRect().top
      window.scrollBy ({ 
        top: srollHeight,
        behavior: 'smooth'
    })  
    }

    //-3 Переход к секции (Как нас найти)
    poiskSection.forEach(elem => {
     elem.addEventListener('click', prokrutkaPoisk)
    })
 
    function prokrutkaPoisk(event) {
      event.preventDefault()
      const srollHeight = sections[5].getBoundingClientRect().top
      window.scrollBy ({ 
        top: srollHeight,
        behavior: 'smooth'
    })  
    }    

  
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
