/* =========================================================
   THEME.JS — Owner: Group B
   Theme toggle
========================================================= */

(function () {
  var STORAGE_KEY = "hajime-theme";
  var root = document.documentElement;

  // Saved choice > system preference > light
  function getInitialTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;

    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  // Apply the theme and keep the button in sync
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    var isDark = theme === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    var label = btn.querySelector(".theme-toggle__label");
    if (label) label.textContent = isDark ? "Light" : "Dark";
  }

  // Apply immediately to avoid a flash of the wrong theme
  applyTheme(getInitialTheme());

  // Wire up the button once the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(root.getAttribute("data-theme"));

    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {}
    });
  });
})();