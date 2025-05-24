document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      }
    });
  });

  // Card hover effect
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });

  // Contact form handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Here you would typically send the data to a server
      console.log("Form submitted:", data);

      // Show success message
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }

  // Scroll reveal animation
  const scrollReveal = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    delay: 200,
    reset: true,
  });

  scrollReveal.reveal(".card", { interval: 200 });
  scrollReveal.reveal(".section-title", { origin: "top" });
});
