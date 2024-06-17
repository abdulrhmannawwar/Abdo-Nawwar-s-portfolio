let nav = document.querySelector('.nav');
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let btn = document.querySelector('.btn');
window.onscroll = () =>{
    if(window.scrollY>=400){
        nav.style.backgroundColor = '#181a1b';
        a1.style.color  = 'white';
        a2.style.color  = 'white';
        a3.style.color  = 'white';
        a4.style.color  = 'white';
    } else {
        nav.style.backgroundColor = 'transparent';
        a1.style.color  = 'black';
        a2.style.color  = 'black';
        a3.style.color  = 'black';
        a4.style.color  = 'black';
    }
}
btn.onclick = () =>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0
}