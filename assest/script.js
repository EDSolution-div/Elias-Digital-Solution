const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const featureElements = document.querySelectorAll('.feature');
featureElements.forEach((el) => observer.observe(el));

var menu = document.getElementById('bar')
var item = document.getElementById('item')

item.style.right = '-300px';
menu.onclick = function() {
    /* body...*/
    if(item.style.right == '-300px') {
        item.style.right = '0';
    }
    else {
        item.style.right = '-300px';
    }
}


// portfolio gallery tab //

function open_img(evt, cityName){
    let i, navbar,links;

    // hide all tab content
    navbar = document.getElementsByClassName('navbar');
    for(i = 0; i < navbar.length; i++){
        navbar[i].style.display = "none"
    }
}


window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 20  || document.documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: 'smooth'
    })
}

// responsive our clients slider //

$('.slider').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    sliderToShow: 5,
    sliderToScroll: 1,
    Responsive: [{
        breakpoint: 1024,
        settings: {
            sliderToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            sliderToShow: 2,
            sliderToScroll: 1
        }
    },
    ]
})
