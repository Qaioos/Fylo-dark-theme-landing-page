let features = document.querySelector(".Features")
let team = document.querySelector(" .nav_menu .Teams")
let sign_In = document.querySelector(".Sign-In")
let Up = document.querySelector(".UP")
/*  Sections  */
let service = document.querySelector(".Service")
let seTeam = document.querySelector(".Team")

console.log(seTeam.offsetTop)


features.addEventListener("click",function(){
        window.scrollTo({
        left:0,
        top:service.offsetTop,
        behavior:"smooth"
    })
})

team.addEventListener('click',function(){
        window.scrollTo({
        left:0,
        top:seTeam.offsetTop -110,
        behavior:"smooth"
    })
})

sign_In.addEventListener('click',function(){
        window.scrollTo({
        left:0,
        top:2300,
        behavior:"smooth"
    })
})


Up.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
})

window.onscroll =function(){

    if(window.scrollY > 1000){
        Up.style.display="block"
        console.log("hi")
    }else{
        Up.style.display="none"
    }
    console.log(Math.round(window.scrollY))
}