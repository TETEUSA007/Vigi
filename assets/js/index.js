var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  document.querySelector('.toggle-button').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');  

    var listIcon = document.querySelector('.toggle-button .bi-list');
    var xIcon = document.querySelector('.toggle-button .bi-x');
    
    if (document.querySelector('.navbar').classList.contains('show')) {
      listIcon.style.display = 'none';
      xIcon.style.display = 'block';
    } else {
      listIcon.style.display = 'block';
      xIcon.style.display = 'none';
    }
  });

  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -23.5505201, lng: -46.6333096 }, // Exemplo de localização
      zoom: 13,
    });
  }