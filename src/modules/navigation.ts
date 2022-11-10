export const handleNavigation = () => {
    const hamburger = document.querySelector(".navigation__hamburger-icon") as HTMLElement;
    const navMain = document.querySelector(".navigation__main") as HTMLElement;
    
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

