/*menu auf / zu*/
var checkboxMsg = false;
$(document).ready(function () {
    $('.menu-btn').on('click', function () {
        if (!messageFormClosed) {
            toggleForm(currentFormName)
        } else {
            $('.menu').delay(300).fadeToggle(300);
        }
    });
});

let menuOpen = false;
$(document).ready(function () {
    if (messageFormClosed) {
        $('.menu a').on('click', function () {
            menuBtn.classList.add('close') /*lösung*/
            $('.menu').fadeToggle(300);

            /*menu auf / zu*/

            /*burger animation*/

            const burger = document.querySelector('.menu-btn');
            menuBtn.classList.remove('open');
            $('body').removeClass('noscroll');
            menuOpen = false;
        });
    }
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    if (messageFormClosed) {
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
    }
});

/*burger animation*/


$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0);
});

var showMenu = false;

function toggleMenu() {
    if (messageFormClosed) {
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
}

function setHeader() {
    var scrollTop = $(this).scrollTop();
    var firstVisible = undefined;
    $('.chapter[data-visible]').each(function () {
        let elem = $("#" + $(this).data('visible'));
        if ((elem.offset().top + 500 >= scrollTop) && (firstVisible === undefined)) {
            firstVisible = $(this);
        }
    });
    $('.chapter[data-visible]').hide();
    if (firstVisible)
        firstVisible.show();
}

$(window).scroll(() => setHeader());


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
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$('label.btn').on('click', 'input', function (e) {
    e.stopPropagation();
    $(this).attr('checked', !$(this).attr('checked'));
    $(e.target).closest('label').toggleClass('btn-flat');
});


/*contact*/
var messageFormClosed = true
var currentFormName = undefined;

function toggleForm(formName) {
    if (messageFormClosed) {
        currentFormName = formName;
        $('.contact-frame').fadeToggle(300);
        $('.contact2-frame').delay(300).fadeToggle(300);
        $(formName).toggle();
        menuBtn.classList.add('open');
        $('body').addClass('noscroll');
        menuBtn.classList.remove('close') /*lösung*/
    } else {
        $('.contact-frame').delay(300).fadeToggle(300);
        $('.contact2-frame').fadeToggle(300);
        $(formName).toggle();
        menuBtn.classList.add('close');
        $('body').removeClass('noscroll');
        menuBtn.classList.remove('open') /*lösung*/
        setTimeout(function () {
            $('.checked').removeClass("checked")
        }, 400);
    }
    messageFormClosed = !messageFormClosed;
};

function evaluateDocuments() {
    let resumeChecked = $('#checkboxResume').hasClass("checked");
    let portfolieChecked = $('#checkboxPortfolio').hasClass("checked");
    $(currentFormName).toggle();
    //Resume
    if (resumeChecked && !portfolieChecked) {
        currentFormName = '.req-resume'
        $('.req-resume').toggle();
    }
    //Portfolie
    else if (!resumeChecked && portfolieChecked) {
        currentFormName = '.req-portfolio'
        $('.req-portfolio').toggle();
    }
    //Resume und PF
    else if (resumeChecked && portfolieChecked) {
        currentFormName = '.req-resume-portfolio'
        $('.req-resume-portfolio').toggle();
    }
    //Message
    else {
        currentFormName = '.write-message'
        $('.write-message').toggle();
    }
}

/*contact*/  