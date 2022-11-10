export const displayCards = () => {
    const checkBoxes = document.querySelectorAll('[data-id="checkbox"]');
    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', (e) => {
            let displayNumber = e.target.dataset.display;
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.dataset.display = `display${displayNumber}`);
            checkBoxes.forEach((element) => {
                if (e.currentTarget !== element) {
                    element.checked = false;
                }
            });
        });
    });
};
