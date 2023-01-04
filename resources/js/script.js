//SCROLL ACTIVE NAVBAR

$(document).ready(function () {
            //FILTER ITEM JS
            var mixer = mixitup('.filter-item');
    
            //Smooth scrolling when click to nav
            $('.menu ul li a, .menu-item a').click(function (e) {
                e.preventDefault();
                var curLink = $(this);
                var scrollPoint = $(curLink.attr('href')).position().top;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 800);
                
                return false
                
            })

            $(window).scroll(function () {
                onScrollHandle();
            });         

            function onScrollHandle() {
                //Navbar shrink when scroll down
                $("nav").toggleClass("sticky", $(this).scrollTop() > 650);
                

                $('.menu li a').click(function(){
                    $('.menu li a').removeClass("active");
                    $(this).addClass("active");
                });
                
            }
        });

function openNav() {
    document.getElementById("menu-item-box").style.width = "100%";
}
function closeNav() {
    document.getElementById("menu-item-box").style.width = "0%";
}
