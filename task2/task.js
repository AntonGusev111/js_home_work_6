function menuClick (){
    
    const menuBar = document.getElementsByClassName("menu__link");
    for (let i = 0; i < menuBar.length; i++){
         menuBar[i].onclick = () => { if (menuBar[i].nextElementSibling != null){
            const menuOpen = document.getElementsByClassName("menu menu_sub menu_active");
            if(menuOpen.length > 0){menuOpen[0].className = 'menu menu_sub'}
            menuBar[i].nextElementSibling.className='menu menu_sub menu_active';
            return false // Прошу объяснить в комментарии как работает false и почему без него меню закрывается
         }}
    }
}


menuClick ()
