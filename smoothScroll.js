// About Smooth Scroll //
document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the target div
    const aboutDiv = document.getElementById('about-section');
  
    // Add a click event listener to the anchor link
    document.querySelector('a[href="#aboutDiv"]').addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor link behavior
  
      // Calculate the distance from the top of the page to the target div
      const distanceToaboutDiv = aboutDiv.getBoundingClientRect().top;
    });
  });


// Services Smooth Scroll //
document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the target div
    const servicesDiv = document.getElementById('services-container');
  
    // Add a click event listener to the anchor link
    document.querySelector('a[href="#servicesDiv"]').addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor link behavior
  
      // Calculate the distance from the top of the page to the target div
      const distanceToServicesDiv = servicesDiv.getBoundingClientRect().top;
    });
  });

  // Contact Smooth Scroll //
document.addEventListener('DOMContentLoaded', function () {
  // Get reference to the target div
  const contactDiv = document.getElementById('footer-container');

  // Add a click event listener to the anchor link
  document.querySelector('a[href="#contactDiv"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor link behavior

    // Calculate the distance from the top of the page to the target div
    const distanceToContactDiv = contactDiv.getBoundingClientRect().top;
  });
});