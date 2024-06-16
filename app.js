//app.js

document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Added to cart!");
    });
  });

  // GSAP Animations
  gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "ease-in" });
  gsap.from(".hero-section h1", {
    duration: 2,
    x: -80,
    opacity: 0,
    ease: "ease-in",
  });
 
  gsap.from(".section ", {
   
    duration: 3,
    x: -80,
    opacity: 0,
    ease: "fade-in",
  });
});
