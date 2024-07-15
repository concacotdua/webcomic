const infoUser = document.querySelector(".js-info-user");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-close");
const imgUser = document.querySelector(".js-img");

function showInfoUser(e) {
  let aEle = document.links;
  aEle.onclick = function (e) {
    if (e.target.href.startsWith("#")) {
      e.preventDefault();
    }
  };
  modal.classList.add("open");
}
function hideInfoUser() {
  modal.classList.remove("open");
}
infoUser.addEventListener("click", showInfoUser);
modalClose.addEventListener("click", hideInfoUser);
