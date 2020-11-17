const paragraphs = document.getElementsByTagName('p');
let paragraphsArray = [...paragraphs];

paragraphsArray.forEach(element => {
    element.style.visibility = 'hidden';
});

window.onscroll = () => {
    paragraphsArray.forEach(element => {
        if (window.scrollY >= element.getBoundingClientRect().top) {
            element.style.visibility = 'visible';
        }
    });
}
