const chooseColor = document.querySelectorAll('.colors__button');
const contentImage = document.querySelectorAll('.image');

chooseColor.forEach(function (element) {
   element.addEventListener("click", open)
});

function open(e) {

   const target = e.currentTarget;
   const button = target.dataset.button;
   const contentActive = document.querySelectorAll(`.${button}`);

   chooseColor.forEach(function (item) {
      item.classList.remove("colors__button--active")
   });
   target.classList.add("colors__button--active");

   contentImage.forEach(function (item) {
      item.classList.remove("image--active")
   });

   contentActive.forEach(function (item) {
      item.classList.add("image--active")
   });

}