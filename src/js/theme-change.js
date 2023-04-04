
    // Отримуємо всі елементи з класом '.dark-mode-toggle'
    const toggleElements = document.querySelectorAll('.dark-mode-toggle');
  
    // Отримуємо тіло сторінки
    const body = document.body;
  
    // Задаємо назву темної теми
    const darkTheme = 'dark-theme';
  
    // Створюємо клас ThemeToggle
    class ThemeToggle {
      // Встановлюємо обробник події на кожному елементі toggle
      constructor() {
        toggleElements.forEach(el => {
          el.addEventListener('click', () => this.toggleTheme());
        });
      }
  
      // Встановлюємо локальне сховище темної теми
      setTheme() {
        localStorage.setItem(darkTheme, darkTheme);
      }
  
      // Видаляємо темну тему з локального сховища
      removeTheme() {
        localStorage.removeItem(darkTheme);
      }
  
      // Отримуємо поточний стан темної теми з локального сховища
      getTheme() {
        return localStorage.getItem(darkTheme);
      }
  
      // Перевіряємо, чи включена темна тема на сторінці
      isDarkThemeOn() {
        return body.classList.contains(darkTheme);
      }
  
      // Перемикаємо темну тему на сторінці та зберігаємо її стан в локальне сховище
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
  
      // Встановлюємо темну тему на сторінці за заданим станом
      setThemeOn(isOn) {
        body.classList.toggle(darkTheme, Boolean(isOn));
        toggleElements.forEach(el => {
          el.checked = Boolean(isOn);
        });
      }
    }
  
    // Створюємо екземпляр класу ThemeToggle
    const toggle = new ThemeToggle();
  
    // При завантаженні сторінки перевіряємо наявність темної теми в локальному сховищі
    window.addEventListener('DOMContentLoaded', () => {
      const isOn = toggle.getTheme();
      if (isOn) {
        toggle.setThemeOn(darkTheme);
      }
    });
 