function manageNavbar() {
    let navbar = document.querySelector(".navbar-container")
    let rightItems = document.querySelectorAll(".ri")
    navbar.classList.toggle("show-navbar")
    rightItems.forEach((element) => {
        element.classList.toggle("show-right")
    })
}