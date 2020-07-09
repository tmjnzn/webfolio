
/*menu auf / zu*/

$(document).ready(function() {
	$('.menu-btn').on('click', function() {
    $('.menu').delay(300).fadeToggle(300);
	});
});

let menuOpen = false;
$(document).ready(function() {
	$('.menu a').on('click', function() {
    menuBtn.classList.add('close') /*lösung*/
	$('.menu').fadeToggle(300);

/*menu auf / zu*/

/*burger animation*/  

  const burger = document.querySelector('.menu-btn');
  menuBtn.classList.remove('open');    
  $('body').removeClass('noscroll');
  menuOpen = false;
});
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
        $('body').addClass('noscroll');
        menuBtn.classList.remove('close') /*lösung*/
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
        $('body').removeClass('noscroll');
        menuBtn.classList.add('close') /*lösung*/
        menuOpen = false;
	}
});

/*burger animation*/ 


$(window).on('beforeunload', function() {
	$('body').hide();
	$(window).scrollTop(0);
  });

var showMenu = false;

  function toggleMenu() {
    if (!showMenu) {
        showMenu = true;
        $('.chapter[data-visible]').each(function () {
            $(this).fadeOut(300);
        })
        $("#menu").delay(300).fadeToggle(300);
    } else {
        showMenu = false;
        $("#menu").delay(300).fadeToggle(300);
        setHeader();
    }
}

function setHeader() {
    var scrollTop = $(this).scrollTop();
    var firstVisible = undefined;
    $('.chapter[data-visible]').each(function () {
        let elem = $("#" + $(this).data('visible'));
        if ((elem.offset().top + 500>= scrollTop) && (firstVisible === undefined)) {
            firstVisible = $(this);
        }
    });
    $('.chapter[data-visible]').hide();
    if (firstVisible)
        firstVisible.show();
}

$(window).scroll(()=>setHeader());






var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$('label.btn').on('click','input', function(e){
    e.stopPropagation();
    $(this).attr('checked', !$(this).attr('checked'));
    $(e.target).closest('label').toggleClass('btn-flat');
  }); 


/*contact*/  

$(document).ready(function() {
	$('.message').on('click', function() {
    $('.contact-frame').fadeToggle(300);
    $('.contact2-frame').delay(300).fadeToggle(600);
    $('.write-message').toggleClass();
	});
});

$(document).ready(function() {
	$('.resume11').on('click', function() {
    $('.contact-frame').fadeToggle(300);
    $('.contact2-frame').delay(300).fadeToggle(600);
    $('.req-resume').toggleClass();
	});
});

$(document).ready(function() {
	$('.portfolio').on('click', function() {
    $('.contact-frame').fadeToggle(300);
    $('.contact2-frame').delay(300).fadeToggle(600);
    $('.req-portfolio').toggleClass();
	});
});

/*contact*/  