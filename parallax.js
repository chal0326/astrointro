document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const background = document.getElementById('background');
    const midground = document.getElementById('midground');
    const foreground = document.getElementById('foreground');
  
    // Adjust these values to change the speed of each layer
    background.style.transform = `translateY(${scrollPosition * 0.25}px)`;
    midground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    foreground.style.transform = `translateY(${scrollPosition * 0.75}px)`;
  });
  