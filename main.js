const nav_bar_menu = document.querySelector('.nav_bar_menu');
const seeMoreButton = document.querySelector('#seeMoreButton');
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

seeMoreFunction = () =>{
    console.log(company_about.offsetTop);
    console.log(nav_bar_menu.pageYOffset);
    window.scrollTo({
        left: 0,
        top: company_about.offsetTop - 100
    });
}

window.addEventListener('scroll', scrollFunction);
seeMoreButton.addEventListener('click', seeMoreFunction);
