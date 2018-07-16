// HIDE MENU ON SCROLL

$(document).ready(function () {
    
   var c, currentScrollTop = 0,
       navbar = $('header'),
       top_line = $('.top-line');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
      var d = top_line.outerHeight();
      currentScrollTop = a;
      if (c < currentScrollTop && a > b + b) {
        var height_size = "translateY(-" + d + "px)";
        navbar.css("transform", height_size);
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.css("transform", "translateY(0)");
      }
      c = currentScrollTop;
  });
  
});

// HIDE ZAMOW ICON ON SCROLL
$(document).ready(function () {

    var left_fix_button = $('.left-fixed-buttons .left_fix_button');
    var zamow = $('.left-fixed-buttons .zamow');    

    $(window).scroll(function () {
	    /*Waypoint.refreshAll();*/

      if($(window).scrollTop()) {
         zamow.css("right", "-24rem");
         zamow.addClass("show_on_hover");
      } else {
        zamow.css("right", "0");
        zamow.removeClass("show_on_hover");
    }

  });

});

// ANIMATIONS

(function($) {
  $.fn.animated = function(inEffect, outEffect) {
    $(this).each(function() {
      var ths = $(this);
      ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
          ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
        } else {
          ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
        };
      }, {
        offset: "80%"
      });

      ths.waypoint(function(dir) {
        if (dir === "down") {
          ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
        } else {
          ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: -$(window).height()
      });

    });
  };
})(jQuery);

$(".animation-h1").animated("fadeIn", "fadeOut");
$(".technologie .item_icon img").animated("fadeIn");
$(".technologie_materials .item_icon img").animated("fadeIn");
$(".animate-h1-line-from-right").animated("animationLineFromRight", "animationLineFromRightReverse");
$(".animate-h1-line-from-left").animated("animationLineFromLeft", "animationLineFromLeftReverse");
$(".animate-h1-line-vertical").animated("animationLineFromTop");
$(".tabcontent .angle").animated("fadeIn");
$(".tabcontent .row").animated("fadeIn");

/*$(".red-button div").not(".header-content .red-button div").animated("drawBorder");
$(".red-button div").not(".header-content .red-button div").animated("drawBorder2");*/

$(".aktualnosci .newsletter .newsletter_zapisz div").animated("drawBorderBlack");
$(".aktualnosci .newsletter .newsletter_zapisz div").animated("drawBorder2Black");

$(".fadeIn_img").animated("fadeIn");

var footer_red_line = $('footer');
footer_red_line .waypoint(function() {
  footer_red_line.toggleClass('footer_red_line_block');
}, {offset: '80%'});

 $('.technologie .item_icon').waypoint(function(e) {
    $(this.element).addClass('icon_border');
  }, {offset: '80%'});

$('.technologie_materials .item_icon').waypoint(function(e) {
    $(this.element).addClass('icon_border');
  }, {offset: '80%'});

 $('.animation_arrow').waypoint(function(direction) {
  if (direction == 'down') {
    $(this.element).addClass('draw_nav_arrow');
  } else {
   $(this.element).removeClass('draw_nav_arrow');
 }
}, {offset: '80%'});

  $('#opis .options li').waypoint(function(e) {
    $(this.element).toggleClass('li_draw_after');
  }, {offset: '80%'});

  $('.stratasys_table_sect .custom_table .custom_table_cell , .stratasys_table_sect .custom_table .custom_table_row').waypoint(function(e) {
    $(this.element).toggleClass('draw_table');
  }, {offset: '80%'});

$('.footer-form .form_field').waypoint(function(direction) {
   if (direction === 'down') {
    $(this.element).addClass('label_border');
    }
  }, {offset: '80%'});

$('.footer-form .form_field').waypoint(function(direction) {
   if (direction === 'up') {
    $(this.element).removeClass('label_border');
    }
  }, {offset: '100%'});

$('.contacts_form .form_field').waypoint(function(direction) {
   if (direction === 'down') {
    $(this.element).addClass('label_border');
    }
  }, {offset: '80%'});

$('.contacts_form .form_field').waypoint(function(direction) {
   if (direction === 'up') {
    $(this.element).removeClass('label_border');
    }
  }, {offset: '100%'});

$('.services_form .form_field').waypoint(function(direction) {
   if (direction === 'down') {
    $(this.element).addClass('label_border');
    }
  }, {offset: '80%'});

$('.services_form .form_field').waypoint(function(direction) {
   if (direction === 'up') {
    $(this.element).removeClass('label_border');
    }
  }, {offset: '100%'});

/*$('.stratasys_landing_form .form_field').waypoint(function(direction) {
   if (direction === 'down') {
    $(this.element).addClass('label_border');
    }
  }, {offset: '80%'});

$('.stratasys_landing_form .form_field').waypoint(function(direction) {
   if (direction === 'up') {
    $(this.element).removeClass('label_border');
    }
  }, {offset: '100%'});*/

$('.post_content blockquote').waypoint(function(direction) {
   if (direction === 'down') {
    $(this.element).addClass('draw_quote_line');
    }
  }, {offset: '100%'});

$('.post_content blockquote').waypoint(function(direction) {
   if (direction === 'up') {
    $(this.element).removeClass('draw_quote_line');
    }
  }, {offset: '100%'});

// PARAMETERS DRAW LINES AND CHANGE IMAGES ON HOVER

  $("#parameters li .gray-line-el").animated("drawGrayLine");

  $('#parameters li').hover(function () {
    $('#parameters li .gray-line-el').toggleClass('drawGrayLine');
    $(this).find(".red-line-el").toggleClass('drawRedLine');

  });

  if($("#expandedImg").length) {

    var expandedImgSrc = $('#expandedImg').attr('src');

    $('#parameters li').on('mouseover',function () {
      li_image_src = $(this).find(".li_image").attr('src');
	    $('#expandedImg').addClass('hidden');
	    setTimeout(function () {
		    $('#expandedImg').attr('src', li_image_src).removeClass('hidden');
	    }, 200);
    });
  }

// RED BUTTON ANIMATIONS
 $(document).ready(function () {

$('.red-button div').not(".header-content .red-button div , .stratasys_landing_form .red-button div").waypoint(function(direction) {

   if (direction == 'down') {

    $(this.element).addClass('drawBorder');

  } else {

    $(this.element).removeClass('drawBorder');
    
  }
}, {offset: '95%'});


 $('.red-button div').not(".header-content .red-button div , .stratasys_landing_form .red-button div").waypoint(function(direction) {

   if (direction == 'down') {

    $(this.element).addClass('drawBorder2');

  } else {

    $(this.element).removeClass('drawBorder2');
    
  }
}, {offset: '95%'});

    $('.red-button div').hover(function () {
      $(this).addClass('border_button');
    });

    $('.red-button div').waypoint(function(direction) {
      if (direction !== 'down') {
        $(this.element).removeClass('border_button');
      } 
    }, {offset: '95%'});



    $('.aktualnosci .newsletter .newsletter_zapisz div').hover(function () {
      $(this).addClass('border_button');
    });

    $('.aktualnosci .newsletter .newsletter_zapisz div').waypoint(function(direction) {
      if (direction !== 'down') {
        $(this.element).removeClass('border_button');
      } 
    }, {offset: '95%'});

});

$(document).ready(function(){

    setTimeout(function(){
       $(".header-content_button div").addClass("animated drawBorder drawBorder2");
   }, 2000);

     setTimeout(function(){
       $(".stratasys_landing_form .red-button div").addClass("animated drawBorder drawBorder2");
   }, 1500);

     setTimeout(function(){
       $(".header-content_title div").addClass("animate-h1-line-from-left");
     }, 2000);

     setTimeout(function(){
       $(".stratasys_landing_form .form_field").addClass("label_border");
     }, 1500);

});

// BOTTOM NAV MENU FUNCTIONS

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.bottom-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.bottom-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.bottom-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// Stop bottom nav before footer
$(document).scroll(function() {
    checkOffset();
});

function checkOffset() {
  if($(".bottom-nav").length) {
    if($('.bottom-nav').offset().top + $('.bottom-nav').height() >= $('footer').offset().top - 10)
        $('.bottom-nav').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
        $('.bottom-nav').css('position', 'fixed'); // restore when you scroll up
    }
}

//PAGE PROGRESS
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $('#myBar').width(scrolled + "%");
}

// HEADER PARALLAX EFFECT

  $(window).scroll(function() {
    var st = $(this).scrollTop();
    $(".background_parallax").css({
      "transform" : "translate(0%, " + st / 20 + "%"
    });

    $(".header_einscan .header_form_2_printer").css({
      "transform" : "translate(0%, " + st / 20 + "%"
    });
  });

// CUSTOM SELECT FOR FILTER

$(".customed-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="customed-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="customed-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});

$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});

$(".customed-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".customed-select").removeClass("opened");
  });
  $(this).parents(".customed-select").toggleClass("opened");
  event.stopPropagation();
});

$(".custom-option").on("click", function() {
  $(this).parents(".customed-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".customed-select").removeClass("opened");
  $(this).parents(".customed-select").find(".customed-select-trigger").text($(this).text());
});

// ACCORDION

(function($) {

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.accord_content');

        $(this).closest('.accordion').find('.accord_content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

$(".hide_content_section .tabcontent_usluga .close_tab_usluga").click( function() {
	$(this).closest(".tabcontent_usluga").slideUp({duration: 400});
});


$(".technologia_tabs .technologia_item_tab .arrow").click( function () {
	$(this).parent().find(".icon_block").addClass("active");
});

$(".technologia_tabs .technologia_item_tab .arrow").hover( function () {
	$(this).parent().find(".icon_block").mouseover();
});

$(".services_technologia .technolohia_tab_open .close_technolokia_tab").click( function() {
	$(this).closest(".technolohia_tab_open").slideUp({duration: 400});
	$(".technologia_tabs .technologia_item_tab .technologia_click_to_open").removeClass("active");
});


var techno_elements_clicked = $(".technolohia_tab_open_tabs .defaultOpen");
for(var i = 0; i < techno_elements_clicked.length; i++) {
	techno_elements_clicked[i].click();
}

$('.stratasys_block_with_comp__nav a').click(function (e) {
    e.preventDefault();
	$('.stratasys_block_with_comp__nav a').removeClass('active');
	$(this).addClass('active');
});
