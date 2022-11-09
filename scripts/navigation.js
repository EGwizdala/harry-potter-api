export const handleNavigation = () => {
    const hamburger = document.querySelector(".navigation__hamburger-icon");
    const navMain = document.querySelector(".navigation__main");
    
    hamburger.addEventListener("click", () => {
        navMain.classList.toggle('hidden')
    });
    
    window.onresize = () => {
        if (window.innerWidth <= 744) {
            navMain.classList.add('hidden');
        }
        else navMain.classList.remove('hidden');
    };
}

