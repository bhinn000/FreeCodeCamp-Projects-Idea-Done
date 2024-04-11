//I did
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const openBtn=document.querySelector('.btn')
openBtn.addEventListener('click',function(){
    // document.querySelector('.btn').style.backgroundColor="red"
    modal.classList.add('open-modal')

    closeBtn.addEventListener('click',function(){
        modal.classList.remove('open-modal')
    })

})