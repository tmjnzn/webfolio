/*menu auf / zu*/

var checkboxMsg = false;

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
$(document).ready(function () {
    $('#links a').on('click', function () {
        menuBtn.classList.add('close')
        $('.menu').fadeToggle(300);
        menuBtn.classList.remove('open');
        $('body').removeClass('noscroll');
        menuOpen = false;
    });
});


$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0);
});


var showMenu = false;
var scrollDisabled = false

function togglePage(name) {
    $('.page').fadeOut(300);
    $('.' + name).delay(300).fadeIn(300);
    $('.footer').fadeOut(300);
    $('.footer').fadeIn(300);
}

function toggleMenu(name) {
    if (messageFormClosed) {
        if (!showMenu) {
            visibleHeaderName = undefined
            showMenu = true;
            $('.chapter[data-visible]').each(function () {
                $(this).fadeOut(300);
            })
            $("#menu").delay(300).fadeToggle(300);
        } else {
            scrollDisabled = true
            setTimeout(() => {
                scrollDisabled = false
            }, 1000)
            showMenu = false;
            $("#menu").fadeToggle(300);
            if (name)
                setTimeout(() => {
                    $("#" + name).fadeIn(300)
                }, 300)
            else {
                setTimeout(() => setHeader(), 300)
            }
        }
    }

}


var messageImpClosed = true

function menuBtnClick() {

    if (messageImpClosed) {

        if (messageProjectClosed) {
            {

                if (messageFormClosed) {
                    toggleMenu(undefined);
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
                if (!messageFormClosed) {
                    toggleForm(currentFormName)
                } else {
                    $('.menu').fadeToggle(300);
                }
            }
        } else {
            $('.work').delay(300).fadeToggle(300);
            $('.project').fadeToggle(300);
            $('.slideshow').fadeToggle(300);

            $('#' + currentProjectName).toggle();
            $('body').removeClass('noscroll');
            $('.chapter #menu').toggle();
            $('#' + currentProjectName + 'Header').fadeToggle(300);
            messageProjectClosed = true;
            menuBtn.classList.add('close');
            $('body').removeClass('noscroll');
            menuBtn.classList.remove('open')
            setTimeout(() => setHeader(), 300)
            currentProjectName = undefined
        }

    } else {
        $('#impHeader').fadeToggle(300);
        $('.imprint').fadeToggle(300);
        $('.menu').fadeToggle(300);
        $('.chapter #menu').toggle();
        $('.menu-overlay').delay(300).fadeToggle(300);
        $('body').removeClass('noscroll');
        menuBtn.classList.add('close');
        menuBtn.classList.remove('open');
        setTimeout(() => setHeader(), 300);
        messageImpClosed = true
        menuOpen = false;
        showMenu = false
    }

}


var visibleHeaderName = undefined

function setHeader() {
    if (messageProjectClosed) {
        var scrollTop = $(this).scrollTop();
        var firstVisible = undefined;
        $('.chapter[data-visible]').each(function () {
            let elem = $("#" + $(this).data('visible'));
            if ((elem.offset().top + 500 >= scrollTop) && (firstVisible === undefined)) {
                firstVisible = $(this);
            } else {
                $(this).hide();
            }
        });
        if (firstVisible && firstVisible.attr("data-visible") !== visibleHeaderName) {
            firstVisible.fadeIn(300);
            visibleHeaderName = firstVisible.attr("data-visible");
        }
    }
}

$(window).scroll(() => {
    if (!scrollDisabled)
        setHeader();
});


/*work*/

var messageProjectClosed = true
var currentProjectName

function toggleProject(projectName) {
    if (messageProjectClosed) {
        $('.work').fadeToggle(300);
        $('.project').delay(300).fadeToggle(300);
        $('#' + projectName).toggle();
        openSlideShow(projectName);
        $('body').addClass('noscroll');
        $('.chapter[data-visible]').each(function () {
            $(this).fadeOut(300);
        })
        $('.chapter #menu').toggle();
        $('#' + projectName + 'Header').delay(300).fadeToggle(300);
        menuBtn.classList.add('open');
        menuBtn.classList.remove('close');
        currentProjectName = projectName
        visibleHeaderName = undefined
    }
    messageProjectClosed = false;
};


/*slideshow*/

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var currentSlideShow;
var slideIndex = 1;

function openSlideShow(name) {
    currentSlideShow = name;
    slideIndex = 1
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = $("#" + currentSlideShow + " .slides");
    var dots = $("#" + currentSlideShow + " .dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides.fadeOut(300)
    dots.removeClass("active").delay(300).fadeIn(300)
    $(slides.get([slideIndex - 1])).delay(300).fadeIn(300)
    $(dots.get(slideIndex - 1)).addClass("active").fadeIn(300);
}


/*contact*/

var messageFormClosed = true
var currentFormName = undefined;

function toggleForm(formName) {
    if (messageFormClosed) {
        currentFormName = formName;
        $('.contact').fadeToggle(300);
        $('.request').delay(300).fadeToggle(300);
        $(formName).toggle();
        menuBtn.classList.add('open');
        menuBtn.classList.remove('close')
    } else {
        $('.contact').delay(300).fadeToggle(300);
        $('.request').fadeToggle(300);
        $(formName).fadeToggle(300);
        menuBtn.classList.add('close');
        menuBtn.classList.remove('open')
        setTimeout(function () {
            $('.checked').removeClass("checked")
        }, 400);
    }
    messageFormClosed = !messageFormClosed;
};


/*form*/

$('label.btn').on('click', 'input', function (e) {
    e.stopPropagation();
    $(this).attr('checked', !$(this).attr('checked'));
    $(e.target).closest('label').toggleClass('btn-flat');
});

function evaluateDocuments() {
    let resumeChecked = $('#checkboxResume').hasClass("checked");
    let portfolieChecked = $('#checkboxPortfolio').hasClass("checked");
    $(currentFormName).fadeToggle();
    //Resume
    if (resumeChecked && !portfolieChecked) {
        currentFormName = '.req-resume'
        $('.req-resume').fadeToggle(300);
        $('.form-2').fadeIn(300);
        $('.form-3').fadeOut(300);
        $('.form-1').fadeOut(300);
    }
    //Portfolie
    else if (!resumeChecked && portfolieChecked) {
        currentFormName = '.req-portfolio'
        $('.req-portfolio').fadeToggle(300);
        $('.form-3').fadeIn(300);
        $('.form-1').fadeOut(300);
        $('.form-2').fadeOut(300);
    }
    //Resume und PF
    else if (resumeChecked && portfolieChecked) {
        currentFormName = '.req-resume-portfolio'
        $('.req-resume-portfolio').fadeToggle(300);
        $('.form-3').fadeIn(300);
        $('.form-1').fadeOut(300);
        $('.form-2').fadeOut(300);
    }
    //Message
    else {
        currentFormName = '.write-message'
        $('.write-message').fadeToggle(300);
        $('.form-1').fadeIn(300);
        $('.form-2').fadeOut(300);
        $('.form-3').fadeOut(300);

    }
}


/*impressum*/

$(document).ready(function () {
    $('#imprint a').on('click', function () {
        $('#impHeader').delay(300).fadeToggle(300);
        $('#menu').fadeToggle(300);
        $('.imprint').delay(300).fadeToggle(300);
        $('.menu-overlay').fadeToggle(300);
        messageImpClosed = !messageImpClosed;
    });
});