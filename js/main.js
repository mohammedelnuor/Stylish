
   




  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });



document.getElementById("shopButton").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
});

// md

  // Show/hide mobile dropdown on Shop click
  document.addEventListener('DOMContentLoaded', function () {
    const shopBtn = document.getElementById('shopButtonMenuo');
    const dropdown = document.getElementById('dropdown1');
    if (shopBtn && dropdown) {
      shopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('hidden');
      });
      // Hide dropdown when clicking outside
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && e.target !== shopBtn) {
          dropdown.classList.add('hidden');
        }
      });
    }
  });



// scrollTo


let Home = document.querySelector('.slit-1');
let About = document.querySelector('.slite-3');
let skills = document.querySelector('.slite-4');
let Education = document.querySelector('.slite-6');
let Projects = document.querySelector('.slite-7');
let Contact = document.querySelector('.slite-8');

// تحديد كل الروابط
let AllLinks = document.querySelectorAll('li');

function scroollToSomth(elements) {
  elements.forEach(ele => {
    ele.addEventListener('click', (e) => {
      // نفذ فقط إذا الرابط فيه data-section
      if (e.target.dataset.section) {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.dataset.section);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

console.log(AllLinks);

scroollToSomth(AllLinks);






// mobile

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});
// Add smooth scrolling to all links








