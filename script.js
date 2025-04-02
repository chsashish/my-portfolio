window.addEventListener("load", function () {
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
      link.style.transition = "transform 3s ease";
      
      link.addEventListener("mouseover", function () {
          this.style.transform = "translateX(10px)";
      });

      link.addEventListener("mouseout", function () {
          this.style.transform = "translateX(0)";
      });
  });
});

const themeToggleButton = document.getElementById('theme-toggle');
        themeToggleButton.addEventListener('click', function () {
            const original = document.getElementById('theme-original');
            const pantone = document.getElementById('theme-pantone');

            if (original.classList.contains('d-none')) {
                original.classList.remove('d-none');
                pantone.classList.add('d-none');
            } else {
                pantone.classList.remove('d-none');
                original.classList.add('d-none');
            }
        });
