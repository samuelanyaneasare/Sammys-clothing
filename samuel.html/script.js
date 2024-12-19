// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Select the target section

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
      const productName = this.parentElement.querySelector('h3').textContent; // Get product name
      alert(`${productName} has been added to your cart!`); // Alert user
  });
});