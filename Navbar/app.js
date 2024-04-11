//I did , I learnt
const navToggle=document.querySelector('.nav-toggle')
const links=document.querySelector('.links')

navToggle.addEventListener('click',function(){

    console.log(links.classList.contains("links"))
//    links.classList.add('.show-links')

 
    links.classList.toggle("show-links")
})