console.log("Portfolio website loaded!");

// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjusted for header
      behavior: "smooth"
    });
  });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

function checkVisibility() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

    if (isVisible) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility(); // Check visibility on load
