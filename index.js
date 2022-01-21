console.log("Javascript chargé")

const navbar = document.getElementById('navbar')

document.addEventListener('scroll', () => {
    if(window.scrollY > 800){
        navbar.className = "visible"
    }else{
        navbar.className = ""
    }
})
