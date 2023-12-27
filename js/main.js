const swiper = new Swiper('.swiper', {
      // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  slidesPerGroup:1,
  spaceBetween: 24,
    
    // Navigation arrows
    navigation: {
        nextEl: '.myslider-next',
        prevEl: '.myslider-prev',
      },
  
  });