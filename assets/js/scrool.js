const smoothScrollTo = (targetY, duration) => {
    const startingY = window.pageYOffset;
    const diff = targetY - startingY;
    let start;

    const step = (timestamp) => {
        if (!start) start = timestamp;
        const time = timestamp - start;
        let percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = 120;

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        smoothScrollTo(sectionTop, 400);
    }
};
