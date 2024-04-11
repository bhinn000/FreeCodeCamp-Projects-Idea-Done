
// const queTxt=document.querySelector('.question')

// const btn=document.querySelector('.question-btn')

// .addEventListener('click',function(){
//     queTxt.classList.toggle('show-text')
// })

const questions=document.querySelectorAll(".question")
// const questionText=document.querySelector

questions.forEach(function(que){
    // console.log(que)
    const btn=que.querySelector('.question-btn')
    btn.addEventListener('click',function(){
        // console.log("Krishna")
        que.classList.toggle("show-text")
    })
})
