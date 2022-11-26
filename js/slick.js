$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,

    responsive: [
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              
            }
          },
          
    ]
});
