const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("#site-menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-read-more]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.getAttribute("aria-controls"));
    if (!target) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    target.hidden = isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "Read more" : "Show less";
  });
});

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 2,
    },
  });
}
