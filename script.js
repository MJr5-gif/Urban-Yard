const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('header nav ul')

if (hamburger && navLinks) {

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open')
    hamburger.classList.toggle('open')

    const isExpanded = navLinks.classList.contains('open')
    hamburger.setAttribute('aria-expanded', isExpanded)
  })

  const allNavLinks = document.querySelectorAll('header nav ul li a')

  allNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open')
      hamburger.classList.remove('open')
      hamburger.setAttribute('aria-expanded', false)
    })
  })

  document.addEventListener('click', function (event) {
    const clickedInsideNav = navLinks.contains(event.target)
    const clickedHamburger = hamburger.contains(event.target)

    if (!clickedInsideNav && !clickedHamburger) {
      navLinks.classList.remove('open')
      hamburger.classList.remove('open')
      hamburger.setAttribute('aria-expanded', false)
    }
  })
}
