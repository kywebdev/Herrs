import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

//import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependancies';
window.libs = libs;

$(document).foundation();

libs.AOS.init();

// SVG Injector
// Elements to inject
var mySVGsToInject = document.querySelectorAll('img.inject-me');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png'
};

var afterAllInjectionsFinishedCallback = function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
};

var perInjectionCallback = function (svg) {
  // Callback after each SVG is injected
  console.log('SVG injected: ' + svg);
};

// create injector configured by options
var injector = new libs.svgInjector(injectorOptions);

// Trigger the injection
injector.inject(
  mySVGsToInject,
  afterAllInjectionsFinishedCallback,
  perInjectionCallback
);

// slick carousel
$(".fullproductlist .productList").slick({
  // normal options...
  prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/left-arrow.png'>",
  nextArrow: "<img class='a-right control-c next slick-next' src='assets/img/right-arrow.png'>",
  infinite: true,
  rows: 1,
  slidesPerRow: 1,
  slidesToShow: 4,
  dots: false,
  focusOnSelect: true,
  swipeToSlide: true,
  responsive: [{
      breakpoint: 1074,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// tablesaw table plugin
$(function () {
  $(document)
    .foundation()
    .trigger('enhance.tablesaw');
});

var TablesawConfig = {
  swipeHorizontalThreshold: 15
};

/////////////////////////////////Product Slider///////////////////////
$('.fullproductlist .productList .product').hover(function () {
  var productBag = $(this);
  var randRotate = Math.floor(Math.random() * 10);
  var yAmount = 40;
  if (Math.random() >= 0.5) {
    randRotate *= -1;
  }
  productBag.siblings('.productShadow').stop().fadeIn();
  TweenMax.to(productBag, 0.4, {
    css: {
      transform: "translateY(-" + yAmount + "px) rotate(" + randRotate + "deg)"
    }
  });
}, function () {
  var productBag = $(this);
  productBag.siblings('.productShadow').stop().fadeOut();
  TweenMax.to(productBag, 0.4, {
    css: {
      transform: "translateX(0px) rotate(0deg)"
    }
  });
});

$('.similar-products-slider .productList .product').hover(function () {
  var productBag = $(this);
  var randRotate = Math.floor(Math.random() * 10);
  var yAmount = 40;
  if (Math.random() >= 0.5) {
    randRotate *= -1;
  }
  productBag.siblings('.productShadow').stop().fadeIn();
  TweenMax.to(productBag, 0.4, {
    css: {
      transform: "translateY(-" + yAmount + "px) rotate(" + randRotate + "deg)"
    }
  });
}, function () {
  var productBag = $(this);
  productBag.siblings('.productShadow').stop().fadeOut();
  TweenMax.to(productBag, 0.4, {
    css: {
      transform: "translateX(0px) rotate(0deg)"
    }
  });
});


////////////////////////////////timeline new////////////
$(function () {
  $('.timeline-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.timeline-slider',
    centerMode: true,
    focusOnSelect: true,
    mobileFirst: true,
    arrows: false,
    infinite: false,
    rows: 0,
    responsive: [{
        breakpoint: 776,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.timeline-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    arrows: false,
    asNavFor: '.timeline-nav',
    cssEase: 'ease-out',
    edgeFriction: 10,
    mobileFirst: true,
    speed: 500,
    infinite: false,
    rows: 0,
    responsive: [{
        breakpoint: 2100,
        settings: {
          centerMode: true,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          rows: 0,
          centerPadding: '0px',
          mobileFirst: true,
        }
      }
    ]
  });

});

/////////////////Timeline mobile nav////////////////
$('li[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.timeline-nav').slick('slickGoTo', slideno - 1);
});

///////////////////////////ECO Slider////////////////////

$(function () {
  $('.ecology-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.eco-slider',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    mobileFirst: false,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    rows: 0,
    // responsive: [{
    //     breakpoint: 776,
    //     settings: {
    //       slidesToShow: 4,
    //     }
    //   },
    //   {
    //     breakpoint: 0,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 2,
    //     }
    //   }
    // ]
  });

  $('.ecology-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    dots: false,
    asNavFor: '.eco-slider',
    cssEase: 'ease-out',
    edgeFriction: 0,
    mobileFirst: true,
    speed: 500,
    infinite: true,
    adaptiveHeight: true,
    rows: 0,
  });

  $('.ecology-nav__mobile').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '0px',
    arrows: false,
    dots: false,
    asNavFor: '.eco-slider',
    cssEase: 'ease-out',
    edgeFriction: 0,
    mobileFirst: true,
    speed: 500,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    rows: 0,
  });

});

/////////////////Timeline mobile nav////////////////
$('li[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.ecology-nav').slick('slickGoTo', slideno - 1);
});








//////////////////////////////////////////PRODUCT SLIDER///////////////////////////
// var currentProduct = 0;
// $(document).ready(function() {


//     currentProduct = $('.productDetailsContainer:first-of-type').attr('data-productid');

//     var firstProductFamily = $('.productDetailsContainer:first-of-type').attr('data-brandfamily');

//     $('#brandfamilies .brandfamily[data-familyname="' + firstProductFamily + '"]').addClass('active');

//     $('#brandfamiliesMobile .brandfamily').val(firstProductFamily);

//     $('#brandfamilies .brandfamily').click(function() {
//         $('#brandfamilies .brandfamily').removeClass('active');
//         $(this).addClass('active');
//         var selectedFamily = $(this).attr('data-familyname');
//         $('#fullproductlist .product[data-brandfamilies="' + selectedFamily + '"]').first().trigger('click');
//         $('html, body').animate({
//             scrollTop: $("#brandfamilies").offset().top - 100
//         }, 600);
//     });


//     $('#brandfamiliesMobile').on('change', function() {
//         var selectedFamily = $('#brandfamiliesMobile option:selected').attr('data-familyname');
//         var scrollPosition = 0;
//         $('#fullproductlist .product[data-brandfamilies="' + selectedFamily + '"]').first().trigger('click');
//     });



//         $('#fullproductlist .productList').slick({
//             infinite: true,
//             rows: 1,
//             slidesPerRow: 7,
//             slidesToShow: 7,
//             dots: false,
//             focusOnSelect: true,
//             swipeToSlide: true,
//             responsive: [{
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesPerRow: 2,
//                     rows: 2
//                 }
//             }]
//         });




//     $('#fullproductlist .productList .product').on('click', function() {
//         var slideNumb = $(this).attr('data-index');
//         var scrollPosition = 0;
//         $('.productDetailsList').slick('slickGoTo', slideNumb);
//         if ($('#brandfamilies:visible').length) {
//             scrollPosition = $("#brandfamilies:visible").offset().top - 100;
//         } else {
//             scrollPosition = $(".productDetailsList").offset().top;
//         }
//         $('html, body').animate({
//             scrollTop: scrollPosition
//         }, 600);
//     });




//     if (!!('ontouchstart'in window)) {} else {
//         $('#fullproductlist .productList .product').hover(function() {
//             var productBag = $(this);
//             var randRotate = Math.floor(Math.random() * 10);
//             var yAmount = 5;
//             if (Math.random() >= 0.5) {
//                 randRotate *= -1;
//             }
//             productBag.siblings('.productShadow').stop().fadeIn();
//             if (windowWidth > 600) {
//                 yAmount = 40;
//             }
//             TweenMax.to(productBag, 0.4, {
//                 css: {
//                     transform: "translateY(-" + yAmount + "px) rotate(" + randRotate + "deg)"
//                 }
//             });
//         }, function() {
//             var productBag = $(this);
//             productBag.siblings('.productShadow').stop().fadeOut();
//             TweenMax.to(productBag, 0.4, {
//                 css: {
//                     transform: "translateX(0px) rotate(0deg)"
//                 }
//             });
//         });
//     }


//     var initialSlide = $('.productDetailsList').attr('data-initialslide');


//     var initialSlideIndex = $('.productDetailsList .productDetailsContainer[data-productid="' + initialSlide + '"]').index();


//     if ($('.productDetailsContainer').length > 1) {
//         $('.productDetailsList').slick({
//             infinite: true,
//             slidesToShow: 1,
//             dots: false,
//             centerMode: true,
//             variableWidth: false,
//             initialSlide: initialSlideIndex
//         });
//     }


//     $('.productDetailsList').on('afterChange', function() {
//         var productId = $('.productDetailsContainer.slick-active').attr('data-productid');
//         currentProduct = productId;
//         $.ajax({
//             url: '/customservices/product/productinfo.svc/' + productId,
//             dataType: 'json',
//             type: 'GET',
//             success: function(data) {
//                 if (data.Guid != '00000000-0000-0000-0000-000000000000') {
//                     if (history.pushState) {
//                         history.pushState('', '', '/snacks/product-page' + data.FullURL);
//                     }
//                     document.title = data.Title;
//                 } else {}
//             }
//         });
//     });


//     $('.productDetailsContainer').width($('.productDetailsList').width());
// });
// });


// homepage slider
$('.homepage-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
});

// news img slider
$('.news-img-slider').slick({
    arrows: true,
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    touchThreshold: 100,
    draggable: false,
    asNavFor: '.news-text-slider',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
            {
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// news text slider
$('.news-text-slider').slick({
    arrows: false,
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    touchThreshold: 100,
    draggable: false,
    asNavFor: '.news-img-slider',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
            {
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
            }
        }
      
    ]
});

// similar recipes slider
$('.recipes-slider').slick({
    arrows: true,
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    touchThreshold: 100,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
            {
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
            }
        }
      
    ]
});

// tour badge
$('.tour-badge__closed').on('click', function (e) {
    e.preventDefault();
    $('.tour-badge__open').css('display', 'block');
    $('.tour-badge__closed').css('display', 'none');
    Cookies.remove('tourBadgeClosedOn');
});
$('.tour-badge__open .open-state__hide-badge').on('click', function (e) {
    e.preventDefault();
    $('.tour-badge__closed').css('display', 'block');
    $('.tour-badge__open').css('display', 'none');
    Cookies.set('tourBadgeClosedOn', "closed");
});

// toggle sidebar sections
$(".view-by").on('click',function(e) {
    e.preventDefault();
    if ($(this).parent().children('.filters').hasClass('closed')) {
        $(this).parent().children('.filters').addClass('open');
        $(this).parent().children('.filters').removeClass('closed');
    } else {
        $(this).parent().children('.filters').addClass('closed');
        $(this).parent().children('.filters').removeClass('open');
    }
    $(this).toggleClass('arrow-up');
});

// load more sections (products)
var size_li = $(".products .list .section").length;
var x=3;
$('.products .list .section:lt('+x+')').addClass('show');
$('.products .loadMore').on('click', function(e) {
    e.preventDefault();
    x= (x+3 <= size_li) ? x+3 : size_li;
    $('.products .list .section:lt('+x+')').addClass('show').removeClass('hide');
    $('.fullproductlist .productList').slick('unslick');
    $(".fullproductlist .productList").slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='assets/img/right-arrow.png'>",
        infinite: true,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 4,
        dots: false,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1074,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    if(x == size_li){
        $('.products .loadMore').hide();
    }
});

// filter sections
$(".filters :checkbox").click(function() {
$(".filtering-container .main-content .section").addClass('hide').removeClass('show');
$(".filters :checkbox:checked").each(function() {
    $("." + $(this).val()).addClass('show').removeClass('hide');
    $(".loadMore").show();
});
var checked = $('.sidebar').find(':checked').length;
if (!checked)
    $(".filtering-container .main-content .section").addClass('show').removeClass('hide');
    $(".loadMore").hide();
    $('.fullproductlist .productList').slick('unslick');
    $(".fullproductlist .productList").slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='assets/img/right-arrow.png'>",
        infinite: true,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 4,
        dots: false,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1074,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// filter products slider
/*$(".filters :checkbox").click(function() {
var selected = $('.similar-products-slider .slide-content');
selected.addClass('hide').removeClass('show');
$(".filters :checkbox:checked").each(function() {
    $("." + $(this).val()).addClass('show').removeClass('hide');
});
var checked = $('form').find(':checked').length;
if (!checked)
selected.addClass('show').removeClass('hide');
    $('.productList').slick('unslick');
    $(".productList").slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='assets/img/right-arrow.png'>",
        infinite: true,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 6,
        dots: false,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1074,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});*/

var filtered = false;

$('.filters :radio#all').on('click', function(){
    $('.productList').slick('slickUnfilter');
    $('.productList').slick('slickFilter', $('.all').parent().parent());
    filtered = true;
});
$('.filters :radio#brand1').on('click', function(){
    $('.productList').slick('slickUnfilter');
    $('.productList').slick('slickFilter', $('.herrs').parent().parent());
    filtered = true;
});
$('.filters :radio#brand2').on('click', function(){
    $('.productList').slick('slickUnfilter');
    $('.productList').slick('slickFilter', $('.good').parent().parent());
    filtered = true;
});
$('.filters :radio#brand3').on('click', function(){
    $('.productList').slick('slickUnfilter');
    $('.productList').slick('slickFilter', $('.golite').parent().parent());
    filtered = true;
});
$('.filters :radio#brand4').on('click', function(){
    $('.productList').slick('slickUnfilter');
    $('.productList').slick('slickFilter', $('.flavor').parent().parent());
    filtered = true;
});
$('.filters :radio#brand5').on('click', function(){
    $('.productList').slick('slickUnfilter');
    $('.productList').slick('slickFilter', $('.cheyenne').parent().parent());
    filtered = true;
});



// toggle checked class on a label's input when clicked
$('label').on('click', function() {
    $(this).parent().children('input').toggleClass('checked');
});

// load more sections (recipes)
var size_li2 = $(".recipes .section").length;
var x2=8;
$('.recipes .section:lt('+x2+')').addClass('show');
$('.recipes .loadMore').on('click', function(e) {
    e.preventDefault();
    x2= (x2+5 <= size_li2) ? x2+5 : size_li2;
    $('.recipes .section:lt('+x2+')').addClass('show').removeClass('hide');
    if(x2 == size_li2){
        $('.recipes .loadMore').hide();
    }
});

// load more sections (news)
var size_li3 = $(".news .section").length;
var x3=6;
$('.news .section:lt('+x3+')').addClass('show');
$('.news .loadMore').on('click', function(e) {
    e.preventDefault();
    x3= (x3+6 <= size_li3) ? x3+6 : size_li3;
    $('.news .section:lt('+x3+')').addClass('show').removeClass('hide');
    if(x3 == size_li3){
        $('.news .loadMore').hide();
    }
});

// similar products slider
$(".similar-products-slider .productList").slick({
  infinite: true,
  rows: 1,
  slidesPerRow: 1,
  slidesToShow: 6,
  dots: false,
  arrows: true,
  swipeToSlide: true,
  responsive: [{
      breakpoint: 1074,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// add focus class to label
$('input, select, textarea').focus(function() {
    $(this).parent().children('label').addClass('focus');
});
$('input, select, textarea').blur(function() {
    $(this).parent().children('label').removeClass('focus');
});

// change select font color when the user chooses an option
$('select').on('change', function() {
    $(this).css('color', '#333333');
})

// move sidebar sections to refine modal
function moveSidebarSections(width) {
    if (width <= 1059) {
        $(".filtering-container .sidebar .sidebar-section").prependTo(".refine-modal__modal-content .sidebar");
    } else {
        $(".refine-modal__modal-content .sidebar .sidebar-section").prependTo(".filtering-container .sidebar");
    }
}
moveSidebarSections( $(window).width() );
    $(window).on('resize', function(){
        moveSidebarSections( $(this).width() );
});