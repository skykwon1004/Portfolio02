$(function () {

    // mainSlide
    $('.mainSlide').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_pro_slide').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
    });

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    });

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    });


    
    // footer f_link
    $('#f_link').on('change', function () {
        // console.log('change', $(this).val());
        var link = $(this).val();
        link && window.open(link) 
        // if 간단하게 쓰는방법
    })
        

})
