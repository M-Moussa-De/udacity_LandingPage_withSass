//jshint esversion: 6

const navUL = document.querySelector("#navLinks");
const sections = document.querySelectorAll("section.content");
const fragment = document.createDocumentFragment();

// Create navbar links dynamically
(function () {
  sections.forEach((sec) => {
    const li = createElement("li");
    const a = createElement("a");
    a.textContent = getIDAndTitle(sec).title;
    a.setAttribute("href", `#${getIDAndTitle(sec).id}`);
    li.appendChild(a);
    fragment.appendChild(li);
  });
  navUL.appendChild(fragment);
})();

function createElement(el) {
  return document.createElement(el);
}
function getIDAndTitle(el) {
  return {
    id: el.getAttribute("id"),
    title: el.firstElementChild.innerHTML,
  };
}
// Nav Links scroll smoothlly
const navLinks = document.querySelectorAll("#navLinks a");
(function () {
  navLinks.forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      document.querySelector(el.hash).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    };
  });
})();

//Is in viewport
window.addEventListener("scroll", inViewport);
function inViewport() {
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    const isInViewPort = rect.top <= 400 && rect.top >= -150;
    if (isInViewPort) {
      sections[i].classList.add("your-active-class");
      navLinks[i].classList.add("link-active");
    } else {
      sections[i].classList.remove("your-active-class");
      navLinks[i].classList.remove("link-active");
    }
  }
}

// Arrow Toppage
const arrow = document.querySelector("#arrow");
window.addEventListener("scroll", () => {
  const showArrow =
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  if (showArrow) {
    arrow.classList.add("showArrow");
    return;
  }
  arrow.classList.remove("showArrow");
});
arrow.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
