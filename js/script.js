<script>
//Enable hidden nav bar
{const nav= document.querySelector(".header-nav--hidden");
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