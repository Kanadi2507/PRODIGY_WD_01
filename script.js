window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

const font=document.getElementById('changefont');
font.addEventListener('click',function(event){
    event.preventDefault();
    document.body.style.fontFamily = 'monotype corsiva';
});

const background=document.getElementById('changebackground');
background.addEventListener('click',function(event){
    event.preventDefault();
    document.body.style.backgroundImage = 'url("../Task-1/b2.jpg")';
});
