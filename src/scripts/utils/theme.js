import $ from 'jquery';

export function theme() {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark && localStorage.getItem('theme') !== 'theme-light') {
        setTheme('theme-dark');
    }

    $(".switch input").on('change', toggleTheme);

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.getElementById('themeSwitch').checked = false;
        } else {
            setTheme('theme-light');
            document.getElementById('themeSwitch').checked = true;
        }
    })();
}
