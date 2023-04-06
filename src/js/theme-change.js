
    const toggleElements = document.querySelectorAll('.dark-mode-toggle');  
    const body = document.body;
    const darkTheme = 'dark-theme';  
    class ThemeToggle {
      constructor() {
        toggleElements.forEach(el => {
          el.addEventListener('click', () => this.toggleTheme());
        });
      }
  
      setTheme() {
        localStorage.setItem(darkTheme, darkTheme);
      }
  
      removeTheme() {
        localStorage.removeItem(darkTheme);
      }
  
      getTheme() {
        return localStorage.getItem(darkTheme);
      }
  
      isDarkThemeOn() {
        return body.classList.contains(darkTheme);
      }
  
      toggleTheme() {
        const isDark = this.isDarkThemeOn();
        body.classList.toggle(darkTheme, !isDark);
        toggleElements.forEach(el => {
          el.checked = !isDark;
        });
        if (this.getTheme()) {
          this.removeTheme();
        } else {
          this.setTheme();
        }
        document.querySelectorAll('.header-nav__item').forEach(el => {
          el.classList.toggle(darkTheme, !isDark);
        });
      }
  
      setThemeOn(isOn) {
        body.classList.toggle(darkTheme, Boolean(isOn));
        toggleElements.forEach(el => {
          el.checked = Boolean(isOn);
        });
      }
    }
  
    const toggle = new ThemeToggle();
  
    window.addEventListener('DOMContentLoaded', () => {
      const isOn = toggle.getTheme();
      if (isOn) {
        toggle.setThemeOn(darkTheme);
      }
    });
 