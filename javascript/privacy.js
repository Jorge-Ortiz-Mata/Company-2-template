const nav_bar_menu = document.querySelector('.nav_bar_menu');
const company_about = document.querySelector('.company_about');

scrollFunction = () => {
    let scrollValue = window.pageYOffset;
    if(scrollValue > 50){
        nav_bar_menu.classList.add('fixed_nav_bar_menu');
    }
    else if(scrollValue < 50){
        nav_bar_menu.classList.remove('fixed_nav_bar_menu');
    }
}

window.addEventListener('scroll', scrollFunction);
