function toggleTheme() {
    let isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', isDark ? 'true' : 'false'); // Correctly storing the boolean as a string
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
    }
});
