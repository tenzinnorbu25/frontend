window.onload=function(){
   const menu_btn=document.querySelector('.hamburger');
   const moblie_menu=document.querySelector('.mobile-nav');
   const login_button=document.querySelector('.btnlogin-popup');
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        moblie_menu.classList.toggle('is-active');
        login_button.classList.toggle('is-active');
    })
      
}