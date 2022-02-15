function OpenNav() {
    if(screen.width <= 768){
        document.getElementById("SideNav").style.width = "250px";
    }
}
function CloseNav() {
    if(screen.width <= 768){
        document.getElementById("SideNav").style.width = "0px";
    }
}

window.onscroll = () => {
    let a = document.querySelector('.navigation_bar')
    if(window.scrollY > 300){
        a.style.backgroundColor = '#010488e6'
        a.style.transition = '0.5s'       
    }
    else{
        a.style.backgroundColor = 'transparent'
        a.style.transition = '0.5s'
    }
}

OpenPopup = () => {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popup').style.animation = 'bounceInLeft 1s';
}
ClosePopup = () => {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup').style.animation = 'bounceOutLeft 1s';
}