let resMenu = document.querySelector('.res-menu');
let menuList = document.querySelector('.navbar__list');
let flag = false;

resMenu.addEventListener('click',()=>{
    if(!flag){
        menuList.style.display ='block';
        resMenu.style.transform='rotate(90deg)'
        flag=true;
    }else{
        menuList.style.display ='none';
        resMenu.style.transform='rotate(0deg)'

        flag=false;
    }
})