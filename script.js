navbar=document.querySelector('.navbar');
height=document.querySelector('.height');
hnav=document.querySelector('.hnav');
navm=document.querySelector('.navm');
burger=document.querySelector('.burger');
xmark=document.querySelector('.xmark');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('hnav');
    navm.classList.toggle('height');
    burger.classList.toggle('active');

})