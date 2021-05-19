let arrowIcon = document.querySelectorAll(".questions-block");
let answer = document.querySelector(".answer");

console.log(arrowIcon);

arrowIcon.forEach((e) =>{
    arrowIcon.addEventListener('click', () =>{
        if (answer.style.display === 'none'){
            answer.style.display = 'block';
        } else{
            answer.style.display = 'none';
        }
    })
});
