<script>
//Enable hidden nav bar
{const nav = document.querySelector(".nav");
let last ScrollY = window.scrollY;
window.addEventListener("scroll",() =>{
  if (lastScrollY<window,scrollY) {
    nav.classList.add("header-nav--hidden");
  } else {
    nav.classList.remove("header-nav--hidden");
  }
   lastScrollY=window.scrollY;
 });
}
</script>