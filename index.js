function changeActive(element) {
    const activeElement = document.querySelector('.footercont .active');
    if (activeElement) {
        activeElement.classList.remove('active');
    }
    element.classList.add('active');
}
const homeIcon = document.querySelector('.footercont div:first-child');
homeIcon.classList.add('active');