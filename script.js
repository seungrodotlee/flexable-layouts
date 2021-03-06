window.addEventListener("DOMContentLoaded", () => {
  let roots = document.querySelectorAll(".root");
  let menuBar = document.querySelector(".menu-bar");
  let current = null;
  location.hash === "" ? location.hash = "basic" : null;

  roots.forEach(r => {
    let id = r.getAttribute("id");
    let a = document.createElement("a");
    a.setAttribute("href", `#${id}`);
    a.textContent = id;
    a.addEventListener("click", () => {
      current ? current.classList.remove("current") : null;
      a.classList.add("current");
      current = a;
    })

    menuBar.appendChild(a);

    if(id === location.hash.replace("#", "")) {
      current = a;
      a.classList.add("current");
    }
  })
})