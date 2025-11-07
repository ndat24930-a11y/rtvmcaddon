function linkAddon1() {
  window.open("https://www.mediafire.com/file/7zd66klpl6a3yjb/Fairy+Dust.mcaddon/file", "_blank");
}

function linkAddon2() {
  window.open("https://www.mediafire.com/file/zs8z8kynatftszn/Cobblestone+Generators+MCPE.mcaddon/file", "_blank");
}

function linkPackVietHoa() {
  window.open("https://mcpedl.com/the-ty-els-vietnamese-language-pack/", "_blank");
}

function linkYT() {
  window.open("https://youtube.com/@gartv7720?si=U1bKeU6IQ2St4PXB", "_blank");
}

function linkTikTok() {
  window.open("https://www.tiktok.com/@gartv7720?_r=1&_t=ZS-917GxsASFfc", "_blank");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  document.addEventListener("click", function(event) {
    const { target } = event
    const button = document.querySelector(".menu-btn");
    const noname = document.querySelector(".noname");
    if (noname.contains(target)) return
    if (!menu.contains(target) && !button.contains(target)) {
      menu.classList.remove("show");
    }
  })
}

function toggleSearch() {
  const search = document.getElementById("search");
  const list = document.getElementById("list").getElementsByTagName("button");
  search.classList.toggle("show");
  search.addEventListener("keyup", function() {
    const value = this.value.toLowerCase();
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      item.style.display = item.textContent.toLowerCase().includes(value) ? "" : "none";
    }
  })
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("Service Worker registered!"))
    .catch(err => console.log("Service Worker failed:", err));
}

