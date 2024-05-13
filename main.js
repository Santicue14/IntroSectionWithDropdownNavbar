const toggleMenuButton = document.querySelector('#toggleMenu')
const navBar = document.querySelector('#navbar')
const hideMenuButton = document.querySelector('#close-btn')
const featuresButton = document.querySelector('#features-btn')
const featuresUl = document.querySelector('.features-ul')
const companyButton = document.querySelector('#company-btn')
const companyUl = document.querySelector('.company-ul')
const arrowFeaturesButton = document.querySelector('#featuresButton')
const arrowCompanyButton = document.querySelector('#companyButton')

toggleMenuButton.addEventListener('click', () => {
    navBar.style.display = 'block'
    toggleMenuButton.style.display = 'none'
})

hideMenuButton.addEventListener('click', () => {
    const scrSize = window.innerWidth
    if (scrSize >= 768) {
        navBar.style.display = 'block'
    } else {
        navBar.style.display = 'none'
        toggleMenuButton.style.display = 'block'
    }
})

featuresButton.addEventListener('click', () => {
    (featuresUl.style.display === 'block') ?
        (featuresUl.style.display = 'none',
            arrowFeaturesButton.style.transform = 'rotate(0deg)',
            companyUl.style.display = 'none') :
        (featuresUl.style.display = 'block',
            arrowFeaturesButton.style.transform = 'rotate(180deg)',
            companyUl.style.display = 'none',
            arrowCompanyButton.style.transform = 'rotate(0deg)');
    ;
})


companyButton.addEventListener('click', () => {
    (companyUl.style.display === 'block') ?
        (companyUl.style.display = 'none',
            arrowCompanyButton.style.transform = 'rotate(0deg)',
            featuresUl.style.display = 'none') :
        (companyUl.style.display = 'block',
            arrowCompanyButton.style.transform = 'rotate(180deg)',
            featuresUl.style.display = 'none',
            arrowFeaturesButton.style.transform = 'rotate(0deg)');
})

