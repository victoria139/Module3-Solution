<script>
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "none";
        } else {
          document.getElementById("navbar").style.top = "initial";
        }
        prevScrollpos = currentScrollPos;
      }
    </script>