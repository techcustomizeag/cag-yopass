(function () {
  try {
    var LIGHT = 'lofi';
    var DARK = 'black';
    var storedMode = localStorage.getItem('themeMode'); // 'light' | 'dark'
    var prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    var mode =
      storedMode === 'light' || storedMode === 'dark'
        ? storedMode
        : prefersDark
          ? 'dark'
          : 'light';
    var daisyTheme = mode === 'light' ? DARK : LIGHT;
    document.documentElement.setAttribute('data-theme', daisyTheme);
  } catch (e) {}
})();
