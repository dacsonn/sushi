// SHOW MENU

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
// MENU SHOW

// Validate iff constant exists
if(navToggle){
        navToggle.onclick  = () =>{
            navMenu.classList.add('show-menu')
        }
}

if(navClose){
    navClose.onclick  = () =>{
        navMenu.classList.remove('show-menu')
    }
}


// REMOVE MENU MOBILE

const navLink =  document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUD HEADR

const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        :header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader )


// SHOW SCROLL UP

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('shhow-scroll')
                        :scrollUp.classList.remove('shhow-scroll')
}
window.addEventListener('scroll', scrollUp )


//  SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        sectinonTop = current.offsetTop - 58
        sectionID = current.getAttribute('id')
        sectionClass = document.querySelector(`[secion = "${sectionID}"]`)


    if(scrollY > sectinonTop && scrollY<=sectinonTop + sectionHeight ){
        sectionClass.classList.add('active-link')
    }else{
        sectionClass.classList.remove('active-link')
    }
    })
}

window.addEventListener('scroll', scrollActive)


//Dark light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line' 

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme)
    localStorage.setItem('selected-icon', getCurrentIcon)

})

// CCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})



const scr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.service__container, .home__img, .newsletter__container, .conten__header, .conten__text`)
sr.reveal(`.home__data , .footer__content, .footer__logo , 
.footer__description, .footer__info`,{origin:'bottom'} ) 
sr.reveal(`.about__data, .recently__data, .home__header, .conten__left`,{origin:'left'} ) 
sr.reveal(`.about__img, .recently__img, .conten__right`,{origin:'right'} ) 
sr.reveal(`.popular__card`,{interval: 100} ) 



