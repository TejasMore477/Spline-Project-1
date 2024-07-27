document.querySelector('spline-viewer').addEventListener('wheel', (event) => {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY,
        behavior: 'smooth'
    });
});

document.addEventListener('mousemove', (event) => {
    const follower = document.querySelector('#follower');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    follower.style.left = `${mouseX}px`;
    follower.style.top = `${mouseY}px`;
});
